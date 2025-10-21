"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const problems = [
  {
    category: "Quantum Mechanics",
    question:
      "An oscillator of mass $m$ and frequency $\\omega$ is in a ground state. Suddenly the frequency changes to $\\omega'$. Find the probability of transition to an excited state.",
    id: "TM-QM-L-3",
  },
  {
    category: "Quantum Mechanics",
    question:
      "Find: 1) Born scattering amplitude for a slow particle on a potential which decays as $\\lambda/r^3$ at infinity. 2) Scattering cross-section.",
    id: "TM-QM-L-6",
  },
  {
    category: "Quantum Mechanics",
    question:
      "Find the probability for a particle with the kinetic energy $E = \\gamma p^{2}$ to escape from a potential well. Assume $E \\ll \\frac{\\alpha}{r_0}$.",
    id: "TM-QM-L-9",
  },
  {
    category: "Quantum Mechanics",
    question:
      "Find the ground state energy of positronium which is placed in between two parallel hard walls. The distance between the walls is $a \\ll \\frac{\\hbar}{me^{2}}$.",
    id: "TM-QM-L-12",
  },
  {
    category: "Quantum Mechanics",
    question:
      "Two non-interacting neutrons are in a potential $U = \\frac{1}{2}m\\omega^2r^2$ in magnetic field $H$. What should be $H$ for given $\\omega$ in order for the ground state to have spin 0?",
    id: "TM-QM-L-15",
  },
]

export function ProblemViewer() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const problemsPerView = 2

  const canGoPrev = currentIndex > 0
  const canGoNext = currentIndex < problems.length - problemsPerView

  const handlePrev = () => {
    if (canGoPrev) setCurrentIndex(currentIndex - 1)
  }

  const handleNext = () => {
    if (canGoNext) setCurrentIndex(currentIndex + 1)
  }

  const visibleProblems = problems.slice(currentIndex, currentIndex + problemsPerView)

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <span className="text-sm text-gray-500">
          Examples {currentIndex + 1}-{Math.min(currentIndex + problemsPerView, problems.length)}/{problems.length}
        </span>
        <div className="flex gap-2">
          <button
            onClick={handlePrev}
            disabled={!canGoPrev}
            className="p-2 rounded-full border border-gray-200 hover:bg-gray-50 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={handleNext}
            disabled={!canGoNext}
            className="p-2 rounded-full border border-gray-200 hover:bg-gray-50 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {visibleProblems.map((problem) => (
          <div
            key={problem.id}
            className="border border-gray-200 rounded-lg overflow-hidden hover:border-gray-300 transition-colors"
          >
            <div className="bg-gray-50 px-4 py-2 border-b border-gray-200">
              <span className="text-xs font-medium text-gray-600">{problem.category}</span>
            </div>
            <div className="p-4">
              <p className="text-sm text-gray-700 leading-relaxed mb-3">{problem.question}</p>
              <span className="text-xs text-gray-400">{problem.id}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
