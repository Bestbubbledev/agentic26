"use client";

import { Icon } from "@iconify/react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-xs text-violet-400 uppercase tracking-widest font-medium mb-4">
            Test Our Agents
          </div>
          <h2 className="text-3xl sm:text-4xl font-medium tracking-tight mb-5 text-white">
            Talk to our Agents.
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 leading-relaxed">
            Experience Agentic AI in real life. Pick whatever works best for you
            — call, video, or chat to see exactly how autonomous agents can run
            your business.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {/* Call */}
          <a
            href="tel:+18001234567"
            className="group bg-neutral-900/40 border border-white/5 rounded-2xl p-8 text-center hover:border-violet-500/30 hover:bg-neutral-900/60 transition-all duration-300"
          >
            <div className="w-14 h-14 bg-violet-500/10 border border-violet-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <Icon
                icon="solar:phone-calling-linear"
                className="text-violet-400 text-2xl"
              />
            </div>
            <h3 className="text-lg font-medium tracking-tight mb-2 text-white">
              Voice Agent
            </h3>
            <p className="text-sm text-neutral-400 mb-5 leading-relaxed">
              Have a real-time voice conversation with our AI sales agent.
            </p>
            <div className="text-sm text-violet-400 font-medium">
              Call +1 (800) 123-4567
            </div>
            <div className="text-xs text-neutral-500 mt-1.5">
              Available 24/7 · Instant pickup
            </div>
          </a>

          {/* Demo */}
          <a
            href="#"
            className="group hover:border-emerald-500/30 hover:bg-neutral-900/60 transition-all duration-300 text-center bg-neutral-900/40 border-white/5 border rounded-2xl p-8"
          >
            <div className="w-14 h-14 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <Icon
                icon="solar:videocamera-record-linear"
                className="text-emerald-400 text-2xl"
              />
            </div>
            <h3 className="text-lg font-medium tracking-tight mb-2 text-white">
              Interactive Demo
            </h3>
            <p className="text-sm text-neutral-400 mb-5 leading-relaxed">
              Watch our operations agent execute complex workflows.
            </p>
            <div className="text-sm text-emerald-400 font-medium">
              Start interactive demo →
            </div>
            <div className="text-xs text-neutral-500 mt-1.5">
              Instant access · Real-time
            </div>
          </a>

          {/* Chat */}
          <button
            onClick={() => {
              const widget = document.getElementById("chatWidget");
              if (widget) widget.classList.remove("hidden");
            }}
            className="w-full group bg-neutral-900/40 border border-white/5 rounded-2xl p-8 text-center hover:border-amber-500/30 hover:bg-neutral-900/60 transition-all duration-300 cursor-pointer outline-none"
          >
            <div className="w-14 h-14 bg-amber-500/10 border border-amber-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <Icon
                icon="solar:chat-round-dots-linear"
                className="text-amber-400 text-2xl"
              />
            </div>
            <h3 className="text-lg font-medium tracking-tight mb-2 text-center text-white">
              Chat Agent
            </h3>
            <p className="text-sm text-neutral-400 mb-5 text-center leading-relaxed">
              Test our AI&apos;s natural language and reasoning capabilities.
            </p>
            <div className="text-sm text-amber-400 font-medium text-center">
              Launch AI chat →
            </div>
            <div className="text-xs text-neutral-500 mt-1.5 text-center">
              Avg. response: &lt; 1 second
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}
