"use client"
import React, {useState} from "react"
import {useForm} from "react-hook-form"
import {motion} from "framer-motion"
import {submitContactForm} from "@/lib/actions"

export function ContactForm() {
  const {register, handleSubmit, formState: {errors}, reset} = useForm()
  const [submitting, setSubmitting] = useState(false)
  const [message, setMessage] = useState("")

  const onSubmit = async (data: any) => {
    setSubmitting(true)
    setMessage("")
    const formData = new FormData()
    Object.entries(data).forEach(([key, value]) => formData.append(key, value as string))

    const result = await submitContactForm(formData)
    setSubmitting(false)
    setMessage(result.message)
    if (result.success) {
      reset()
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-2">Your Name</label>
        <input
          type="text"
          id="name"
          {...register("name", {required: "Your name is required"})}
          className="w-full p-3 rounded bg-blue-50 border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors.name && <span className="text-red-500 text-sm">{errors.name.message as string}</span>}
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-2">Your Email</label>
        <input
          type="email"
          id="email"
          {...register("email", {
            required: "Email is required",
            pattern: {value: /^\S+@\S+$/i, message: "Invalid email address"}
          })}
          className="w-full p-3 rounded bg-blue-50 border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors.email && <span className="text-red-500 text-sm">{errors.email.message as string}</span>}
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-2">Your Message</label>
        <textarea
          id="message"
          {...register("message", {required: "Please enter your message"})}
          rows={4}
          className="w-full p-3 rounded bg-blue-50 border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></textarea>
        {errors.message && <span className="text-red-500 text-sm">{errors.message.message as string}</span>}
      </div>
      <motion.button
        type="submit"
        disabled={submitting}
        className="w-full bg-yellow-400 text-blue-900 px-6 py-3 rounded-full font-bold text-lg hover:bg-yellow-300 transition duration-300 shadow-md disabled:opacity-50"
        whileHover={{scale: 1.05, boxShadow: "0px 0px 8px rgb(255,255,255)"}}
        whileTap={{scale: 0.95}}
      >
        {submitting ? "Sending..." : "Send Message"}
      </motion.button>
      {message &&
        <p className={`text-sm ${message.includes("success") ? "text-green-500" : "text-red-500"}`}>{message}</p>}
    </form>
  )
}
