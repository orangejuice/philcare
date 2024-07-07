import type {Metadata} from "next"
import {Inter} from "next/font/google"
import "./globals.css"
import Script from "next/script"
import {ReactNode} from "react"
import {Analytics} from "@vercel/analytics/react"

const inter = Inter({subsets: ["latin"]})

export const metadata: Metadata = {
  title: "PhilCare Ireland",
  description: "Bridging healthcare across continents, empowering Irish nursing homes with exceptional Filipino talent.",
  icons: {
    icon: [{url: "/favicon-16x16.png", sizes: "16x16"}, {url: "/favicon-32x32.png", sizes: "32x32"}],
    apple: "/apple-touch-icon.png"
  },
  manifest: "/site.webmanifest"
}

export default function RootLayout({children}: Readonly<{children: ReactNode}>) {
  return (
    <html lang="en">
      <Script src="https://challenges.cloudflare.com/turnstile/v0/api.js" async={true} defer={true}/>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-6GQSVJFT1H" async={true} defer={true}/>
      <Script id="google-analytics">{`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag("js", new Date());
        gtag("config", "G-6GQSVJFT1H");`}
      </Script>
      <Analytics/>
      <body className={`font-sans ${inter.className}`}>{children}</body>
    </html>
  )
}
