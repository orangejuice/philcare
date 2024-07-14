"use client"
import {useFormState, useFormStatus} from "react-dom"
import {onConcatMessage} from "@/lib/actions"
import React, {useEffect, useRef, useState} from "react"
import {motion} from "framer-motion"
import {cn} from "@/lib/utils"

export function ContactForm() {
  const {pending: isPending} = useFormStatus()
  const [formState, formAction] = useFormState(onConcatMessage, {message: ""})
  const formRef = useRef<HTMLFormElement>(null)
  const [isTyping, setIsTyping] = useState(false)

  useEffect(() => {if (formState.success) formRef.current?.reset()}, [formState])
  useEffect(() => {
    if (isTyping && window.turnstile) {
      window.turnstile.render("#turnstile-container", {
        sitekey: process.env.NEXT_PUBLIC_CLOUDFLARE_SITE_KEY
      })
    }
  }, [isTyping])

  return (<>
    <form className="space-y-6" ref={formRef} action={(formData) => {
      formAction(formData)
      window.turnstile.reset()
    }} onChange={() => {if (!isTyping) {setIsTyping(true)}}}>
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-2">Your Name</label>
        <input type="text" disabled={isPending} required name="name" id="name" className="w-full p-3 rounded bg-blue-50 border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-2">Your Email</label>
        <input type="email" disabled={isPending} required name="email" id="email" className="w-full p-3 rounded bg-blue-50 border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-2">Your Experience</label>
        <textarea id="message" disabled={isPending} required name="message" rows={4} className="w-full p-3 rounded bg-blue-50 border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
      </div>
      {isTyping && <div id="turnstile-container"></div>}
      <motion.button type="submit" disabled={isPending}
        className={cn("w-full bg-yellow-400 text-blue-900 px-6 py-3 rounded-full font-bold text-lg hover:bg-yellow-300 transition duration-300 shadow-md", isPending && "opacity-50")}
        whileHover={{scale: 1.05, boxShadow: "0px 0px 8px rgb(255,255,255)"}}
        whileTap={{scale: 0.95}}>
        {isPending ? "Sending" : "Submit"}
      </motion.button>
      {formState.message && <p className="text-red-500 text-sm">{formState.message}</p>}
    </form>
  </>)
}
