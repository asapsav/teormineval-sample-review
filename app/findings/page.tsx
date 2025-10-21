"use client"

import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function Findings() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-6 py-12 md:py-20">
        {/* Header */}
        <header className="mb-16 md:mb-24">
          <div className="flex flex-col items-center gap-8 mb-12">
            <div className="flex flex-col items-center gap-4">
              <img 
                src="/chatgpt-landau-hair-nobd.png" 
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

          <h1 className="text-3xl md:text-4xl font-light text-gray-900 mb-8">
            Timeline of Findings
          </h1>
        </header>

        {/* TeorMinEval-Quantum v.1 first findings */}
        <section className="mb-20">
          <h2 id="teormineval-quantum-v1-first-findings" className="text-2xl font-light text-gray-900 mb-8">
            TeorMinEval-Quantum v.1 first findings
          </h2>
          
          <div className="space-y-8">
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <img
                src="/qm_problems_eval_mean_score_by_category.png"
                alt="Mean score by category analysis"
                className="w-full"
              />
              <p className="text-sm text-gray-500 text-center py-3 bg-gray-50">
                Mean score by category analysis
              </p>
            </div>
            
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <img
                src="/qm_problems_eval_pass_rate_by_category.png"
                alt="Pass rate by category evaluation"
                className="w-full"
              />
              <p className="text-sm text-gray-500 text-center py-3 bg-gray-50">
                Pass rate by category evaluation
              </p>
            </div>
            
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <img
                src="/qm_problems_eval_score_distribution_by_category.png"
                alt="Score distribution analysis by category"
                className="w-full"
              />
              <p className="text-sm text-gray-500 text-center py-3 bg-gray-50">
                Score distribution analysis by category
              </p>
            </div>
          </div>
        </section>

        {/* Example of overfitting */}
        <section className="mb-20">
          <h2 className="text-2xl font-light text-gray-900 mb-8">
            Example of overfitting
          </h2>
          
          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p>For this practice problem in quantum mechanics:</p>
            
            <blockquote className="border-l-4 border-blue-500 bg-gray-50 p-6 rounded-r-lg italic text-gray-600">
              <p>Find the radiation of a finite system of charges with accuracy up to terms of order (1/c^5). Express it in terms of the system's electric dipole, quadrupole, and magnetic moments.</p>
            </blockquote>
            
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <img
                src="/Screenshot%202025-10-07%20at%207.02.33%E2%80%AFPM.png"
                alt="The original formulation of the problem"
                className="w-full"
              />
              <p className="text-sm text-gray-500 text-center py-3 bg-gray-50">
                The original formulation of the problem
              </p>
            </div>
            
            <p>LLM shows incorrect solution:</p>
            
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <img
                src="/Screenshot%202025-10-07%20at%207.04.05%E2%80%AFPM.png"
                alt="LLM spots incorrect solution"
                className="w-full"
              />
              <p className="text-sm text-gray-500 text-center py-3 bg-gray-50">
                LLM spots incorrect solution
              </p>
            </div>
            
            <blockquote className="border-l-4 border-blue-500 bg-gray-50 p-6 rounded-r-lg italic text-gray-600">
              <p>This makes sense, because it is known that this problem is solved incorrectly in the book where LLM has overfitted from.</p>
            </blockquote>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  )
}
