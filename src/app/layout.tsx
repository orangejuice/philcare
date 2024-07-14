import type {Metadata} from "next"
import {Inter} from "next/font/google"
import "./globals.css"
import Script from "next/script"
import React, {ReactNode} from "react"
import {Analytics} from "@vercel/analytics/react"
import {Header} from "@/components/header"
import {Footer} from "@/components/footer"

const inter = Inter({subsets: ["latin"]})

export const metadata: Metadata = {
  title: "PhilCare Ireland | Filipino Healthcare Professionals for Irish Nursing Homes",
  description: "PhilCare Ireland specializes in recruiting skilled Filipino healthcare professionals for nursing homes across Ireland. Bridging healthcare across continents, empowering Irish nursing homes with exceptional Filipino talent.",
  keywords: "Filipino nurses, Irish nursing homes, healthcare recruitment, PhilCare Ireland, overseas nurses, elderly care, home care, private healthcare",
  robots: "index, follow",
  openGraph: {
    title: "PhilCare Ireland | Filipino Healthcare Professionals",
    description: "Connecting skilled Filipino healthcare workers with Irish nursing homes."
  },
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
      <Script id="ld" type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "PhilCare Ireland",
          "alternateName": "PhilCare",
          "url": "https://philcare.ie",
          "logo": "https://philcare.ie/logo-3.png",
          "sameAs": ["https://facebook.com/philcare.ie"],
          "description": "PhilCare Ireland provides skilled healthcare professionals from the Philippines to Irish nursing homes, offering expert recruitment and seamless integration services.",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Unit 277, Colab, Atlantic Technological University, Port Road",
            "addressLocality": "Letterkenny",
            "addressRegion": "Co. Donegal",
            "postalCode": "F92 A0PY",
            "addressCountry": "IE"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+353-085-266-8895",
            "contactType": "customer support",
            "email": "info@philcare.ie",
            "availableLanguage": ["English"]
          },
          "areaServed": {
            "@type": "Country",
            "name": "Ireland"
          },
          "potentialAction": [{
            "@type": "ViewAction",
            "target": "https://philcare.ie/candidates",
            "name": "View Our Candidates"
          }]
        })
      }}/>
      <Analytics/>
      <body className={`font-sans ${inter.className}`}>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
