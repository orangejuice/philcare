"use server"
import Mailgun from "mailgun.js"
import sanitizeHtml from "sanitize-html"

type OnContactMessageState = {
  message?: string,
  success?: boolean
}

export async function onConcatMessage(currentState: OnContactMessageState, formData: FormData): Promise<OnContactMessageState> {
  const name = sanitizeHtml((formData.get("name") as string))
  const email = sanitizeHtml((formData.get("email") as string))
  const organization = sanitizeHtml((formData.get("organization") as string))
  const message = sanitizeHtml((formData.get("message") as string))

  const result = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
    body: Object.entries({
      secret: process.env.CLOUDFLARE_SECRET_KEY,
      response: formData.get("cf-turnstile-response")
    }).reduce((formData, [k, v]) => {
      formData.append(k, v!)
      return formData
    }, new FormData()),
    method: "POST"
  })

  const outcome = await result.json()
  if (!outcome.success) {
    return {message: "Captcha verification failed", success: false}
  }

  const mailgun = new Mailgun(FormData)
  const mg = mailgun.client({username: "api", key: process.env.MAILGUN_API_KEY!})
  const data = {
    from: "Contact Form <postmaster@sandbox21c4eb4668ad46f894192682829be3fc.mailgun.org>",
    to: process.env.MAIL_RECIPENTS!.split(","),
    subject: "New Customer Contact Submission",
    text: `
Name: ${name}

Email: ${email}

Organization: ${organization}

Message: ${message}
`
  }
  return await mg.messages.create("sandbox21c4eb4668ad46f894192682829be3fc.mailgun.org", data)
    .then(result => {
      console.log(result)
      return {message: "Message submitted successfully!", success: true}
    }).catch(error => {
      console.log(error)
      return {message: "Sending message failed.", success: false}
    })
}
