import { Icon } from "@iconify/react";

const steps = [
  {
    number: "01",
    icon: "solar:magnifer-linear",
    title: "Analyze Your Business",
    description:
      "We audit your workflows, tools, and team processes to identify every opportunity for AI automation — and prioritize by impact.",
  },
  {
    number: "02",
    icon: "solar:programming-linear",
    title: "Build & Deploy Agents",
    description:
      "Our team designs, builds, and deploys custom AI agents tailored to your specific business needs — sales, support, or operations.",
  },
  {
    number: "03",
    icon: "solar:refresh-circle-linear",
    title: "Optimize & Scale",
    description:
      "We maintain, fine-tune your agents, and expand automation as your business grows — all included in your subscription.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="py-24 px-6 bg-neutral-900/20 border-y border-white/5"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <div className="text-xs text-violet-400 uppercase tracking-widest font-medium mb-4">
            How it works
          </div>
          <h2 className="text-3xl sm:text-4xl font-medium tracking-tight mb-5 text-white">
            From analysis to automation in three simple steps.
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 leading-relaxed">
            No complex onboarding. No long contracts. We get started fast, and
            you see results within the first week.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          <div className="hidden md:block absolute top-6 left-[20%] right-[20%] h-[1px] bg-gradient-to-r from-transparent via-violet-500/30 to-transparent" />

          {steps.map((step) => (
            <div key={step.number} className="text-center relative">
              <div className="w-12 h-12 bg-neutral-900 border border-white/10 rounded-full flex items-center justify-center text-sm font-medium mx-auto mb-8 relative z-10 shadow-sm text-white">
                {step.number}
              </div>
              <div className="bg-neutral-900/40 backdrop-blur-sm border border-white/5 rounded-2xl p-8 hover:border-white/10 transition-colors">
                <div className="w-14 h-14 bg-violet-500/10 border border-violet-500/20 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <Icon
                    icon={step.icon}
                    className="text-violet-400 text-2xl"
                  />
                </div>
                <h3 className="text-lg font-medium tracking-tight mb-3 text-white">
                  {step.title}
                </h3>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
