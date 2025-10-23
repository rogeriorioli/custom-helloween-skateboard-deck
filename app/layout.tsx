import type React from "react"
import type { Metadata } from "next"
import { Creepster, Roboto } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const creepster = Creepster({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-creepster",
})

const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
})

export const metadata: Metadata = {
  title: "Build Your Cursed Deck 🧟 | Halloween Skate Shop",
  description: "Choose your Halloween print, customize your deck and bring terror to the streets.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${creepster.variable} ${roboto.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
