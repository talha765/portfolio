import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Alex Johnson - Full Stack Developer & UI/UX Designer",
  description:
    "Creative developer specializing in modern web applications, user experience design, and innovative digital solutions.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
