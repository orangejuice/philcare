import {Body, Container, Head, Heading, Html, Section, Text} from "@react-email/components"
import * as React from "react"

export const NursingHomeInquiryEmail = ({facilityName, contactName, email, staffingNeeds}: {facilityName: string, contactName: string, email: string, staffingNeeds: string}) => (
  <Html>
    <Head/>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>New Nursing Home Inquiry</Heading>
        <Text style={text}>A new inquiry has been submitted for nursing home staffing:</Text>
        <Section style={section}>
          <Text style={text}><strong>Facility Name:</strong> {facilityName}</Text>
          <Text style={text}><strong>Contact Name:</strong> {contactName}</Text>
          <Text style={text}><strong>Email:</strong> {email}</Text>
          <Text style={text}><strong>Staffing Needs:</strong></Text>
          <Text style={text}>{staffingNeeds}</Text>
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
