export const site = {
  url: "https://philcare.ie"
}

export const menu = [
  {
    text: "Who We Are",
    path: "/",
    sub: [
      {path: "/#services", text: "Our Services"},
      {path: "/#benefits", text: "Why Choose Us"},
      {path: "/#process", text: "How It Works"}
    ]
  },
  {
    path: "/candidates", text: "Our Candidates",
    sub: [
      {path: "/candidates/join", text: "Become A Careworker"}
    ]
  },
  {path: "/#contact", text: "Contact Us"}
] as {path: string, text: string, sub?: {path: string, text: string}[]}[]
