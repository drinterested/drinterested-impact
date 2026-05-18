import Script from "next/script"
import DOMPurify from 'dompurify';

interface SeoSchemaProps {
  schema: Record<string, any>
}

function sanitizeHtml(html: string | null | undefined) {
  return html
    ? DOMPurify.sanitize(html, {
        ALLOWED_TAGS: ['span', 'p'],
        ALLOWED_ATTR: ['class'],
      })
    : '';
}

export default function SeoSchema({ schema }: SeoSchemaProps) {
  return (
    <Script
      id="seo-schema"
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: sanitizeHtml(JSON.stringify(schema)),
      }}
    />
  )
}
