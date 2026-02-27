"use client";

import { useState, useRef, useEffect } from "react";
import { Icon } from "@iconify/react";

interface Message {
  text: string;
  isUser: boolean;
}

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      text: "Hi there! 👋 Ready to automate your business? Ask me anything or tell me about your needs.",
      isUser: false,
    },
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Listen for external open trigger (from Contact section)
  useEffect(() => {
    const widget = document.getElementById("chatWidget");
    if (!widget) return;
    const observer = new MutationObserver(() => {
      if (!widget.classList.contains("hidden")) {
        setIsOpen(true);
      }
    });
    observer.observe(widget, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  const sendMessage = () => {
    if (!input.trim()) return;
    const message = input.trim();
    setInput("");
    setMessages((prev) => [...prev, { text: message, isUser: true }]);
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          text: "Thanks! Our team will get back to you shortly. For immediate help, call +1 (800) 123-4567.",
          isUser: false,
        },
      ]);
    }, 800);
  };

  return (
    <>
      {/* Hidden element for external triggers */}
      <div id="chatWidget" className={isOpen ? "" : "hidden"} />

      {/* Widget */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-[calc(100%-3rem)] sm:w-96 z-50">
          <div className="bg-neutral-900 border border-white/10 rounded-2xl shadow-2xl shadow-black/80 overflow-hidden">
            <div className="px-5 py-4 bg-neutral-900 border-b border-white/5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-br from-violet-500 to-indigo-600 rounded-full flex items-center justify-center">
                  <Icon icon="solar:user-linear" className="text-white text-sm" />
                </div>
                <div>
                  <div className="text-sm font-medium text-white">
                    Agentic26 Chat
                  </div>
                  <div className="text-xs text-neutral-400 mt-0.5">
                    We typically reply instantly
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-neutral-500 hover:text-white transition-colors cursor-pointer outline-none"
              >
                <Icon icon="solar:close-circle-linear" className="text-xl" />
              </button>
            </div>
            <div className="px-5 py-6 h-72 overflow-y-auto space-y-4 bg-neutral-950/50 hide-scrollbar">
              {messages.map((msg, i) =>
                msg.isUser ? (
                  <div key={i} className="flex justify-end mb-4">
                    <div className="bg-white text-neutral-950 rounded-2xl rounded-tr-sm px-4 py-2.5 text-sm font-medium max-w-[240px] shadow-sm">
                      {msg.text}
                    </div>
                  </div>
                ) : (
                  <div key={i} className="flex gap-3 mb-4">
                    <div className="w-6 h-6 bg-gradient-to-br from-violet-500 to-indigo-600 rounded-full flex-shrink-0 flex items-center justify-center mt-0.5 shadow-inner shadow-white/20">
                      <Icon
                        icon="solar:stars-linear"
                        className="text-white text-[10px]"
                      />
                    </div>
                    <div className="bg-neutral-800 border border-white/5 rounded-2xl rounded-tl-sm px-4 py-2.5 text-sm text-neutral-200 max-w-[240px] leading-relaxed shadow-sm">
                      {msg.text}
                    </div>
                  </div>
                )
              )}
              <div ref={messagesEndRef} />
            </div>
            <div className="px-5 pb-5 pt-2 bg-neutral-950/50">
              <div className="flex items-center gap-2 bg-neutral-900 border border-white/10 rounded-xl px-4 py-3 focus-within:border-violet-500/50 focus-within:ring-1 focus-within:ring-violet-500/50 transition-all shadow-inner">
                <input
                  type="text"
                  placeholder="Type a message..."
                  className="flex-1 bg-transparent text-sm text-white placeholder-neutral-500 outline-none"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") sendMessage();
                  }}
                />
                <button
                  onClick={sendMessage}
                  className="w-8 h-8 bg-white/10 hover:bg-white hover:text-neutral-900 text-white rounded-lg flex items-center justify-center transition-all duration-200 flex-shrink-0 outline-none cursor-pointer"
                >
                  <Icon icon="solar:arrow-up-linear" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-white hover:bg-neutral-200 rounded-full flex items-center justify-center shadow-xl shadow-black/50 hover:scale-105 transition-transform cursor-pointer outline-none"
        >
          <Icon
            icon="solar:chat-round-dots-linear"
            className="text-neutral-950 text-2xl"
          />
        </button>
      )}
    </>
  );
}
