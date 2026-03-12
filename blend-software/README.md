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

## Contact form email configuration

Required environment variables:

- RESEND_API_KEY: API key from Resend.
- RESEND_FROM_EMAIL: sender email verified in Resend.
- CONTACT_TO_EMAIL: destination inbox where form submissions are received.

Notes:

- The endpoint is src/app/api/contacto/route.ts.
- If required fields are missing, API returns 400.
- If mail provider config fails, API returns 500.

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
