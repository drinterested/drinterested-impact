interface SeoSchemaProps {
  schema?: Record<string, unknown>
  // Required and must be unique per page — used as the <script> key so two blocks on the
  // same page can't collide.
  id: string
}

/**
 * Renders a JSON-LD block as a plain <script> tag so it is present in the server-rendered
 * HTML (what crawlers read first), rather than being injected client-side.
 */
export default function SeoSchema({ schema, id }: SeoSchemaProps) {
  if (!schema) return null

  return (
    <script
      id={id}
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
      }}
    />
  )
}
