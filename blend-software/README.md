# Blend Software Landing

Landing page built with Next.js App Router.

## Local setup

1. Install dependencies:

npm install

2. Create your local env file from example:

Copy .env.example to .env.local and complete values.

3. Start development server:

npm run dev

4. Build check:

npm run build

## Project structure

- `src/lib/site.ts`: business data (email, domain, location, nav). Change contact details here only.
- `src/lib/metadata.ts`: per-page SEO metadata helper (title, description, canonical, Open Graph).
- `src/content/`: shared copy (services, process, FAQ, positioning) used by the home and the inner pages.
- `src/components/sections/`: home sections (Hero, Problem, Services, Process, Difference, Faq, CTA) plus Navbar and Footer.
- `src/components/ui/`: Button, PageHero, ComparisonTable, LegalDocument, BlendLogo.
- `src/styles/_variables.scss`: design tokens (palette, type scale, spacing, radii, motion).
- `src/app/robots.ts`, `sitemap.ts`, `opengraph-image.tsx`, `icon.svg`, `apple-icon.tsx`: generated SEO assets.

Set `NEXT_PUBLIC_SITE_URL` in production so canonical URLs, the sitemap and structured data use the real domain (defaults to `https://blendsoftware.tech`).

## Contact form email configuration

Required environment variables:

- NEXT_PUBLIC_SITE_URL: public URL of the site, no trailing slash.
- RESEND_API_KEY: API key from Resend.
- RESEND_FROM_EMAIL: sender email verified in Resend.
- CONTACT_TO_EMAIL: destination inbox where form submissions are received.

Notes:

- The endpoint is src/app/api/contacto/route.ts.
- If required fields are missing or the email is invalid, API returns 400.
- Optional fields (empresa, servicio, presupuesto) are included in the email when present.
- A hidden honeypot field (`website`) silently drops bot submissions.
- If mail provider config fails or Resend rejects the send, API returns 500.

## Quick API test

Run with the app running locally:

curl -X POST http://localhost:3000/api/contacto -H "Content-Type: application/json" -d "{\"nombre\":\"Juan\",\"email\":\"juan@empresa.com\",\"mensaje\":\"Hola, necesito una propuesta\"}"

Expected responses:

- 200: mail sent.
- 400: missing nombre, email or mensaje.
- 500: internal error or missing provider credentials.

## VPS and container checklist

1. Set environment variables on the server before starting container.
2. Build and run the container.
3. Validate endpoint health with a POST request.
4. Configure reverse proxy and HTTPS.
5. Check logs if submit fails.
