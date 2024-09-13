"use server"

import {Resend} from "resend"
import {NursingHomeInquiryEmail} from "@/emails/nursing-home-inquiry"
import {LiveInCareInquiryEmail} from "@/emails/live-in-care-inquiry"
import {ContactFormEmail} from "@/emails/contact-form-email"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function submitNursingHomeInquiry(formData: FormData) {
  const facilityName = formData.get('facilityName') as string
  const contactName = formData.get('contactName') as string
  const email = formData.get('email') as string
  const staffingNeeds = formData.get('staffingNeeds') as string

  try {
    await resend.emails.send({
      from: 'PhilCare Ireland <noreply@philcare.ie>',
      to: process.env.MAIL_RECIPENTS!.split(","),
      subject: 'New Nursing Home Inquiry',
      react: NursingHomeInquiryEmail({ facilityName, contactName, email, staffingNeeds })
    })
    return { success: true, message: "Inquiry submitted successfully!" }
  } catch (error) {
    console.error('Error sending nursing home inquiry email:', error)
    return { success: false, message: "Failed to submit inquiry. Please try again." }
  }
}

export async function submitLiveInCareInquiry(formData: FormData) {
  const name = formData.get('name') as string
  const email = formData.get('email') as string
  const phoneNumber = formData.get('phoneNumber') as string
  const careNeeds = formData.get('careNeeds') as string

  try {
    await resend.emails.send({
      from: 'PhilCare Ireland <noreply@philcare.ie>',
      to: process.env.MAIL_RECIPENTS!.split(","),
      subject: 'New Live-in Care Inquiry',
      react: LiveInCareInquiryEmail({ name, email, phoneNumber, careNeeds })
    })
    return { success: true, message: "Inquiry submitted successfully!" }
  } catch (error) {
    console.error('Error sending live-in care inquiry email:', error)
    return { success: false, message: "Failed to submit inquiry. Please try again." }
  }
}

export async function submitContactForm(formData: FormData) {
  const name = formData.get('name') as string
  const email = formData.get('email') as string
  const message = formData.get('message') as string

  try {
    await resend.emails.send({
      from: 'PhilCare Ireland <noreply@philcare.ie>',
      to: process.env.MAIL_RECIPENTS!.split(","),
      subject: 'New Contact Form Submission',
      react: ContactFormEmail({ name, email, message })
    })
    return { success: true, message: "Your message has been sent successfully!" }
  } catch (error) {
    console.error('Error sending contact form email:', error)
    return { success: false, message: "Failed to send your message. Please try again." }
  }
}
