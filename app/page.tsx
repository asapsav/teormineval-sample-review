"use client"

import { useState } from "react"
import { ProblemViewer } from "@/components/problem-viewer"
import { RewardDemo } from "@/components/reward-demo"
import { Contributors } from "@/components/contributors"
import { DatasetTable } from "@/components/dataset-table"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AnimatedLogo } from "@/components/animated-logo"

export default function Home() {
  const [copied, setCopied] = useState(false)
  const [logoHovering, setLogoHovering] = useState(false)
  const [logoClicked, setLogoClicked] = useState(false)

  const handleCopyCitation = async () => {
    const citationText = `@software{Kholin2025TeorMinimumEval,
  author       = {Savelii Kholin and David Saykin},
  title        = {TeorMinimumEval: A Benchmark for Evaluating AI's Understanding of Physics},
  year         = {2025},
  version      = {0.1.0},
  doi          = {10.5281/zenodo.xxxxxxx},
  url          = {https://github.com/asapsav/TeorMininumEval},
  note         = {Available at GitHub. MIT License.}
}`;
    
    try {
      await navigator.clipboard.writeText(citationText)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy citation:', err)
    }
  }

  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-2xl mx-auto px-6 py-12 md:py-20">
        {/* Header */}
        <header className="mb-16 md:mb-24">
          <div className="flex flex-col items-center gap-8 mb-12">
            <div className="flex flex-col items-center gap-4">
              <AnimatedLogo 
                className="h-24 w-auto"
                alt="TeorMinimumEval Logo"
                onHover={setLogoHovering}
                onClick={() => {
                  setLogoClicked(true)
                  setTimeout(() => setLogoClicked(false), 800)
                }}
                externalHover={logoHovering}
                externalClick={logoClicked}
              />
              <h1 className="text-4xl md:text-5xl font-light tracking-tight text-gray-900 text-center">
                TeorMinimumEval
              </h1>
            </div>
            <Navigation 
              onLogoHover={setLogoHovering}
              onLogoClick={() => {
                setLogoClicked(true)
                setTimeout(() => setLogoClicked(false), 800)
              }}
            />
          </div>

          <p className="leading-relaxed text-gray-700 mb-6">
            The Theoretical Minimum is an exam designed by{" "}
            <a
              href="https://en.wikipedia.org/wiki/Lev_Landau"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-900 underline decoration-gray-300 hover:decoration-gray-900 transition-colors"
            >
              Lev Landau
            </a>{" "}
            to assess student&apos;s <strong><em>understanding</em></strong> of physics. L.Landau regarded it as the "minimum" necessary to begin serious work in theoretical physics, and required it for entry into his elite seminar and research school. Since its introduction in 1933, only 900{" "}
            <a
              href="https://teorminimum.ru"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-900 underline decoration-gray-300 hover:decoration-gray-900 transition-colors"
            >
              students
            </a>{" "}
            have succeeded.
          </p>

          <p className="leading-relaxed text-gray-700">
            TeorMinimum<em><strong>-Eval</strong></em> aims to approximate<a id="ref-1" href="#footnote-1" className="text-gray-900 underline decoration-gray-300 hover:decoration-gray-900 transition-colors scroll-smooth">¹</a> Landau&apos;s Theoretical Minimum as an evaluation benchmark for AI systems.
          </p>
        </header>

        {/* Pass Rate Chart */}
        <section className="mb-20">
          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <img
              src="/images/charts/qm_problems_eval_pass_rate_by_category.png"
              alt="Pass rate by category evaluation"
              className="w-full"
            />
            <p className="text-sm text-gray-500 text-center py-3 bg-gray-50">
              TeorMinEval-Quantum v.1, pass rate by category
            </p>
          </div>
        </section>

        {/* Contributors */}
        <section className="mb-20">
          <h2 className="text-2xl font-light text-gray-900 mb-8">Contributors</h2>
          <Contributors />
        </section>

        {/* What are we trying to do */}
        <section className="mb-20">
          <h2 className="text-2xl font-light text-gray-900 mb-8">What are we trying to do?</h2>
          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p>
              We argue that current physics benchmarks primarily test pattern recall rather than true understanding. TeorMinimumEval seeks to reconstruct Landau&apos;s Theoretical Minimum exam - one of the most challenging tests of genuine <em>understanding</em> - as an evaluation benchmark for AI.
            </p>
            <p>
              This evaluation stands out because: <br />
              1) We source problems that, to the best of our knowledge, were not used for mid or post training of foundational models yet.<br />
              2) We design scoring systems that assess not only answer correctness, but also critical aspects such as intuition, progress, hypothesis generation, elegance, and other process-based rewards.
            </p>
            <p>
              Our goal is to produce a dataset of identified physics hallucinations and reasoning failures, create an RL environment for training on high-quality tactics and problems, and, in the long term, develop better AI assistants for teaching and research.
            </p>
          </div>
        </section>

        {/* Latest News */}
        <section className="mb-20">
          <h2 className="text-2xl font-light text-gray-900 mb-8">Latest News</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex gap-3">
              <span className="text-gray-400 font-mono text-sm">Oct 6</span>
              <span>First release with 322 quantum mechanics problems</span>
            </li>
            <li className="flex gap-3">
              <span className="text-gray-400 font-mono text-sm">Oct 7</span>
              <span>Added 31 problems in math, mechanics, and field theory</span>
            </li>
            <li className="flex gap-3">
              <span className="text-gray-400 font-mono text-sm">Oct 16</span>
              <span>Added 690 problems and 690 solutions in quantum mechanics</span>
            </li>
            <li className="flex gap-3">
              <span className="text-gray-400 font-mono text-sm">Oct 18</span>
              <span>
                <a
                  href="/findings#teormineval-quantum-v1-first-findings"
                  className="underline decoration-gray-300 hover:decoration-gray-900 transition-colors"
                >
                  TeorMinEval-Quantum v1 published
                </a>
              </span>
            </li>
          </ul>
        </section>

        {/* Dataset */}
        <section className="mb-20">
          <h2 className="text-2xl font-light text-gray-900 mb-8">Dataset</h2>
          <ProblemViewer />
          <div className="mt-12">
            <DatasetTable />
          </div>
        </section>

        {/* Reward Structure */}
        <section className="mb-20">
          <h2 className="text-2xl font-light text-gray-900 mb-8">Reward Structure Example</h2>
          <RewardDemo />
        </section>

        {/* Human Baseline */}
        <section className="mb-20">
          <h2 className="text-2xl font-light text-gray-900 mb-8">Human baseline</h2>
          <p className="text-gray-700 leading-relaxed mb-8">
          To pass the exam, the student must solve 3 problems. Assuming that before the exam, due to gossip and so on, the student expects a pool of about 100 problems, and that the problems are chosen uniformly at random without replacement, the number of problems they should know depends on their target confidence of passing:
          </p>
          <div className="border border-gray-200 rounded-lg overflow-hidden mb-8">
            <img src="/images/charts/prob_to_pass_chart.png" alt="Probability to pass chart" className="w-full" />
          </div>
          <p className="text-gray-700 leading-relaxed">
          We ran a poll and found that the average student will show up for the exam only if they are 80% confident of passing. The corresponding value is ( k = 93 ). Thus, our baseline is 93% accuracy.
          </p>
        </section>

        {/* Other Notes */}
        <section className="mb-20">
          <h2 className="text-2xl font-light text-gray-900 mb-8">Other notes</h2>

          <h3 className="text-xl font-light text-gray-900 mb-4">Inference costs</h3>
              
          <p className="text-gray-700 leading-relaxed mb-8">
          One sweep on 1000 quantum mechanics problems is ~60$ in gpt-5 compute. We&apos;ll start working on a lighter version of the eval once we finish making this one as comprehensive and hard as possilbe, and we&apos;ll publish it once there will be evidence that it will be just as challanging as the full one.
          </p>
          <p className="text-gray-700 leading-relaxed mb-8">
            If you are an inference provider and are able to sponsor compute consider sending a note to: <a href="mailto:savelii.kho@gmail.com" className="text-gray-900 underline decoration-gray-300 hover:decoration-gray-900 transition-colors">savelii.kho@gmail.com</a>
          </p>

          <h3 className="text-xl font-light text-gray-900 mb-4">Motivation</h3>
          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p>
          This eval is part of a larger project to improve AI’s ability to learn principles of problem solving and scientific research that *actually generalize*. We believe current AI models don’t yet exhibit that ability, and we want to understand how to train them so they do. One way that ability shows up is in how a student solves problems — which motivated our work on better evals and more convenient annotation infra.
</p>
<p>
This eval differs from existing ones in several ways. First, it includes a private collection of hard and beautiful problems that almost never appear in other benchmarks. Second, and maybe the most important, it scores AI systems not only on the correctness of the final answer (often a formula) but on many other metrics of progress. This is motivated by real academic evidence: a good problem can teach a student a lot once they spend enough time with it. Any well-educated scientist knows it’s not only useful to get the right answer, but also to see how one problem connects to another, what methods it demonstrates, where it comes from, what tactics work, which parts of the solution are creative and which are mechanical. On real exams, students can usually take their time with mechanical work (like integrating or simplifying), where typos are easy, but are rewarded much more for good intuition, elegant reasoning, and insight.
</p>
<p>
A modified version of this eval naturally becomes an RL environment.
</p>
<p>
After we finish **TeorMinimumEval**, we’ll start working on an eval tuned for practical experimental physics — starting with solid-state physics, materials design, and superconductivity.
</p>
          </div>

          {/* Footnotes */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="space-y-6 text-sm text-gray-600">
              <div id="footnote-1" className="group relative">
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center text-xs font-medium text-gray-700 group-hover:bg-gray-200 transition-colors">
                    ¹
                  </span>
                  <div className="flex-1">
                    <p className="leading-relaxed">
                    Real exams are more than just writing down solutions and getting a score. They’re a collaboration between the student and the examiner that often drifts away from the original problems into follow-up questions, new tasks, sometimes even the whole curriculum — and can last for hours. Figuring out how to approximate this kind of human-human interaction using chain-of-thought solvers, self-critique, LLM-as-judge setups, verifiable rewards, or other mechanisms is an open area of study and experimentation.
</p>
                    <a 
                      href="#ref-1" 
                      className="inline-flex items-center gap-1 mt-2 text-xs text-gray-500 hover:text-gray-700 transition-colors scroll-smooth"
                      aria-label="Back to footnote reference"
                    >
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                      </svg>
                      Back to text
                    </a>
                  </div>
                </div>
              </div>
              
              <div id="footnote-2" className="group relative">
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center text-xs font-medium text-gray-700 group-hover:bg-gray-200 transition-colors">
                    ²
                  </span>
                  <div className="flex-1">
                    <p className="leading-relaxed">
                    Of course, a lot of engineering and research has already gone into training models that generalize well — with some empirical evidence (like double descent) and theoretical grounding (compression, symmetries) supporting it. What we’re talking about is how to keep improving on top of that, possibly by leveraging new empirical findings such as scaling laws in test-time compute and RL compute, together with better datasets and new environments.
</p>
                    <a 
                      href="#ref-2" 
                      className="inline-flex items-center gap-1 mt-2 text-xs text-gray-500 hover:text-gray-700 transition-colors scroll-smooth"
                      aria-label="Back to footnote reference"
                    >
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                      </svg>
                      Back to text
                    </a>
                  </div>
                </div>
              </div>
              
              <div id="footnote-3" className="group relative">
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center text-xs font-medium text-gray-700 group-hover:bg-gray-200 transition-colors">
                    ³
                  </span>
                  <div className="flex-1">
                    <p className="leading-relaxed">
                    Exactly how much this dataset is “polluted” or overlaps with other benchmarks hasn’t been carefully analyzed yet, but it’s important to understand — and that work is in progress.
</p>
                    <a 
                      href="#ref-3" 
                      className="inline-flex items-center gap-1 mt-2 text-xs text-gray-500 hover:text-gray-700 transition-colors scroll-smooth"
                      aria-label="Back to footnote reference"
                    >
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                      </svg>
                      Back to text
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Citation */}
        <section className="mb-20">
          <h2 className="text-2xl font-light text-gray-900 mb-6">Citation</h2>
          <div className="relative">
            <pre className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-sm text-gray-700 overflow-x-auto font-mono">
              {`@software{Kholin2025TeorMinimumEval,
  author       = {Savelii Kholin and David Saykin},
  title        = {TeorMinimumEval: A Benchmark for Evaluating AI's Understanding of Physics},
  year         = {2025},
  version      = {0.1.0},
  doi          = {10.5281/zenodo.xxxxxxx},
  url          = {https://github.com/asapsav/TeorMininumEval},
  note         = {Available at GitHub. MIT License.}
}`}
            </pre>
            <button
              onClick={handleCopyCitation}
              className={`absolute top-3 right-3 p-2 border rounded-md transition-all duration-200 shadow-sm ${
                copied 
                  ? 'bg-green-50 border-green-200 text-green-600' 
                  : 'bg-white border-gray-200 text-gray-600 hover:bg-gray-50'
              }`}
              title={copied ? "Copied!" : "Copy citation"}
            >
              {copied ? (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              ) : (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              )}
            </button>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  )
}
