"use client"

import { useEffect } from "react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function Logs() {
  useEffect(() => {
    // Immediate redirect to external logs viewer
    window.location.href = "https://logs.teorminimumeval.com"
  }, [])

  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-6 py-12 md:py-20">
        {/* Header */}
        <header className="mb-16 md:mb-24">
          <div className="flex flex-col items-center gap-8 mb-12">
            <div className="flex flex-col items-center gap-4">
              <img 
                src="/logo.png" 
                alt="TeorMinimumEval Logo" 
                className="h-16 w-auto"
              />
              <h1 className="text-4xl md:text-5xl font-light tracking-tight text-gray-900 text-center">
                TeorMinimumEval
              </h1>
            </div>
            <Navigation />
          </div>

          <div className="mb-8">
            <Link 
              href="/" 
              className="inline-flex items-center gap-2 bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
            >
              ← Back to Main
            </Link>
          </div>
        </header>

        {/* Redirect Message */}
        <div className="text-center">
          <h1 className="text-2xl font-light text-gray-900 mb-4">
            Redirecting to Logs Viewer...
          </h1>
          <p className="text-gray-600 mb-6">
            You are being redirected to the external logs viewer.
          </p>
          <p className="text-gray-600">
            If you are not redirected automatically,{" "}
            <a 
              href="https://logs.teorminimumeval.com"
              className="text-blue-600 hover:text-blue-800 underline"
            >
              click here
            </a>
            .
          </p>
        </div>

        <Footer />
      </div>
    </main>
  )
}
