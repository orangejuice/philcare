"use client"
import React, {useState} from "react"
import {useForm} from "react-hook-form"
import {motion} from "framer-motion"
import {submitCandidateApplication} from "@/lib/actions"

export function CandidateApplicationForm() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm()
  const [submitting, setSubmitting] = useState(false)
  const [message, setMessage] = useState("")

  const onSubmit = async (data: any) => {
    setSubmitting(true)
    setMessage("")
    const formData = new FormData()
    Object.entries(data).forEach(([key, value]) => formData.append(key, value as string))

    const result = await submitCandidateApplication(formData)
    setSubmitting(false)
    setMessage(result.message)
    if (result.success) {
      reset()
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium mb-2 text-gray-700">First Name</label>
          <input
            type="text"
            id="firstName"
            {...register("firstName", { required: "First name is required" })}
            className="w-full p-3 rounded-lg bg-blue-50 border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
          />
          {errors.firstName && <span className="text-red-500 text-sm mt-1">{errors.firstName.message as string}</span>}
        </div>
        <div>
          <label htmlFor="lastName" className="block text-sm font-medium mb-2 text-gray-700">Last Name</label>
          <input
            type="text"
            id="lastName"
            {...register("lastName", { required: "Last name is required" })}
            className="w-full p-3 rounded-lg bg-blue-50 border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
          />
          {errors.lastName && <span className="text-red-500 text-sm mt-1">{errors.lastName.message as string}</span>}
        </div>
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-700">Email Address</label>
        <input
          type="email"
          id="email"
          {...register("email", {
            required: "Email is required",
            pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" }
          })}
          className="w-full p-3 rounded-lg bg-blue-50 border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
        />
        {errors.email && <span className="text-red-500 text-sm mt-1">{errors.email.message as string}</span>}
      </div>
      <div>
        <label htmlFor="phoneNumber" className="block text-sm font-medium mb-2 text-gray-700">Phone Number</label>
        <input
          type="tel"
          id="phoneNumber"
          {...register("phoneNumber", { required: "Phone number is required" })}
          className="w-full p-3 rounded-lg bg-blue-50 border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
        />
        {errors.phoneNumber && <span className="text-red-500 text-sm mt-1">{errors.phoneNumber.message as string}</span>}
      </div>
      <div>
        <label htmlFor="profession" className="block text-sm font-medium mb-2 text-gray-700">Profession</label>
        <select
          id="profession"
          {...register("profession", { required: "Please select your profession" })}
          className="w-full p-3 rounded-lg bg-blue-50 border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
        >
          <option value="">Select your profession</option>
          <option value="nurse">Nurse</option>
          <option value="caregiver">Caregiver</option>
          <option value="therapist">Therapist</option>
          <option value="other">Other</option>
        </select>
        {errors.profession && <span className="text-red-500 text-sm mt-1">{errors.profession.message as string}</span>}
      </div>
      <div>
        <label htmlFor="experience" className="block text-sm font-medium mb-2 text-gray-700">Years of Experience</label>
        <input
          type="number"
          id="experience"
          {...register("experience", { required: "Years of experience is required", min: 0 })}
          className="w-full p-3 rounded-lg bg-blue-50 border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
        />
        {errors.experience && <span className="text-red-500 text-sm mt-1">{errors.experience.message as string}</span>}
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-700">Additional Information</label>
        <textarea
          id="message"
          {...register("message")}
          rows={4}
          className="w-full p-3 rounded-lg bg-blue-50 border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 resize-y"
          placeholder="Tell us about your qualifications, specializations, or any other relevant information"
        ></textarea>
      </div>
      <motion.button
        type="submit"
        disabled={submitting}
        className="w-full bg-yellow-400 text-blue-900 px-6 py-3 rounded-full font-bold text-lg hover:bg-yellow-300 transition duration-300 shadow-md disabled:opacity-50"
        whileHover={{scale: 1.05, boxShadow: "0px 0px 8px rgb(255,255,255)"}}
        whileTap={{scale: 0.95}}
      >
        {submitting ? "Submitting..." : "Submit Application"}
      </motion.button>
      {message && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className={`text-sm ${message.includes("success") ? "text-green-500" : "text-red-500"} bg-opacity-20 p-3 rounded-lg`}
        >
          {message}
        </motion.p>
      )}
    </form>
  )
}
