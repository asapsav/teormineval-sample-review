"use client"

import { useState, useRef, useEffect } from "react"

const messages = [
  {
    sender: "user",
    content:
      "Compute the probability P for a quantum two-level system to be in the excited state at t → +∞, if for t → -∞ it was in the ground state.",
    reward: 0,
  },
  {
    sender: "assistant",
    content:
      "I need to solve this quantum mechanics problem step by step. Let me start by analyzing the Hamiltonian structure...",
    reward: 2,
  },
  {
    sender: "assistant",
    content:
      "The transition probability is simply P = 1/2, since the system has equal probability to be in either state.",
    reward: -9,
  },
  {
    sender: "assistant",
    content:
      "Wait, let me check this by taking the limit and comparing my answer with the standard Landau-Zener probability.",
    reward: 10,
  },
  {
    sender: "assistant",
    content:
      "The verification shows my previous answer was wrong. Using the adiabatic theorem and the Landau-Zener formula, the correct transition probability is: P = exp(-π|Δ|²/Ωω₀)",
    reward: 10,
  },
]

export function RewardDemo() {
  const [visibleMessages, setVisibleMessages] = useState<number[]>([0])
  const [totalReward, setTotalReward] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const chatContainerRef = useRef<HTMLDivElement>(null)

  // Auto-scroll to bottom when new messages appear
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight
    }
  }, [visibleMessages])

  const triggerAssistantResponses = () => {
    if (isPlaying) return
    setIsPlaying(true)

    // Show assistant messages one by one
    messages.slice(1).forEach((message, index) => {
      setTimeout(
        () => {
          setVisibleMessages((prev) => [...prev, index + 1])
          if (message.reward !== 0) {
            setTotalReward((prev) => prev + message.reward)
          }
        },
        (index + 1) * 2000,
      )
    })
  }

  return (
    <div className="space-y-6">
      <div className="border border-gray-200 rounded-lg overflow-hidden">
        <div ref={chatContainerRef} className="p-6 space-y-4 max-h-96 overflow-y-auto">
          {visibleMessages.map((index) => {
            const message = messages[index]
            
            if (message.sender === "user") {
              return (
                <div key={index} className="flex justify-end">
                  <div className="flex items-end gap-2 max-w-[80%]">
                    <div className="bg-gray-900 text-white rounded-lg px-4 py-3">
                      <p className="text-sm leading-relaxed">{message.content}</p>
                    </div>
                    {!isPlaying && (
                      <button
                        onClick={triggerAssistantResponses}
                        className="flex items-center justify-center w-10 h-10 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all duration-200 flex-shrink-0 shadow-lg hover:shadow-xl animate-pulse"
                        title="Click to start the conversation"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                          />
                        </svg>
                      </button>
                    )}
                  </div>
                </div>
              )
            }
            
            return (
              <div key={index} className="flex justify-start">
                <div className="max-w-[80%] bg-gray-100 text-gray-900 rounded-lg px-4 py-3">
                  <p className="text-sm leading-relaxed">{message.content}</p>
                  {message.reward !== 0 && (
                    <span
                      className={`inline-block mt-2 text-xs px-2 py-1 rounded ${
                        message.reward > 0 ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                      }`}
                    >
                      {message.reward > 0 ? "+" : ""}
                      {message.reward} reward
                    </span>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <div className="flex items-center justify-between border border-gray-200 rounded-lg px-6 py-4">
        <span className="text-sm text-gray-600">Total Reward</span>
        <span className="text-2xl font-light text-gray-900">{totalReward}</span>
      </div>
    </div>
  )
}
