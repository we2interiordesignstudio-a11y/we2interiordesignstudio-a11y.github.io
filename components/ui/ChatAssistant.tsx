"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { site } from "@/lib/site";

/**
 * we2 studio assistant — a quiet, on-brand front desk.
 * Answers the questions visitors actually ask, then hands serious
 * enquiries to the studio's WhatsApp (the real conversation + lead capture).
 * Fully static: no backend, no cost.
 */

type Msg = { from: "bot" | "user"; text: string; wa?: boolean };

const EASE = [0.22, 1, 0.36, 1] as const;

const GREETING =
  "Hello — I'm the we2 studio assistant. Ask about our work, services, or starting a project.";

const chips = [
  { label: "Our services", key: "services" },
  { label: "See the work", key: "work" },
  { label: "Where are you?", key: "where" },
  { label: "Start a project", key: "start" },
];

function reply(raw: string): Msg {
  const t = raw.toLowerCase();
  const m = (text: string, wa = false): Msg => ({ from: "bot", text, wa });

  if (/office|commercial|shop|restaurant|hotel|hospitality|service|do you/.test(t))
    return m(
      "We work across seven disciplines — homes, villas, apartments, commercial and hospitality spaces, office interiors, and full turnkey projects. What kind of space are you planning?"
    );
  if (/where|located|location|address|vadodara|visit|studio/.test(t))
    return m(
      "Our studio is in Gotri, Vadodara, and we work across Gujarat and beyond. You're welcome to visit us, or we can come to your site."
    );
  if (/price|cost|much|budget|charge|fee|rate|quote/.test(t))
    return m(
      "Every project is priced to its scope, so we share a proper quote after a short conversation — rather than a number that wouldn't mean much yet. The quickest way is a message on WhatsApp.",
      true
    );
  if (/work|portfolio|project|see|photo|example|dune|rathod/.test(t))
    return m(
      "Recent work includes Dune House and the Rathod Residence — the full portfolio lives on our Projects page. Is there a particular kind of space you have in mind?"
    );
  if (/start|begin|hire|book|consult|enquir|inquir|how do/.test(t))
    return m(
      "Wonderful. It starts with a short conversation about your space, budget and how you want it to feel. The fastest way to begin is a quick WhatsApp message.",
      true
    );
  if (/home|house|villa|apartment|residen|flat|bedroom/.test(t))
    return m(
      "Homes and villas are the heart of what we do — interiors made to age beautifully, in materials like limed oak and brushed brass. Tell me a little about the home?"
    );
  if (/time|long|duration|schedule|when|deadline/.test(t))
    return m(
      "Timelines depend on scope — a single room differs from a full home. We'll map a clear schedule once we understand the project. Happy to talk it through on WhatsApp.",
      true
    );
  if (/contact|call|phone|email|talk|reach|human/.test(t))
    return m(
      `You can reach the studio on WhatsApp, by email at ${site.email}, or through our contact page. Which suits you?`,
      true
    );
  if (/^\s*(hi|hey|hello|namaste|good)/.test(t))
    return m("Hello! What would you like to know about we2 — our work, services, or how to begin?");

  return m(
    "That's a good question — the studio can answer it properly. The easiest is a quick WhatsApp message, or our contact page.",
    true
  );
}

export default function ChatAssistant() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([{ from: "bot", text: GREETING }]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const reduce = useReducedMotion();
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, typing]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    const t = setTimeout(() => inputRef.current?.focus(), 350);
    return () => {
      window.removeEventListener("keydown", onKey);
      clearTimeout(t);
    };
  }, [open]);

  function send(text: string) {
    const q = text.trim();
    if (!q) return;
    setMessages((m) => [...m, { from: "user", text: q }]);
    setInput("");
    setTyping(true);
    window.setTimeout(() => {
      setTyping(false);
      setMessages((m) => [...m, reply(q)]);
    }, 750);
  }

  return (
    <>
      {/* launcher */}
      <motion.button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close the we2 assistant" : "Open the we2 assistant"}
        aria-expanded={open}
        data-cursor="hover"
        initial={reduce ? false : { opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.7, ease: EASE }}
        className="group fixed bottom-6 right-6 z-[95] flex h-14 items-center gap-2.5 rounded-full bg-ink pl-4 pr-5 text-canvas shadow-[0_10px_34px_rgba(28,28,28,0.28)] transition-colors duration-300 hover:bg-charcoal md:bottom-8 md:right-8"
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#C8A96A] opacity-70" />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#C8A96A]" />
        </span>
        <span className="font-display text-[0.95rem] tracking-tight">
          {open ? "Close" : "Ask we2"}
        </span>
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            role="dialog"
            aria-modal="false"
            aria-label="we2 studio assistant"
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.4, ease: EASE }}
            className="fixed bottom-24 right-4 z-[100] flex h-[min(560px,72vh)] w-[min(380px,calc(100vw-2rem))] flex-col overflow-hidden rounded-2xl border border-ink/10 bg-canvas shadow-[0_24px_70px_rgba(28,28,28,0.32)] md:bottom-28 md:right-8"
          >
            {/* header */}
            <div className="flex items-center gap-3 border-b border-ink/10 bg-sand/60 px-5 py-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-ink font-display text-sm text-canvas">
                w2
              </div>
              <div className="leading-tight">
                <p className="font-display text-[1.05rem] text-ink">we2 assistant</p>
                <p className="flex items-center gap-1.5 text-xs text-ink/55">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#5AA469]" /> replies instantly
                </p>
              </div>
            </div>

            {/* thread */}
            <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[82%] rounded-2xl px-3.5 py-2.5 text-[0.9rem] leading-relaxed ${
                      msg.from === "user"
                        ? "rounded-br-sm bg-ink text-canvas"
                        : "rounded-bl-sm border border-ink/10 bg-white text-ink"
                    }`}
                  >
                    <p>{msg.text}</p>
                    {msg.wa && (
                      <a
                        href={site.whatsapp}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-cursor="hover"
                        className="mt-2.5 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-3.5 py-1.5 text-xs font-medium text-white transition-opacity hover:opacity-90"
                      >
                        <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
                          <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.87 9.87 0 0 0 4.74 1.21h.01c5.46 0 9.9-4.45 9.9-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm4.52 11.99c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.17.25-.64.8-.78.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.22.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.06-.1-.23-.16-.48-.29Z" />
                        </svg>
                        Continue on WhatsApp
                      </a>
                    )}
                  </div>
                </div>
              ))}
              {typing && (
                <div className="flex justify-start">
                  <div className="rounded-2xl rounded-bl-sm border border-ink/10 bg-white px-4 py-3">
                    <span className="flex gap-1">
                      <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-ink/40 [animation-delay:-0.2s]" />
                      <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-ink/40 [animation-delay:-0.1s]" />
                      <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-ink/40" />
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* quick chips */}
            <div className="flex flex-wrap gap-1.5 border-t border-ink/10 px-4 pt-3">
              {chips.map((c) => (
                <button
                  key={c.key}
                  type="button"
                  onClick={() => send(c.label)}
                  data-cursor="hover"
                  className="rounded-full border border-ink/15 px-3 py-1.5 text-xs text-ink/70 transition-colors hover:border-ink/40 hover:text-ink"
                >
                  {c.label}
                </button>
              ))}
            </div>

            {/* input */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                send(input);
              }}
              className="flex items-center gap-2 px-4 py-3"
            >
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your question…"
                aria-label="Type your question to the we2 assistant"
                className="flex-1 rounded-full border border-ink/15 bg-white px-4 py-2.5 text-sm text-ink outline-none placeholder:text-ink/40 focus:border-ink/40"
              />
              <button
                type="submit"
                aria-label="Send message"
                data-cursor="hover"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-ink text-canvas transition-colors hover:bg-charcoal"
              >
                <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
                  <path
                    d="M4 12h14M13 6l6 6-6 6"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
