export const menu = [
  {
    text: "Home",
    path: "/",
    sub: [
      {path: "/#services", text: "Our Services"},
      {path: "/#benefits", text: "Benefits"},
      {path: "/#process", text: "Our Process"}
    ]
  },
  // {path: "/nursing-home", text: "Nursing home"},
  // {path: "/home-care", text: "Private Homecare"},
  {path: "/candidates", text: "Our Candidates"},
  {path: "/#contact", text: "Contact"}
] as {path: string, text: string, sub?: {path: string, text: string}[]}[]
