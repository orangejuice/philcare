import type {Metadata} from "next"
import {Inter} from "next/font/google"
import "./globals.css"
import Script from "next/script"
import React, {ReactNode} from "react"
import {Analytics} from "@vercel/analytics/react"
import {Navigation} from "@/components/navigation"
import Link from "next/link"

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
      <Analytics/>
      <body className={`font-sans ${inter.className}`}>
        <Navigation/>
        {children}
        <footer className="bg-blue-900 text-white py-6">
          <div className="container mx-auto px-6 flex flex-row justify-between">
            <p>&copy; 2024 PhilCare Ireland. All rights reserved.</p>
            <div className="flex gap-4 text-white">
              <Link href="https://www.facebook.com/philcare.ie" className="hover:text-yellow-400 transition-colors duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <title>Facebook</title>
                  <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z"/>
                </svg>
              </Link>
              <a href={undefined} className="hover:text-yellow-400 transition-colors duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <title>LinkedIn</title>
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
