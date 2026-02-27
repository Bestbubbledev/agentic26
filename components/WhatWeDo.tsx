import { Icon } from "@iconify/react";

const services = [
  {
    icon: "solar:chart-2-linear",
    title: "Sales Agent",
    description:
      "An AI agent that qualifies leads, follows up with prospects, books meetings, and nurtures your pipeline — 24/7 without breaks.",
    features: [
      "Lead qualification & scoring",
      "Automated follow-ups",
      "Meeting scheduling",
      "CRM integration",
    ],
    color: "violet",
  },
  {
    icon: "solar:headphones-round-linear",
    title: "Customer Service",
    description:
      "Handle customer inquiries, resolve tickets, and provide instant support across chat, email, and phone — with human-like empathy.",
    features: [
      "Multi-channel support",
      "Ticket resolution",
      "Knowledge base learning",
      "Smart escalation",
    ],
    color: "emerald",
  },
  {
    icon: "solar:settings-linear",
    title: "Internal Operations",
    description:
      "Automate back-office tasks, data processing, inventory, reporting, and any repetitive task that eats into your team's time.",
    features: [
      "Workflow automation",
      "Data entry & processing",
      "Automated reporting",
      "System integrations",
    ],
    color: "amber",
  },
];

const colorMap: Record<string, { hover: string; bg: string; border: string; text: string; hoverBg: string }> = {
  violet: {
    hover: "hover:border-violet-500/30",
    bg: "bg-violet-500/10",
    border: "border-violet-500/20",
    text: "text-violet-400",
    hoverBg: "group-hover:bg-violet-500/20",
  },
  emerald: {
    hover: "hover:border-emerald-500/30",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20",
    text: "text-emerald-400",
    hoverBg: "group-hover:bg-emerald-500/20",
  },
  amber: {
    hover: "hover:border-amber-500/30",
    bg: "bg-amber-500/10",
    border: "border-amber-500/20",
    text: "text-amber-400",
    hoverBg: "group-hover:bg-amber-500/20",
  },
};

const glowMap: Record<string, { base: string; hover: string }> = {
  violet: { base: "bg-violet-500/5", hover: "group-hover:bg-violet-500/10" },
  emerald: { base: "bg-emerald-500/5", hover: "group-hover:bg-emerald-500/10" },
  amber: { base: "bg-amber-500/5", hover: "group-hover:bg-amber-500/10" },
};

export default function WhatWeDo() {
  return (
    <section id="what-we-do" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl mb-16">
          <div className="text-xs text-violet-400 uppercase tracking-widest font-medium mb-4">
            What we do
          </div>
          <h2 className="text-3xl sm:text-4xl font-medium tracking-tight mb-5 text-white">
            We build AI agents that run your business operations — on autopilot.
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
            No per-project billing. No hourly rates. Just one subscription that
            covers analysis, development, deployment, and ongoing optimization of
            your AI systems.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service) => {
            const c = colorMap[service.color];
            const g = glowMap[service.color];
            return (
              <div
                key={service.title}
                className={`group bg-neutral-900/40 backdrop-blur-sm border border-white/5 rounded-2xl p-8 ${c.hover} hover:bg-neutral-900/60 transition-all duration-300 relative overflow-hidden`}
              >
                <div
                  className={`absolute top-0 right-0 w-32 h-32 ${g.base} blur-[50px] rounded-full ${g.hover} transition-colors`}
                />
                <div
                  className={`w-12 h-12 ${c.bg} ${c.border} border rounded-xl flex items-center justify-center mb-6 ${c.hoverBg} transition-colors relative z-10`}
                >
                  <Icon icon={service.icon} className={`${c.text} text-2xl`} />
                </div>
                <h3 className="text-lg font-medium tracking-tight mb-3 text-white">
                  {service.title}
                </h3>
                <p className="text-sm text-neutral-400 leading-relaxed mb-6">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-3 text-sm text-neutral-300"
                    >
                      <Icon
                        icon="solar:check-circle-linear"
                        className={`${c.text} text-base`}
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
