"use client";

import { useState, useRef, useEffect } from "react";
import { Icon } from "@iconify/react";

interface Message {
  text: string;
  isUser: boolean;
}

const quickReplies = [
  {
    text: "I need help automating my sales process",
    icon: "solar:chart-linear",
    label: "Automate sales",
  },
  {
    text: "I want to automate customer support",
    icon: "solar:headphones-round-linear",
    label: "Customer support",
  },
  {
    text: "I need internal operations automated",
    icon: "solar:settings-linear",
    label: "Internal operations",
  },
  {
    text: "How does the subscription work?",
    icon: "solar:wallet-linear",
    label: "How pricing works",
  },
  {
    text: "I want to schedule a call",
    icon: "solar:phone-linear",
    label: "Schedule call",
  },
];

const responses: Record<string, string> = {
  "I need help automating my sales process":
    "Great choice! Our Sales AI Agent can qualify leads, follow up automatically, and book meetings for your team — running 24/7. We've helped businesses increase their booking rate by 3x. Want to schedule a call with our team?",
  "I want to automate customer support":
    "Perfect! Our Customer Service Agent handles inquiries across chat, email, and phone with human-like empathy. Most clients see an 85% reduction in ticket volume. What channels do your customers currently use?",
  "I need internal operations automated":
    "Smart move! Our Internal Operations Agent can automate data entry, reporting, scheduling — basically any repetitive task eating into your team's time. What takes up the most time right now?",
  "How does the subscription work?":
    "It's simple — $3,500/month, everything included. We analyze, build, deploy, and continuously optimize. No per-project fees, no build charges, and cancel anytime. Want to get started with a free consultation?",
  "I want to schedule a call":
    "Absolutely! You can reach us right now at +1 (800) 123-4567, or we can set up a video demo. What works better for you?",
};

export default function Hero() {
  const [messages, setMessages] = useState<Message[]>([
    {
      text: "Hey! 👋 How can we help you today? I'm here to learn about your business and show you what we can automate.",
      isUser: false,
    },
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const addBotReply = (userMessage: string) => {
    setTimeout(() => {
      const reply =
        responses[userMessage] ||
        "Thanks for reaching out! Our team would love to dive deeper. Would you like to schedule a quick call? Reach us at +1 (800) 123-4567.";
      setMessages((prev) => [...prev, { text: reply, isUser: false }]);
    }, 600);
  };

  const sendQuickReply = (message: string) => {
    setMessages((prev) => [...prev, { text: message, isUser: true }]);
    addBotReply(message);
  };

  const sendMessage = () => {
    if (!input.trim()) return;
    const message = input.trim();
    setInput("");
    setMessages((prev) => [...prev, { text: message, isUser: true }]);
    addBotReply(message);
  };

  return (
    <section className="pt-36 pb-20 px-6 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[400px] bg-violet-500/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — Copy */}
          <div>
            <div className="inline-flex items-center gap-2 bg-violet-500/10 border border-violet-500/20 text-violet-300 text-xs font-medium px-3 py-1.5 rounded-full mb-8 backdrop-blur-sm">
              <Icon icon="solar:magic-stick-3-linear" />
              AI Automation Subscription
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight mb-6 text-white">
              Automation AI service subscription
              for{" "}
              <span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
                small and medium
              </span>{" "}
              businesses.
            </h1>
            <p className="text-base sm:text-lg text-neutral-400 max-w-xl leading-relaxed">
              One flat monthly fee. We analyze your business, find what needs
              automating, build AI agents, and keep everything running — so you can
              focus on growth.
            </p>
          </div>

          {/* Right — Chat Experience */}
          <div id="hero-chat">
          <div className="bg-neutral-900/50 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden shadow-2xl shadow-violet-900/10">
            <div className="px-5 py-4 border-b border-white/5 flex items-center gap-3 bg-neutral-900/80">
              <div className="w-8 h-8 bg-gradient-to-br from-violet-500 to-indigo-600 rounded-full flex items-center justify-center shadow-inner shadow-white/20">
                <Icon icon="solar:user-linear" className="text-white" />
              </div>
              <div>
                <div className="text-sm font-medium text-white">
                  Agentic26 Assistant
                </div>
                <div className="text-xs text-neutral-400 flex items-center gap-1.5 mt-0.5">
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full inline-block animate-pulse" />
                  Online now
                </div>
              </div>
            </div>

            <div className="px-5 py-6 min-h-[280px] max-h-[400px] overflow-y-auto space-y-4 hide-scrollbar">
              {messages.map((msg, i) =>
                msg.isUser ? (
                  <div key={i} className="flex justify-end">
                    <div className="bg-white text-neutral-950 rounded-2xl rounded-tr-sm px-4 py-2.5 text-sm font-medium max-w-md shadow-sm">
                      {msg.text}
                    </div>
                  </div>
                ) : (
                  <div key={i} className="flex gap-3">
                    <div className="w-7 h-7 bg-gradient-to-br from-violet-500 to-indigo-600 rounded-full flex-shrink-0 flex items-center justify-center mt-0.5 shadow-inner shadow-white/20">
                      <Icon
                        icon="solar:stars-linear"
                        className="text-white text-xs"
                      />
                    </div>
                    <div className="bg-neutral-800/80 border border-white/5 rounded-2xl rounded-tl-sm px-4 py-3 text-sm text-neutral-200 max-w-md leading-relaxed shadow-sm">
                      {msg.text}
                    </div>
                  </div>
                )
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Replies */}
            <div className="px-5 pb-4">
              <div className="text-xs font-medium text-neutral-500 mb-3 tracking-wide uppercase">
                Quick options
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                {quickReplies.map((qr) => (
                  <button
                    key={qr.text}
                    onClick={() => sendQuickReply(qr.text)}
                    className="bg-neutral-800/50 border border-white/5 text-sm text-neutral-300 px-3 py-2 rounded-xl hover:bg-neutral-800 hover:border-violet-500/30 hover:text-white transition-all duration-200 flex items-center gap-1.5"
                  >
                    <Icon icon={qr.icon} className="text-violet-400" />
                    {qr.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Chat Input */}
            <div className="px-5 pb-5">
              <div className="flex items-center gap-2 bg-neutral-900 border border-white/10 rounded-xl px-4 py-3 focus-within:border-violet-500/50 focus-within:ring-1 focus-within:ring-violet-500/50 transition-all shadow-inner">
                <input
                  type="text"
                  placeholder="Type your message..."
                  className="flex-1 bg-transparent text-sm text-white placeholder-neutral-500 outline-none"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") sendMessage();
                  }}
                />
                <button
                  onClick={sendMessage}
                  className="w-8 h-8 bg-white/10 hover:bg-white hover:text-neutral-900 text-white rounded-lg flex items-center justify-center transition-all duration-200 flex-shrink-0"
                >
                  <Icon icon="solar:arrow-up-linear" />
                </button>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}
