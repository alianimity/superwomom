import type { Metadata } from "next"
import "./globals.css"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"

export const metadata: Metadata = {
  title: "SuperwoMOM Cleaning LLC | Premium Nationwide Cleaning Services",
  description: "Professional cleaning services for commercial, industrial, and luxury clients. Eco-friendly practices, professional teams, 24/7 emergency response. Serving all 50 states.",
  keywords: "commercial cleaning, industrial cleaning, post-construction cleaning, luxury residential cleaning, nationwide cleaning services",
  icons: {
    icon: [
      { url: "/favicons/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicons/favicon.ico", sizes: "any" },
    ],
    apple: [
      { url: "/favicons/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      { rel: "android-chrome", url: "/favicons/android-chrome-192x192.png", sizes: "192x192" },
      { rel: "android-chrome", url: "/favicons/android-chrome-512x512.png", sizes: "512x512" },
    ],
  },
  openGraph: {
    title: "SuperwoMOM Cleaning LLC | Premium Nationwide Cleaning Services",
    description: "Professional cleaning services for commercial, industrial, and luxury clients. Eco-friendly practices, professional teams, 24/7 emergency response.",
    url: "https://supawomom.com",
    siteName: "SuperwoMOM Cleaning LLC",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SuperwoMOM Cleaning LLC | Premium Nationwide Cleaning Services",
    description: "Professional cleaning services for commercial, industrial, and luxury clients. Eco-friendly practices, professional teams, 24/7 emergency response.",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}