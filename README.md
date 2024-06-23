# A Landing Page built on Modern Tech

![deploy](https://img.shields.io/github/deployments/orangejuice/philcare/production?logo=vercel&label=Vercel)

A simple yet comprehensive single-page marketing landing page showcasing:

> **Who** we are, **What** we do, **Why** choose us, **How** we do it, **Get in touch**

## Tech Stack

- Built on `Next.js`, `TailwindCSS`, `Framer Motion`
- Utilize `useFormStatus`, `useFormState`, and `Server action` for handling form submission
- `Mailgun` for automated email sending
- Lazy load `Cloudflare Turnstile` for user-friendly CAPTCHA protection
- `Leaflet` for highly customizable map display
- `Thunderforest` for a generous, clean, high-DPI map tiles
- Custom TypeScript crawling script powered by `Crawlee` for data extraction and Excel export

<sup>Credits to `ChatGPT`, `Claude`, `Midjourney` for highly enjoyable pair programming experience<sup/>

## Environment Variables

To run this project, you'll need to set up the following environment variables:

```dotenv
NEXT_PUBLIC_THUNDERFOREST_API_KEY=your_thunderforest_api_key
NEXT_PUBLIC_CLOUDFLARE_SITE_KEY=your_cloudflare_site_key
CLOUDFLARE_SECRET_KEY=your_cloudflare_secret_key
MAILGUN_API_KEY=your_mailgun_api_key
MAIL_RECIPIENTS=comma,separated,email,addresses
```

**Note**: For [local testing](https://developers.cloudflare.com/turnstile/troubleshooting/testing/) of Cloudflare
Turnstile, you can use the following keys:

- Site Key: `1x00000000000000000000AA`
- Secret Key: `1x0000000000000000000000000000000AA`

## Getting Started

1. Clone the repository
2. Install dependencies: `bun install`
3. Set up your environment variables in a `.env.local` file
4. Run the development server: `bun run dev`
5. Open [http://localhost:3000](http://localhost:3000) in your browser

## License

This project is licensed under the [MIT License](LICENSE).
