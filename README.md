# Single-Page Marketing Landing Page

A comprehensive single-page marketing landing page showcasing:

1. **Who** we are & **What** we do
2. **Why** choose us
3. **How** we do it

The page includes a dedicated contact form for easy communication.

## Tech Stack

- **Frontend**:
    - [Next.js](https://nextjs.org/) for server-side rendering and routing
    - [TailwindCSS](https://tailwindcss.com/) for utility-first styling
    - [Framer Motion](https://www.framer.com/motion/) for smooth animations

- **Backend Services**:
    - [Mailgun](https://www.mailgun.com/) for automated email sending
    - [Cloudflare Turnstile](https://www.cloudflare.com/products/turnstile/) for user-friendly CAPTCHA protection

- **Map Integration**:
    - [Leaflet](https://leafletjs.com/) for highly customizable map display
    - [Thunderforest](https://www.thunderforest.com/) for a generous, clean, high-DPI map tiles

- **Data Processing**:
    - Custom TypeScript crawling script powered by [Crawlee](https://crawlee.dev/) for data extraction and Excel export

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
