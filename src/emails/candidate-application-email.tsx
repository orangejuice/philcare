import {Body, Container, Head, Heading, Html, Section, Text} from "@react-email/components"
import * as React from "react"


export const CandidateApplicationEmail = ({ firstName, lastName, email, phoneNumber, profession, experience, message }:
  { firstName:string, lastName:string, email:string, phoneNumber:string, profession:string, experience:string, message:string }) => (
  <Html>
    <Head />
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>New Candidate Application</Heading>
        <Text style={text}>A new candidate has submitted an application:</Text>
        <Section style={section}>
          <Text style={text}><strong>Name:</strong> {firstName} {lastName}</Text>
          <Text style={text}><strong>Email:</strong> {email}</Text>
          <Text style={text}><strong>Phone:</strong> {phoneNumber}</Text>
          <Text style={text}><strong>Profession:</strong> {profession}</Text>
          <Text style={text}><strong>Years of Experience:</strong> {experience}</Text>
          <Text style={text}><strong>Additional Information:</strong></Text>
          <Text style={text}>{message}</Text>
        </Section>
      </Container>
    </Body>
  </Html>
)

const main = {
  backgroundColor: "#f6f9fc",
  fontFamily: "-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Ubuntu,sans-serif",
  padding: "40px 0"
}

const container = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  padding: "20px",
  maxWidth: "600px",
  borderRadius: "8px",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)"
}

const h1 = {
  color: "#333",
  fontSize: "24px",
  fontWeight: "bold",
  margin: "30px 0",
  padding: "0",
  textAlign: "center" as const
}

const text = {
  color: "#333",
  fontSize: "16px",
  lineHeight: "24px",
  margin: "16px 0"
}

const section = {
  padding: "20px",
  border: "1px solid #eee",
  borderRadius: "5px",
  margin: "20px 0",
  backgroundColor: "#f9f9f9"
}
