"use client";

import { useState, useRef, useEffect } from "react";
import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport } from "ai";
import {
  MessageCircle,
  X,
  Send,
  Phone,
  MessageSquare,
  Mail,
  Clock,
  Sparkles,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// ------------------------------------------------------------------
// Keyword fallback (used when AI is unavailable)
// ------------------------------------------------------------------

const FALLBACK_RESPONSES: Record<string, string> = {
  book: "You can book online at littleroots.studio/book or text Carla at (702) 917-2350. After booking, you'll receive a short intake questionnaire so Carla can prepare the space for your child.",
  appointment: "You can book online at littleroots.studio/book or text Carla at (702) 917-2350. She'll find the perfect time for your family.",
  price: "Sensory-Friendly Haircut is $45 (60 min), Kids Haircut is $30 (30 min), Buzz Cut/Ends Trimmed is $20 (15-20 min), and Bang Trim is $15 (10-15 min). If your child is unable to complete the haircut, you will not be charged.",
  cost: "Sensory-Friendly Haircut is $45 (60 min), Kids Haircut is $30 (30 min), Buzz Cut/Ends Trimmed is $20 (15-20 min), and Bang Trim is $15 (10-15 min). If your child is unable to complete the haircut, you will not be charged.",
  hour: "We're open Tuesday through Saturday, 10 AM – 6 PM (closed 1–2 PM daily for lunch). Closed Sunday & Monday. By appointment only.",
  open: "We're open Tuesday through Saturday, 10 AM – 6 PM (closed 1–2 PM daily for lunch). Closed Sunday & Monday.",
  sensory: "Every appointment begins with understanding. You'll receive an intake questionnaire about your child's sensitivities, comforts, and favorites. The studio features dimmable lighting, sound control, sensory tools, weighted capes, Nintendo Switch, and flexible seating. Nothing is rushed and nothing is forced.",
  autism: "Little Roots Studio specializes in sensory-friendly haircuts for children with autism and sensory differences. Carla is trained in trauma-informed care and creates a calm, predictable environment. If your child is unable to complete the haircut, you will not be charged.",
  anxiety: "It's completely normal for children to feel anxious about haircuts. Carla takes a gentle, never-forced approach with breaks as needed. The private suite is designed to be calming — no fluorescents, no other families, just your child at their own pace.",
  scared: "It's completely okay if your child is nervous! Carla is patient, gentle, and experienced. Practice visits are available at no charge so your child can see the space first. Nothing is ever forced.",
  first: "For first haircuts, Carla sends an intake questionnaire beforehand to learn about your child. The private suite is calm and quiet. Practice visits are available at no charge. Take your time — there's never any rush.",
  intake: "The intake questionnaire helps Carla prepare the space for your child: https://docs.google.com/forms/d/e/1FAIpQLSetWpeKLI6A_HaWhivbO3BuWvgoVwqDgtrJzz7jqU-GLdP5EQ/viewform",
  where: "Little Roots Studio is inside Sunset Suites at 2895 N Green Valley Pkwy, Suite G, Henderson, NV 89014. It's a secured building — text (702) 917-2350 when you arrive for the entry code.",
  location: "We're at 2895 N Green Valley Pkwy, Suite G, Henderson, NV 89014 (inside Sunset Suites). Text (702) 917-2350 when you arrive.",
  arrive: "When you arrive, text (702) 917-2350. The studio is inside a secured building with no waiting room. Carla will send the entry code when your suite is ready.",
  charge: "If your child is unable to complete the haircut, you will not be charged. Comfort and trust always come first.",
  practice: "Practice visits are available at no charge! Your child can come see the space, sit in the chair, and get comfortable — no haircut required. Text (702) 917-2350 to schedule one.",
};

function matchFallback(input: string): string {
  const lower = input.toLowerCase();
  for (const [keyword, response] of Object.entries(FALLBACK_RESPONSES)) {
    if (lower.includes(keyword)) return response;
  }
  return "Thanks for reaching out! I can help with services, pricing, booking, sensory accommodations, or anything about Little Roots Studio. What would you like to know?";
}

const QUICK_REPLIES = [
  "Book an appointment",
  "What are your hours?",
  "Sensory accommodations?",
  "Pricing info",
  "First haircut tips",
];

const WELCOME_MESSAGE =
  "Hi there! I'm the Little Roots Studio assistant. I can help with booking, pricing, sensory accommodations, and anything about our studio. What would you like to know?";

// ------------------------------------------------------------------
// Component
// ------------------------------------------------------------------

interface FallbackMessage {
  id: string;
  text: string;
  sender: "user" | "bot";
}

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [mode, setMode] = useState<"chat" | "contact">("chat");
  const [useAI, setUseAI] = useState(true);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // AI chat via Vercel AI SDK
  const { messages: aiMessages, sendMessage, status } = useChat({
    transport: new DefaultChatTransport({ api: "/api/chat" }),
    messages: [
      {
        id: "welcome",
        role: "assistant" as const,
        content: WELCOME_MESSAGE,
        parts: [{ type: "text" as const, text: WELCOME_MESSAGE }],
      },
    ],
    onError: () => {
      setUseAI(false);
    },
  });

  const aiLoading = status === "submitted" || status === "streaming";

  // Fallback keyword chat state
  const [fallbackMessages, setFallbackMessages] = useState<FallbackMessage[]>([
    { id: "welcome", text: WELCOME_MESSAGE, sender: "bot" },
  ]);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [aiMessages, fallbackMessages, aiLoading, isTyping]);

  function sendFallbackMessage(text: string) {
    if (!text.trim()) return;
    setFallbackMessages((prev) => [
      ...prev,
      { id: crypto.randomUUID(), text: text.trim(), sender: "user" },
    ]);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      setFallbackMessages((prev) => [
        ...prev,
        { id: crypto.randomUUID(), text: matchFallback(text), sender: "bot" },
      ]);
      setIsTyping(false);
    }, 1000);
  }

  // Unified message list
  const displayMessages = useAI
    ? aiMessages.map((m) => ({
        id: m.id,
        text: m.content,
        sender: (m.role as string) === "user" ? ("user" as const) : ("bot" as const),
      }))
    : fallbackMessages;

  const showTyping = useAI ? aiLoading : isTyping;

  function handleSend(e: React.FormEvent) {
    e.preventDefault();
    const text = input.trim();
    if (!text) return;

    if (useAI) {
      sendMessage({ text });
      setInput("");
    } else {
      sendFallbackMessage(text);
    }
  }

  function handleQuickReply(reply: string) {
    if (useAI) {
      sendMessage({ text: reply });
    } else {
      sendFallbackMessage(reply);
    }
  }

  return (
    <>
      {/* Toggle Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full shadow-2xl flex items-center justify-center gradient-hero"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <MessageCircle className="w-7 h-7 text-white" />
            <span className="absolute -top-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
              <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
            </span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.9 }}
            className="fixed bottom-6 right-6 z-50 w-[380px] max-w-[calc(100vw-48px)] bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 flex flex-col"
            style={{ height: "520px", maxHeight: "calc(100vh - 6rem)" }}
          >
            {/* Header */}
            <div className="gradient-hero p-5 text-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Little Roots Studio</h3>
                    <p className="text-white/80 text-sm flex items-center gap-1">
                      <span className="w-2 h-2 bg-green-400 rounded-full" />
                      {mode === "chat" ? "Ask us anything!" : "Contact us directly"}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => setMode(mode === "chat" ? "contact" : "chat")}
                    className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
                    title={mode === "chat" ? "Contact info" : "Back to chat"}
                  >
                    {mode === "chat" ? (
                      <Phone className="w-4 h-4" />
                    ) : (
                      <MessageSquare className="w-4 h-4" />
                    )}
                  </button>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>

            {mode === "contact" ? (
              /* Contact Mode */
              <div className="flex-1 p-5 space-y-3 overflow-y-auto">
                <p className="text-sm text-gray-500 text-center mb-4">
                  Reach out directly — we&apos;d love to hear from you!
                </p>
                <a
                  href="tel:+17029172350"
                  className="flex items-center gap-3 p-4 rounded-xl bg-[#5B8A8A]/5 hover:bg-[#5B8A8A]/10 transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-[#5B8A8A]/10 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-[#5B8A8A]" />
                  </div>
                  <div>
                    <p className="font-medium text-sm text-gray-900">(702) 917-2350</p>
                    <p className="text-xs text-gray-500">Text or Call (text preferred)</p>
                  </div>
                </a>
                <a
                  href="mailto:littlerootscuts333@gmail.com"
                  className="flex items-center gap-3 p-4 rounded-xl bg-[#5B8A8A]/5 hover:bg-[#5B8A8A]/10 transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-[#5B8A8A]/10 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-[#5B8A8A]" />
                  </div>
                  <div>
                    <p className="font-medium text-sm text-gray-900">
                      littlerootscuts333@gmail.com
                    </p>
                    <p className="text-xs text-gray-500">Email Us</p>
                  </div>
                </a>
                <div className="pt-3 text-center">
                  <div className="flex items-center justify-center gap-1.5 text-gray-500 mb-1">
                    <Clock className="w-4 h-4" />
                    <span className="text-xs font-medium">Hours</span>
                  </div>
                  <p className="text-xs text-gray-500">
                    Tue–Sat: 10 AM – 6 PM (closed 1–2 PM)
                    <br />
                    Closed Sunday & Monday
                    <br />
                    By appointment only
                  </p>
                </div>
              </div>
            ) : (
              /* Chat Mode */
              <>
                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50">
                  {displayMessages.map((msg) => (
                    <motion.div
                      key={msg.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                    >
                      <div
                        className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                          msg.sender === "user"
                            ? "bg-[#5B8A8A] text-white rounded-br-md"
                            : "bg-white text-gray-800 rounded-bl-md shadow-sm"
                        }`}
                      >
                        {msg.text}
                      </div>
                    </motion.div>
                  ))}

                  {showTyping && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex justify-start"
                    >
                      <div className="bg-white rounded-2xl rounded-bl-md shadow-sm px-4 py-3">
                        <div className="flex gap-1.5">
                          <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                          <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                          <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                        </div>
                      </div>
                    </motion.div>
                  )}

                  <div ref={messagesEndRef} />
                </div>

                {/* Quick Replies */}
                {displayMessages.length <= 2 && (
                  <div className="px-4 py-2 border-t bg-white">
                    <div className="flex flex-wrap gap-1.5">
                      {QUICK_REPLIES.map((reply) => (
                        <button
                          key={reply}
                          onClick={() => handleQuickReply(reply)}
                          className="text-xs px-3 py-1.5 rounded-full bg-gray-100 text-gray-700 hover:bg-[#5B8A8A] hover:text-white transition-colors font-medium"
                        >
                          {reply}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Input */}
                <div className="p-3 border-t bg-white">
                  <form onSubmit={handleSend} className="flex items-center gap-2">
                    <input
                      type="text"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      aria-label="Type a message"
                      placeholder="Type a message..."
                      className="flex-1 px-4 py-2.5 rounded-full bg-gray-100 text-sm focus:outline-none focus:ring-2 focus:ring-[#5B8A8A]/30"
                    />
                    <button
                      type="submit"
                      disabled={!input.trim() || showTyping}
                      className="w-10 h-10 rounded-full bg-[#5B8A8A] text-white flex items-center justify-center hover:bg-[#4A7272] transition-colors disabled:opacity-50 flex-shrink-0"
                    >
                      <Send className="w-4 h-4" />
                    </button>
                  </form>
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
