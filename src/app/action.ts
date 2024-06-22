"use server"
import Mailgun from "mailgun.js"

type OnContactMessageState = {
  message?: string,
  success?: boolean
}

export async function onConcatMessage(currentState: OnContactMessageState, rawFormData: FormData): Promise<OnContactMessageState> {
  const formData = Object.fromEntries(rawFormData)
  const result = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
    body: Object.entries({
      secret: process.env.CLOUDFLARE_SECRET_KEY,
      response: formData["cf-turnstile-response"]
    }).reduce((formData, [k, v]) => {
      formData.append(k, v!)
      return formData
    }, new FormData()),
    method: "POST"
  })

  const outcome = await result.json()
  if (!outcome.success) {
    return {message: "Invalid Captcha", success: false}
  }


  const mailgun = new Mailgun(FormData)
  const mg = mailgun.client({username: "api", key: process.env.MAILGUN_API_KEY!})
  const data = {
    from: "Contact Form <postmaster@sandbox21c4eb4668ad46f894192682829be3fc.mailgun.org>",
    to: process.env.MAIL_RECIPENTS!.split(","),
    subject: "New Customer Contact Submission",
    text: `
Name: ${formData.name}
Email: ${formData.email}
Organization: ${formData.organization}
Message: ${formData.message}
`
  }
  return await mg.messages.create("sandbox21c4eb4668ad46f894192682829be3fc.mailgun.org", data)
    .then(result => {
      console.log(result)
      return {message: "Message submit successfully!", success: true}
    }).catch(error => {
      console.log(error)
      return {message: "Message submit failed", success: false}
    })

  // mutate data
  // revalidate cache
}
