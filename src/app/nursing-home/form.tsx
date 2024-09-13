"use client"
import React, {useState} from "react"
import {useForm} from "react-hook-form"
import {motion} from "framer-motion"
import {submitNursingHomeInquiry} from "@/lib/actions"

export function NursingHomeForm() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm()
  const [submitting, setSubmitting] = useState(false)
  const [message, setMessage] = useState("")

  const onSubmit = async (data: any) => {
    setSubmitting(true)
    setMessage("")
    const formData = new FormData()
    Object.entries(data).forEach(([key, value]) => formData.append(key, value as string))

    const result = await submitNursingHomeInquiry(formData)
    setSubmitting(false)
    setMessage(result.message)
    if (result.success) {
      reset()
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <label htmlFor="facilityName" className="block text-sm font-medium mb-2">Facility Name</label>
        <input
          type="text"
          id="facilityName"
          {...register("facilityName", { required: "Facility name is required" })}
          className="w-full p-3 rounded bg-blue-50 border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors.facilityName && <span className="text-red-500 text-sm">{errors.facilityName.message as string}</span>}
      </div>
      <div>
        <label htmlFor="contactName" className="block text-sm font-medium mb-2">Contact Name</label>
        <input
          type="text"
          id="contactName"
          {...register("contactName", { required: "Contact name is required" })}
          className="w-full p-3 rounded bg-blue-50 border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors.contactName && <span className="text-red-500 text-sm">{errors.contactName.message as string}</span>}
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
        <input
          type="email"
          id="email"
          {...register("email", {
            required: "Email is required",
            pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" }
          })}
          className="w-full p-3 rounded bg-blue-50 border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors.email && <span className="text-red-500 text-sm">{errors.email.message as string}</span>}
      </div>
      <div>
        <label htmlFor="staffingNeeds" className="block text-sm font-medium mb-2">Staffing Needs</label>
        <textarea
          id="staffingNeeds"
          {...register("staffingNeeds", { required: "Please describe your staffing needs" })}
          rows={4}
          className="w-full p-3 rounded bg-blue-50 border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></textarea>
        {errors.staffingNeeds && <span className="text-red-500 text-sm">{errors.staffingNeeds.message as string}</span>}
      </div>
      <motion.button
        type="submit"
        disabled={submitting}
        className="w-full bg-yellow-400 text-blue-900 px-6 py-3 rounded-full font-bold text-lg hover:bg-yellow-300 transition duration-300 shadow-md disabled:opacity-50"
        whileHover={{scale: 1.05, boxShadow: "0px 0px 8px rgb(255,255,255)"}}
        whileTap={{scale: 0.95}}
      >
        {submitting ? "Submitting..." : "Submit Inquiry"}
      </motion.button>
      {message && <p className={`text-sm ${message.includes("success") ? "text-green-500" : "text-red-500"}`}>{message}</p>}
    </form>
  )
}
