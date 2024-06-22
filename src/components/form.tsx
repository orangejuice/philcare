"use client"
import {useFormState, useFormStatus} from "react-dom"
import {onConcatMessage} from "@/app/action"
import React, {useEffect, useRef} from "react"
import {motion} from "framer-motion"

export function ContactForm() {
  const {pending: isPending} = useFormStatus()
  const [formState, formAction] = useFormState(onConcatMessage, {message: ""})
  const formRef = useRef<HTMLFormElement>(null)

  useEffect(() => {
    if (formState.success) {
      delete formState.success
      formRef.current?.reset()
    }
  }, [formState])

  return (<>
    <form className="space-y-6" ref={formRef} action={async (formData) => {
      formAction(formData);
      (window as unknown as {turnstile: {reset: () => void}}).turnstile.reset()
    }}>
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-2">Your Name</label>
        <input type="text" disabled={isPending} required name="name" id="name" className="w-full p-3 rounded bg-blue-50 border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-2">Your Email</label>
        <input type="email" disabled={isPending} required name="email" id="email" className="w-full p-3 rounded bg-blue-50 border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
      </div>
      <div>
        <label htmlFor="organization" className="block text-sm font-medium mb-2">Nursing Home Name</label>
        <input type="text" disabled={isPending} required name="orgnization" id="organization" className="w-full p-3 rounded bg-blue-50 border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-2">Your Message</label>
        <textarea id="message" disabled={isPending} required name="message" rows={4} className="w-full p-3 rounded bg-blue-50 border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
      </div>
      <div className="cf-turnstile" data-sitekey={process.env.NEXT_PUBLIC_CLOUDFLARE_SITE_KEY}></div>
      <motion.button type="submit" disabled={isPending}
        className="w-full bg-yellow-400 text-blue-900 px-6 py-3 rounded-full font-bold text-lg hover:bg-yellow-300 transition duration-300 shadow-md"
        whileHover={{scale: 1.05, boxShadow: "0px 0px 8px rgb(255,255,255)"}}
        whileTap={{scale: 0.95}}
      >
        {isPending ? "Sending" : "Send Message"}
      </motion.button>
      {formState.message && <p className="text-red-500 text-sm">{formState.message}</p>}
    </form>
  </>)
}
