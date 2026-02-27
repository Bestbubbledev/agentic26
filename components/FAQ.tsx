"use client";

import { useState } from "react";
import { Icon } from "@iconify/react";

const faqs = [
  {
    question: "Do you charge per agent or per project?",
    answer:
      "No. Everything is included in your $3,500/month subscription. We don't charge per agent, per project, or per build. One flat fee covers analysis, development, deployment, optimization, and support.",
  },
  {
    question: "How quickly can you get started?",
    answer:
      "We start analyzing your business within 24 hours of signing up. Most businesses have their first AI agent live within 5 to 7 business days.",
  },
  {
    question: "Can I cancel anytime?",
    answer:
      "Absolutely. There are no long-term contracts or commitments. You can cancel at the end of any billing cycle with no penalties.",
  },
  {
    question: "What kind of businesses do you work with?",
    answer:
      "We specialize in small and medium-sized businesses in the United States across all industries — e-commerce, healthcare, real estate, legal, SaaS, logistics, and more.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 px-6 bg-neutral-900/20 border-t border-white/5">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-medium tracking-tight mb-5 text-white">
            Frequently asked questions
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-white/5 rounded-2xl overflow-hidden bg-neutral-900/40"
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="w-full flex items-center justify-between px-6 py-5 text-left cursor-pointer outline-none hover:bg-neutral-800/50 transition-colors"
              >
                <span className="text-sm font-medium text-white">
                  {faq.question}
                </span>
                <Icon
                  icon="solar:alt-arrow-down-linear"
                  className={`text-neutral-400 text-lg transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-5">
                  <p className="text-sm text-neutral-400 leading-relaxed pt-2">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
