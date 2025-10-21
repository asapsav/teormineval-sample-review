"use client"

import { useState } from "react"
import { ProblemViewer } from "@/components/problem-viewer"
import { RewardDemo } from "@/components/reward-demo"
import { Contributors } from "@/components/contributors"
import { DatasetTable } from "@/components/dataset-table"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function Home() {
  const [copied, setCopied] = useState(false)

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
            To pass the exam a student has to solve 3 problems. Assuming before an exam, due to gossip and etc., a student expects a pool of roughly 100 problems and problems are selected uniformly randomly by a teacher (without replacement), and if a student solved a problem at home they can solve it on exam, a numer of problems a student needs to be able to solve depends on target "confidence" to pass an exam "tomorrow" like this:
          </p>
          <div className="border border-gray-200 rounded-lg overflow-hidden mb-8">
            <img src="/images/charts/prob_to_pass_chart.png" alt="Probability to pass chart" className="w-full" />
          </div>
          <p className="text-gray-700 leading-relaxed">
            We run a poll and avg student will show up on exam if they are 80% confident they&apos;ll pass today, the k for this is 93. Thus, our baseline, is 93% accuracy.
          </p>
        </section>

        {/* Other Notes */}
        <section className="mb-20">
          <h2 className="text-2xl font-light text-gray-900 mb-8">Other notes</h2>

          <h3 className="text-xl font-light text-gray-900 mb-4">Inference costs</h3>
          <ul className="space-y-2 text-gray-700 mb-8">
            <li>
              One sweep on 300 quantum mechanics problems is ~36$ in gpt-5 compute.
            </li>
            <li>
              One sweep on 31 non qm problems was ~1.5M tokens, of which 900K reasoning tokens, was ~17$ with gemini-2.5-pro.
            </li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-8">
            We&apos;ll start working on a lighter version of the eval once we finish making this one as comprehensive and hard as possilbe, and we&apos;ll publish it once there will be evidence that it will be just as challanging as the full one.
          </p>
          <p className="text-gray-700 leading-relaxed mb-8">
            If you are an inference provider and are able to sponsor compute consider sending a note to: <a href="mailto:savelii.kho@gmail.com" className="text-gray-900 underline decoration-gray-300 hover:decoration-gray-900 transition-colors">savelii.kho@gmail.com</a>
          </p>

          <h3 className="text-xl font-light text-gray-900 mb-4">Motivation</h3>
          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p>
              This eval is part of a larger project to improve AI&apos;s ability to learn principles of solving problems and conducting scientific research that generalise the most. We believe that current AI models dont exhibit that ability yet and we want to learn how to train models in way that they do <a id="ref-2" href="#footnote-2" className="text-gray-900 underline decoration-gray-300 hover:decoration-gray-900 transition-colors scroll-smooth">²</a>. One of the ways that ability is seen is through observing how a student solves problems, which motivated work in better evals and more convenient annotation infra.
            </p>
            <p>
              There are several ways this eval is different from all existing evals. One, it includes a private collection of hard and beautiful problems that almost do not appear in any other benchmarks <a id="ref-3" href="#footnote-3" className="text-gray-900 underline decoration-gray-300 hover:decoration-gray-900 transition-colors scroll-smooth">³</a>. Two, and perhaps most important one, is it scores AI system not only on the correctness of the final answer (often is a formula), but all sorts of other metrics of progress. This is heavily motivated by real academic evidence that a good problem can teach a student a lot once student spends enough time with it. Any well educated scientist knows that it is not only useful to arrive to the correct solution, but also learn how one problem connects to another, how it demonstrates sertain methods, where does the problem come from, what tactics are usefull for the problem, that parts of the solution are creative and what parts and mechanical. On the real exam, a student if often allowed to take their time with very mechanical work of, say, taking integrals, where it is easy to make a typo, and is rewarded disproportionatelly more for good intuitions, beautiful solutions, and etc.
            </p>
            <p>
              A modified version of this eval naturally becomes an RL environment.
            </p>
            <p>
              After we are done with TeorMinimumEval, we&apos;ll start working on a eval tuned for practical real-world experimental physics, starting with solid state physics, materials design, and superconductivity.
            </p>
          </div>

          {/* Footnotes */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-lg font-medium text-gray-900 mb-6">Footnotes</h3>
            <div className="space-y-6 text-sm text-gray-600">
              <div id="footnote-1" className="group relative">
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center text-xs font-medium text-gray-700 group-hover:bg-gray-200 transition-colors">
                    ¹
                  </span>
                  <div className="flex-1">
                    <p className="leading-relaxed">
                      real exams is more than just writing down solution for problems and getting a score. It is collaboration between student and examinator that often can streer away from original tasks into a series a follow-up questions, new problems, perhaps all the ciruculum, and can last many hours. Exactly the correct way to approximate such human-human interraction with chain of thought solver, self scitique, LLM as a judge, verifiable rewards, or other, is currently a subject of study and experimentation.
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
                      Of course, plenty of engineering and research is already done to train models in a way that they generalise most, and there is even some empirical evidence (double dessend) and theoretical foundations (compression, symmetries) that they do. We are only talking about how keep making improvements on top of that, perhaps by leveraging new empricial evidence such as new scaling laws in test time compute and RL compute with better collected datasets and new environments.
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
                      Exactly how much does this dataset is "poluted" or intersets with other benchmarks was not yet carefully analysed but is useful it to understand and is WIP.
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
