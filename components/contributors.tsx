"use client"

import { useState } from "react"

const contributors = [
  {
    name: "Savelii Kholin",
    url: "https://savelii.co",
    role: "product, systems, research",
    bio: "Savelii's open-source AIMO hit top-7% (Kaggle bronze) in Olympiad-math solving and documented a ~100× inference speedup on dual T4s; shipped scMagic2, a vector-DB recommender for scRNA-seq tooling; plus prototypes like Turing Hall for interactive math with Lean. He also worked in McKinsey, was early eng in YC startup, and is a graduate B.S. Physics from MIPT and M.S. from Duke.",
  },
  {
    name: "David Saykin",
    url: "https://saykind.github.io",
    role: "PRL + PRB in quantum materials",
    bio: "David led/co-authored a Phys. Rev. Lett. (2023) on high-resolution polar Kerr studies of kagome metal CsV₃Sb₅, plus Phys. Rev. B (2022) on magnetism–superconductivity interplay in UTe₂, with earlier Phys. Rev. Research (2020) on 2D membrane mechanics. David is a graduate B.S.,M.S Physics from MIPT, PhD in Physics from Stanford, and currently works at Apple. David passed TeorMinimum in 2016.",
  },
]

export function Contributors() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  return (
    <div className="space-y-3">
      {contributors.map((contributor, index) => (
        <div key={contributor.name}>
          <button
            onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
            className="text-left w-full group"
          >
            <div className="flex items-baseline gap-3 mb-1">
              <a
                href={contributor.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg text-gray-900 underline decoration-gray-300 hover:decoration-gray-900 transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                {contributor.name}
              </a>
              <span className="text-sm text-gray-500">{contributor.role}</span>
            </div>
          </button>

          {expandedIndex === index && (
            <div className="mt-4 text-gray-700 leading-relaxed text-sm animate-in fade-in slide-in-from-top-2 duration-300">
              <p>{contributor.bio}</p>
              <a
                href={contributor.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 text-xs text-gray-500 underline decoration-gray-300 hover:decoration-gray-900 transition-colors px-2 py-1 rounded bg-gray-100 hover:bg-gray-200"
              >
                {contributor.url.replace('https://', '')}
              </a>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
