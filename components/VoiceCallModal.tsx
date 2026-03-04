"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { RetellWebClient } from "retell-client-js-sdk";
import { Icon } from "@iconify/react";

type CallStatus = "idle" | "connecting" | "active" | "ended" | "error";

export default function VoiceCallModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [status, setStatus] = useState<CallStatus>("idle");
  const [agentTalking, setAgentTalking] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const clientRef = useRef<RetellWebClient | null>(null);

  const cleanup = useCallback(() => {
    if (clientRef.current) {
      clientRef.current.stopCall();
      clientRef.current = null;
    }
    setStatus("idle");
    setAgentTalking(false);
    setError(null);
  }, []);

  const startCall = useCallback(async () => {
    setStatus("connecting");
    setError(null);

    try {
      // Request mic permission before connecting
      await navigator.mediaDevices.getUserMedia({ audio: true });

      const res = await fetch("/api/retell", { method: "POST" });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || "Failed to create call");
      }
      const { access_token } = await res.json();

      const client = new RetellWebClient();
      clientRef.current = client;

      client.on("call_started", () => setStatus("active"));
      client.on("call_ended", () => setStatus("ended"));
      client.on("agent_start_talking", () => setAgentTalking(true));
      client.on("agent_stop_talking", () => setAgentTalking(false));
      client.on("error", (e) => {
        console.error("Retell error:", e);
        setError("Call disconnected unexpectedly.");
        setStatus("error");
      });

      await client.startCall({ accessToken: access_token });
    } catch (err) {
      console.error("Failed to start call:", err);
      setError(err instanceof Error ? err.message : "Failed to start call");
      setStatus("error");
    }
  }, []);

  const endCall = useCallback(() => {
    if (clientRef.current) {
      clientRef.current.stopCall();
      clientRef.current = null;
    }
    setStatus("ended");
    setAgentTalking(false);
  }, []);

  // Cleanup on close
  useEffect(() => {
    if (!open) cleanup();
  }, [open, cleanup]);

  if (!open) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-in slide-in-from-bottom-4 fade-in duration-300">
      <div className="bg-neutral-900 border border-white/10 rounded-2xl p-5 w-72 shadow-2xl shadow-black/50">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div
              className={`w-2 h-2 rounded-full ${
                status === "active"
                  ? "bg-emerald-400 animate-pulse"
                  : status === "connecting"
                    ? "bg-amber-400 animate-pulse"
                    : "bg-neutral-600"
              }`}
            />
            <span className="text-xs font-medium text-neutral-400 uppercase tracking-wider">
              {status === "active"
                ? "Live"
                : status === "connecting"
                  ? "Connecting"
                  : "Voice Agent"}
            </span>
          </div>
          <button
            onClick={() => {
              if (status === "active" || status === "connecting") endCall();
              onClose();
            }}
            className="text-neutral-500 hover:text-white transition-colors cursor-pointer"
          >
            <Icon icon="solar:close-circle-linear" className="text-lg" />
          </button>
        </div>

        {/* Visual indicator */}
        <div className="flex justify-center mb-4">
          <div
            className={`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-500 ${
              status === "active"
                ? agentTalking
                  ? "bg-emerald-500/20 border-2 border-emerald-400 shadow-[0_0_24px_rgba(16,185,129,0.3)] scale-110"
                  : "bg-emerald-500/10 border-2 border-emerald-500/40"
                : status === "connecting"
                  ? "bg-emerald-500/10 border-2 border-emerald-500/30 animate-pulse"
                  : "bg-neutral-800 border-2 border-white/10"
            }`}
          >
            <Icon
              icon={
                status === "active"
                  ? "solar:soundwave-linear"
                  : status === "connecting"
                    ? "solar:refresh-linear"
                    : status === "error"
                      ? "solar:danger-triangle-linear"
                      : "solar:microphone-3-linear"
              }
              className={`text-2xl transition-colors ${
                status === "active"
                  ? agentTalking
                    ? "text-emerald-400"
                    : "text-emerald-500/70"
                  : status === "connecting"
                    ? "text-emerald-400 animate-spin"
                    : status === "error"
                      ? "text-red-400"
                      : "text-neutral-400"
              }`}
            />
          </div>
        </div>

        {/* Status text */}
        <div className="text-center mb-4">
          <p className="text-sm font-medium text-white">
            {status === "idle" && "AI Voice Agent"}
            {status === "connecting" && "Connecting..."}
            {status === "active" &&
              (agentTalking ? "Agent is speaking" : "Listening...")}
            {status === "ended" && "Call ended"}
            {status === "error" && "Connection error"}
          </p>
          <p className="text-xs text-neutral-500 mt-1">
            {status === "idle" && "Start a voice conversation"}
            {status === "connecting" && "Setting up connection..."}
            {status === "active" && "Speak naturally"}
            {status === "ended" && "Thanks for trying the demo!"}
            {status === "error" && (error || "Something went wrong.")}
          </p>
        </div>

        {/* Action buttons */}
        <div className="flex justify-center">
          {(status === "idle" || status === "error") && (
            <button
              onClick={startCall}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white text-sm rounded-full font-medium transition-colors cursor-pointer w-full justify-center"
            >
              <Icon icon="solar:phone-calling-linear" className="text-base" />
              Start call
            </button>
          )}

          {(status === "active" || status === "connecting") && (
            <button
              onClick={endCall}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-red-600 hover:bg-red-500 text-white text-sm rounded-full font-medium transition-colors cursor-pointer w-full justify-center"
            >
              <Icon icon="solar:end-call-linear" className="text-base" />
              End call
            </button>
          )}

          {status === "ended" && (
            <button
              onClick={() => {
                setStatus("idle");
                setError(null);
              }}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white text-sm rounded-full font-medium transition-colors cursor-pointer w-full justify-center"
            >
              <Icon icon="solar:restart-linear" className="text-base" />
              Call again
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
