import type React from "react"
import type { Metadata } from "next"
import { Inter, Poppins, JetBrains_Mono } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
})

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains-mono",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
})

export const metadata: Metadata = {
  title: "Rahul Yadav - Full Stack Developer",
  description:
    "Portfolio of Rahul Yadav, a passionate Full Stack Developer specializing in React.js and modern web technologies. Based in Jaipur, India.",
  keywords: [
    "Rahul Yadav",
    "Full Stack Developer",
    "React Developer",
    "Web Developer",
    "JavaScript",
    "Node.js",
    "MongoDB",
    "Portfolio",
    "Jaipur",
    "India",
  ],
  authors: [{ name: "Rahul Yadav" }],
  creator: "Rahul Yadav",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://pranaykoolwal.dev",
    title: "Rahul Yadav - Full Stack Developer",
    description:
      "Portfolio of Rahul Yadav, a passionate Full Stack Developer specializing in React.js and modern web technologies.",
    siteName: "Rahul Yadav Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rahul Yadav - Full Stack Developer",
    description:
      "Portfolio of Rahul Yadav, a passionate Full Stack Developer specializing in React.js and modern web technologies.",
    creator: "@pranaykoolwal",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable} ${poppins.variable} ${jetbrainsMono.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#1f2937" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={`${inter.className} font-sans antialiased`}>{children}</body>
    </html>
  )
}
