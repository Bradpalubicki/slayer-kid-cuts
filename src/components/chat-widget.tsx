"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MessageCircle,
  X,
  Send,
  Phone,
  MessageSquare,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

const quickReplies = [
  "Book an appointment",
  "What are your hours?",
  "Sensory accommodations?",
  "Pricing info",
  "Talk to someone",
];

const botResponses: Record<string, string> = {
  "book an appointment":
    "I'd love to help you book! Please text or call Carla at (702) 917-2350 to schedule your appointment.",
  "what are your hours?":
    "We're open Tuesday through Saturday, 10am to 6pm (closed 1-2pm daily). Would you like to schedule a visit?",
  "sensory accommodations":
    "Every appointment starts with an intake questionnaire so we can prepare the space specifically for your child. We have weighted capes, sensory toys, a Nintendo Switch, and flexible seating. Your child sets the pace!",
  "pricing info":
    "Sensory-Friendly Haircut (60 min) is $45, Kids Haircut (30 min) is $30, Buzz Cut/Ends Trimmed is $20, and Bang Trim is $15. Text (702) 917-2350 to book!",
  "talk to someone":
    "Of course! You can text or call Carla directly at (702) 917-2350. Text is preferred as she stays fully present with each child.",
  default:
    "Thanks for reaching out! I'm here to help with appointments, pricing, or any questions about Little Roots Studio. What can I help you with today?",
};

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hi there! Welcome to Little Roots Studio! I'm here to help you with appointments, pricing, or any questions about our sensory-friendly services. How can I help you today?",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [contactMode, setContactMode] = useState<"chat" | "text" | "call">(
    "chat",
  );
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const messageIdRef = useRef(1);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getBotResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    for (const [key, response] of Object.entries(botResponses)) {
      if (lowerMessage.includes(key)) {
        return response;
      }
    }
    return botResponses.default;
  };

  const sendMessage = useCallback((text: string) => {
    if (!text.trim()) return;

    messageIdRef.current += 1;
    const userMessageId = `user-${messageIdRef.current}`;

    const userMessage: Message = {
      id: userMessageId,
      text: text.trim(),
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    setTimeout(() => {
      messageIdRef.current += 1;
      const botMessageId = `bot-${messageIdRef.current}`;

      const botMessage: Message = {
        id: botMessageId,
        text: getBotResponse(text),
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(inputValue);
  };

  return (
    <>
      {/* Chat Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full shadow-2xl flex items-center justify-center gradient-hero ${isOpen ? "hidden" : "flex"}`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
      >
        <MessageCircle className="w-7 h-7 text-white" />
        <span className="absolute -top-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
          <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
        </span>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.9 }}
            className="fixed bottom-6 right-6 z-50 w-[380px] max-w-[calc(100vw-48px)] bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100"
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
                      Online now
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Contact Mode Toggle */}
              <div className="flex gap-2 mt-4">
                {[
                  { mode: "chat" as const, icon: MessageSquare, label: "Chat" },
                  { mode: "text" as const, icon: MessageCircle, label: "Text" },
                  { mode: "call" as const, icon: Phone, label: "Call" },
                ].map(({ mode, icon: Icon, label }) => (
                  <button
                    key={mode}
                    onClick={() => setContactMode(mode)}
                    className={`flex-1 py-2 px-3 rounded-xl text-sm font-medium flex items-center justify-center gap-2 transition-colors ${
                      contactMode === mode
                        ? "bg-white text-[#5B8A8A]"
                        : "bg-white/20 text-white hover:bg-white/30"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    {label}
                  </button>
                ))}
              </div>
            </div>

            {/* Messages Area */}
            <div className="h-80 overflow-y-auto p-4 space-y-4 bg-gray-50">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] p-4 rounded-2xl ${
                      message.sender === "user"
                        ? "bg-[#5B8A8A] text-white rounded-br-md"
                        : "bg-white text-gray-800 rounded-bl-md shadow-sm"
                    }`}
                  >
                    <p className="text-sm">{message.text}</p>
                  </div>
                </motion.div>
              ))}

              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start"
                >
                  <div className="bg-white p-4 rounded-2xl rounded-bl-md shadow-sm">
                    <div className="flex gap-1">
                      <span
                        className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                        style={{ animationDelay: "0ms" }}
                      />
                      <span
                        className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                        style={{ animationDelay: "150ms" }}
                      />
                      <span
                        className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                        style={{ animationDelay: "300ms" }}
                      />
                    </div>
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick Replies */}
            {messages.length < 3 && (
              <div className="p-3 border-t bg-white">
                <div className="flex flex-wrap gap-2">
                  {quickReplies.map((reply) => (
                    <button
                      key={reply}
                      onClick={() => sendMessage(reply)}
                      className="px-3 py-1.5 rounded-full bg-gray-100 text-gray-700 text-xs font-medium hover:bg-[#5B8A8A] hover:text-white transition-colors"
                    >
                      {reply}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input Area */}
            <form onSubmit={handleSubmit} className="p-4 border-t bg-white">
              <div className="flex gap-2">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder={
                    contactMode === "text"
                      ? "Enter your phone for a text..."
                      : contactMode === "call"
                        ? "Enter your phone for a callback..."
                        : "Type your message..."
                  }
                  className="flex-1 rounded-full border-gray-200 focus:border-[#5B8A8A] focus:ring-[#5B8A8A]"
                />
                <Button
                  type="submit"
                  size="icon"
                  className="rounded-full bg-[#5B8A8A] hover:bg-[#4A7272] w-10 h-10 flex-shrink-0"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
