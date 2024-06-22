import type {Metadata} from "next"
import {Inter} from "next/font/google"
import "./globals.css"
import Script from "next/script"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PhilCare Ireland",
  description: "Bridging healthcare across continents, empowering Irish nursing homes with exceptional Filipino talent."
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Script src={"https://challenges.cloudflare.com/turnstile/v0/api.js"} async={true} defer={true}/>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
