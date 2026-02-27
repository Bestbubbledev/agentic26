import { Icon } from "@iconify/react";

const features = [
  "Business analysis & audit",
  "Custom AI development",
  "Sales automation",
  "Customer service",
  "Internal operations",
  "Ongoing optimization",
  "Performance monitoring",
  "Dedicated support",
  "Unlimited revisions",
  "Cancel anytime",
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="py-24 px-6 bg-neutral-900/20 border-y border-white/5 relative overflow-hidden"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-[400px] bg-violet-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-xs text-violet-400 uppercase tracking-widest font-medium mb-4">
            Pricing
          </div>
          <h2 className="text-3xl sm:text-4xl font-medium tracking-tight mb-5 text-white">
            One plan. Everything included.
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 leading-relaxed">
            No per-project costs. No hidden fees. No build charges. Just one
            flat monthly subscription that covers everything your business
            needs.
          </p>
        </div>

        <div className="max-w-lg mx-auto">
          <div className="bg-neutral-900/80 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden relative shadow-2xl shadow-black">
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-violet-500/50 to-transparent" />

            <div className="p-8 sm:p-10">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <div className="text-sm text-neutral-400 font-medium mb-2">
                    Automation Subscription
                  </div>
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-4xl sm:text-5xl font-medium tracking-tight text-white">
                      $3,500
                    </span>
                    <span className="text-neutral-500 text-sm">/month</span>
                  </div>
                </div>
                <div className="bg-violet-500/10 border border-violet-500/20 text-violet-300 text-xs font-medium px-3 py-1.5 rounded-full">
                  All-inclusive
                </div>
              </div>

              <div className="border-t border-white/5 pt-8 mb-8">
                <div className="text-sm font-medium mb-5 text-white">
                  Everything you get:
                </div>
                <div className="grid sm:grid-cols-2 gap-y-4 gap-x-6">
                  {features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-3 text-sm text-neutral-300"
                    >
                      <Icon
                        icon="solar:check-circle-linear"
                        className="text-violet-400 flex-shrink-0 text-base"
                      />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>

              <a
                href="#contact"
                className="block w-full bg-white text-neutral-950 hover:bg-neutral-200 text-center text-sm font-medium py-3.5 rounded-xl transition-colors duration-200"
              >
                Start your subscription
              </a>
              <p className="text-xs text-neutral-500 text-center mt-4">
                No contracts · Cancel anytime · Results in the first week
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
