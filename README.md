<div align="center">

### A Landing Page Built on Modern Tech

![deploy](https://img.shields.io/github/deployments/orangejuice/philcare/production?logo=vercel&label=Vercel)
![nextjs](https://img.shields.io/github/package-json/dependency-version/orangejuice/blog/next?label=Next.js&logo=next.js&color=222)
![typescript](https://img.shields.io/badge/Typescript-3178c6?logo=typescript&logoColor=fff)
![tailwind](https://img.shields.io/badge/Tailwind%20CSS-06b6d4?logo=tailwindcss&logoColor=fff)
![motion](https://img.shields.io/badge/Framer%20Motion-0055ff?logo=framer&logoColor=fff)
![leaflet](https://img.shields.io/badge/Leaflet-199900?logo=leaflet&logoColor=fff)

</div>

A simple yet comprehensive single-page marketing landing page showcasing:

> **Who** we are, **What** we do, **Why** choose us, **How** we do it, **Get in touch**

## 📡 Tech Stack

- Built on `Next.js`, `TailwindCSS`, `Framer Motion`
- Modern form handling utilizing React `Server Actions`
- `Resend` for automated email sending
- Markdown support for content management, powered by contentlayer and Google Drive as remote storage
- Lazy load `Cloudflare Turnstile` for user-friendly CAPTCHA protection
- `Leaflet` for highly customizable map display and `Thunderforest` for a generous, clean, high-DPI map tiles
- Custom TypeScript crawler powered by `Crawlee` and `Puppeteer` for data extraction and Excel export

<sup>Credits to `ChatGPT-4o`, `Claude-3.5 Sonnet`, `Midjourney v6` for highly enjoyable pair programming
experience<sup/>

## 💿 Environment Variables

To run this project, you'll need to set up the following environment variables:

```dotenv
NEXT_PUBLIC_THUNDERFOREST_API_KEY=your_thunderforest_api_key
NEXT_PUBLIC_CLOUDFLARE_SITE_KEY=your_cloudflare_site_key
CLOUDFLARE_SECRET_KEY=your_cloudflare_secret_key
MAILGUN_API_KEY=your_mailgun_api_key
MAIL_RECIPIENTS=comma,separated,email,addresses
GOOGLE_CLIENT_EMAIL=email_address_of_service_account
GOOGLE_CLIENT_PRIVATE_KEY=private_key_of_service_account
```

**Note**: For [local testing](https://developers.cloudflare.com/turnstile/troubleshooting/testing/) of Cloudflare
Turnstile, you can use the following keys:

- Site Key: `1x00000000000000000000AA`
- Secret Key: `1x0000000000000000000000000000000AA`

## 🕹️ Getting Started

1. Clone the repository
2. Install dependencies: `bun install`
3. Set up your environment variables in a `.env.local` file
4. Run the development server: `bun run dev`
5. Open [http://localhost:3000](http://localhost:3000) in your browser

<sup> For crawler, run with `bun tool/crawler.ts {Website Url}`<sup/>

## License

This project is licensed under the [MIT License](LICENSE).
