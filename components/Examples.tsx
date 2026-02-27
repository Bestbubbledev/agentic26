import { Icon } from "@iconify/react";

const examples = [
  {
    icon: "solar:shop-linear",
    iconColor: "text-blue-400",
    iconBg: "bg-blue-500/10",
    iconBorder: "border-blue-500/20",
    title: "E-commerce Store",
    subtitle: "Retail · 12 employees",
    description:
      "AI customer service agent handling 2,400+ monthly inquiries about orders, returns, and product questions — reducing response time drastically.",
    stats: [
      { icon: "solar:arrow-down-linear", value: "85%", label: "fewer tickets" },
      { icon: "solar:clock-circle-linear", value: "30s", label: "avg response" },
    ],
  },
  {
    icon: "solar:buildings-linear",
    iconColor: "text-violet-400",
    iconBg: "bg-violet-500/10",
    iconBorder: "border-violet-500/20",
    title: "Real Estate Agency",
    subtitle: "Real Estate · 8 agents",
    description:
      "An AI sales agent that qualifies inbound leads, answers property questions, and books showings — converting leads into appointments automatically.",
    stats: [
      { icon: "solar:arrow-up-linear", value: "3x", label: "more bookings" },
      { icon: "solar:check-circle-linear", value: "24/7", label: "availability" },
    ],
  },
  {
    icon: "solar:document-text-linear",
    iconColor: "text-amber-400",
    iconBg: "bg-amber-500/10",
    iconBorder: "border-amber-500/20",
    title: "Law Firm",
    subtitle: "Legal · 15 staff",
    description:
      "Internal operations agent processes intake forms, schedules consultations, and routes cases to the right attorney automatically.",
    stats: [
      { icon: "solar:arrow-down-linear", value: "20hrs", label: "saved/week" },
      { icon: "solar:check-circle-linear", value: "98%", label: "accuracy" },
    ],
  },
  {
    icon: "solar:heart-pulse-linear",
    iconColor: "text-rose-400",
    iconBg: "bg-rose-500/10",
    iconBorder: "border-rose-500/20",
    title: "Healthcare Clinic",
    subtitle: "Healthcare · 25 staff",
    description:
      "AI receptionist that handles appointment scheduling, insurance verification, and patient follow-ups — freeing up front desk staff entirely.",
    stats: [
      { icon: "solar:arrow-down-linear", value: "90%", label: "call volume" },
      { icon: "solar:arrow-down-linear", value: "40%", label: "fewer no-shows" },
    ],
  },
  {
    icon: "solar:delivery-linear",
    iconColor: "text-emerald-400",
    iconBg: "bg-emerald-500/10",
    iconBorder: "border-emerald-500/20",
    title: "Logistics Company",
    subtitle: "Logistics · 40 employees",
    description:
      "Operations agent managing dispatch scheduling, route optimization, and driver communication — cutting operational costs smoothly.",
    stats: [
      { icon: "solar:arrow-down-linear", value: "30%", label: "cost reduction" },
      { icon: "solar:arrow-up-linear", value: "2x", label: "faster dispatch" },
    ],
  },
  {
    icon: "solar:laptop-linear",
    iconColor: "text-cyan-400",
    iconBg: "bg-cyan-500/10",
    iconBorder: "border-cyan-500/20",
    title: "SaaS Startup",
    subtitle: "Technology · 20 employees",
    description:
      "Full suite — sales agent for demo booking, support agent for tier-1 tickets, and ops agent for user onboarding flows and churn detection.",
    stats: [
      { icon: "solar:arrow-up-linear", value: "50%", label: "more demos" },
      { icon: "solar:arrow-down-linear", value: "25%", label: "less churn" },
    ],
  },
];

export default function Examples() {
  return (
    <section id="examples" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl mb-16">
          <div className="text-xs text-violet-400 uppercase tracking-widest font-medium mb-4">
            Examples
          </div>
          <h2 className="text-3xl sm:text-4xl font-medium tracking-tight mb-5 text-white">
            Real automations for businesses like yours.
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 leading-relaxed">
            Every business is different. Here are some of the AI agents and
            automations we&apos;ve deployed across various industries.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {examples.map((ex) => (
            <div
              key={ex.title}
              className="bg-neutral-900/40 border border-white/5 rounded-2xl p-6 hover:border-white/10 hover:bg-neutral-900/60 transition-colors"
            >
              <div className="flex items-center gap-4 mb-5">
                <div
                  className={`w-10 h-10 ${ex.iconBg} border ${ex.iconBorder} rounded-lg flex items-center justify-center flex-shrink-0`}
                >
                  <Icon icon={ex.icon} className={`${ex.iconColor} text-xl`} />
                </div>
                <div>
                  <div className="text-sm font-medium text-white">
                    {ex.title}
                  </div>
                  <div className="text-xs text-neutral-500 mt-0.5">
                    {ex.subtitle}
                  </div>
                </div>
              </div>
              <p className="text-sm text-neutral-400 leading-relaxed mb-6">
                {ex.description}
              </p>
              <div className="flex items-center gap-4 text-xs font-medium border-t border-white/5 pt-4">
                {ex.stats.map((stat) => (
                  <span
                    key={stat.label}
                    className="flex items-center gap-1.5 text-neutral-300"
                  >
                    <Icon icon={stat.icon} className="text-emerald-400" />
                    <span className="text-emerald-400">{stat.value}</span>{" "}
                    {stat.label}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
