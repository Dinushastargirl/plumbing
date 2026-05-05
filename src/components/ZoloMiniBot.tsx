import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, X, Send, User, Bot, AlertCircle } from 'lucide-react';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
}

export default function ZoloMiniBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: "Hi! I'm Zolo. Need a quote or an emergency dispatch? I can help you in 30 seconds."
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    // Simulated response - in a real app, this would call the Gemini API
    setTimeout(() => {
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: getResponse(input)
      };
      setMessages(prev => [...prev, assistantMessage]);
      setIsTyping(false);
    }, 1000);
  };

  const getResponse = (query: string) => {
    const q = query.toLowerCase();
    if (q.includes('emergency') || q.includes('leak') || q.includes('burst')) {
      return "I understand this is an emergency. For immediate dispatch, please call (800) 555-0123. A licensed plumber can be at your door in 60 minutes or less.";
    }
    if (q.includes('quote') || q.includes('price') || q.includes('cost')) {
      return "I can help with that! Most service calls start with a diagnostic fee, but we're currently offering $50 off your first visit. Would you like to schedule a free estimate?";
    }
    return "Thanks for reaching out! RapidPipe is here for all your plumbing needs. We have experts available now in your area. Would you like to book a call or speak with an agent?";
  };

  return (
    <div className="fixed bottom-24 right-6 z-50 md:bottom-6">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="mb-4 h-[450px] w-[320px] overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-2xl md:w-[380px]"
          >
            {/* Header */}
            <div className="flex items-center justify-between bg-[#0047AB] p-4 text-white">
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20">
                  <Bot size={20} />
                </div>
                <div>
                  <h3 className="text-sm font-semibold">Zolo Assistant</h3>
                  <p className="text-[10px] text-blue-100">Ready to help 24/7</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="rounded-full p-1 hover:bg-white/10"
              >
                <X size={18} />
              </button>
            </div>

            {/* Messages */}
            <div
              ref={scrollRef}
              className="h-[320px] space-y-4 overflow-y-auto p-4 text-sm"
            >
              {messages.map(msg => (
                <div
                  key={msg.id}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                      msg.role === 'user'
                        ? 'bg-[#0047AB] text-white'
                        : 'bg-gray-100 text-gray-800'
                    }`}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="flex gap-1 rounded-2xl bg-gray-100 px-4 py-2">
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ repeat: Infinity, duration: 0.6 }}
                      className="h-1.5 w-1.5 rounded-full bg-gray-400"
                    />
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ repeat: Infinity, duration: 0.6, delay: 0.2 }}
                      className="h-1.5 w-1.5 rounded-full bg-gray-400"
                    />
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ repeat: Infinity, duration: 0.6, delay: 0.4 }}
                      className="h-1.5 w-1.5 rounded-full bg-gray-400"
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="border-t p-4">
              <form
                onSubmit={e => {
                  e.preventDefault();
                  handleSend();
                }}
                className="flex gap-2"
              >
                <input
                  type="text"
                  value={input}
                  onChange={e => setInput(e.target.value)}
                  placeholder="Type a message..."
                  className="flex-1 rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-[#0047AB] focus:outline-none"
                />
                <button
                  type="submit"
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#0047AB] text-white transition-colors hover:bg-blue-700"
                >
                  <Send size={16} />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#0047AB] text-white shadow-lg focus:outline-none"
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </motion.button>
    </div>
  );
}
