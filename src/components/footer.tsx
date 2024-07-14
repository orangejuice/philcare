import Link from "next/link"
import React from "react"

export function Footer(){
  return (
    <footer className="bg-blue-900 text-white py-6">
      <div className="container mx-auto px-6 flex flex-col gap-2 md:flex-row md:justify-between">
        <p>&copy; 2024 PhilCare Ireland. All rights reserved.</p>
        <div className="flex gap-4 text-white">
          Follow us:
          <Link href="https://www.facebook.com/philcare.ie" className="flex items-center gap-2 font-medium hover:text-yellow-400 transition-colors duration-300">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z"/>
            </svg>
            Facebook
          </Link>
        </div>
      </div>
    </footer>
  )
}
