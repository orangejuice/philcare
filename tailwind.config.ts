import type {Config} from "tailwindcss"
import typography from "@tailwindcss/typography"

const config: Config = {
  content: ["./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  future: {hoverOnlyWhenSupported: true},
  plugins: [typography]
}
export default config
