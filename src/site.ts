export const menu = {
  "/": {text: "Home"},
  "": {
    text: "Who we are",
    sub: {
      "#services": "Our Services",
      "#benefits": "Benefits",
      "#process": "Our Process"
    }
  },
  // "nursing-home": {text: "Nursing home"},
  // "home-care": {text: "Private care"},
  "candidates": {text: "Our candidates"},
  "/#contact": {text: "Contact"}
} as {[path: string]: {text: string, sub?: {[path: string]: string}}}
