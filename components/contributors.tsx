"use client"

import { useState } from "react"

const contributors = [
  {
    name: "Savelii Kholin",
    url: "https://savelii.co",
    role: "product, systems, research",
    bio: "Savelii's open-source AIMO hit top-7% (Kaggle bronze) in Olympiad-math solving with LLMs and documented a ~100× inference speedup on dual T4s; shipped scMagic2, a vector-DB recommender for scRNA-seq tooling; plus prototypes like Turing Hall for interactive math with Lean. He also worked in McKinsey, was early eng in YC startup, and is a graduate B.S. Physics from MIPT and M.S. from Duke.",
  },
  {
    name: "David Saykin",
    url: "https://saykind.github.io",
    role: "PRL + PRB in quantum materials",
    bio: "David led/co-authored a Phys. Rev. Lett. (2023) on high-resolution polar Kerr studies of kagome metal CsV₃Sb₅, plus Phys. Rev. B (2022) on magnetism–superconductivity interplay in UTe₂, with earlier Phys. Rev. Research (2020) on 2D membrane mechanics. David is a graduate B.S.,M.S Physics from MIPT, PhD in Physics from Stanford, and currently works at Apple. David passed TeorMinimum in 2016.",
  },
]

export function Contributors() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <div className="grid grid-cols-[1fr_420px] gap-6">
      <div className="space-y-3">
        {contributors.map((contributor, index) => (
          <div 
            key={contributor.name}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div>
              <a
                href={contributor.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg text-gray-900 underline decoration-gray-300 hover:decoration-gray-900 transition-colors block"
              >
                {contributor.name}
              </a>
              <span className="text-sm text-gray-500 block mt-1">{contributor.role}</span>
            </div>
          </div>
        ))}
      </div>
      
      <div className="relative">
        {hoveredIndex !== null && (
          <div className="absolute top-0 left-0 w-full animate-in fade-in slide-in-from-left-2 duration-300">
            <p className="text-gray-700 leading-relaxed text-sm mb-2">
              {contributors[hoveredIndex].bio}
            </p>
            <a
              href={contributors[hoveredIndex].url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-xs text-gray-500 underline decoration-gray-300 hover:decoration-gray-900 transition-colors px-2 py-1 rounded bg-gray-100 hover:bg-gray-200"
            >
              {contributors[hoveredIndex].url.replace('https://', '')}
            </a>
          </div>
        )}
      </div>
    </div>
  )
}
