'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

interface Message {
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: 'Hello! I\'m HIKARU AI, powered by Grok. How can I assist you today?',
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      role: 'user',
      content: input.trim(),
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/grok', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: [
            ...messages.map(m => ({ role: m.role, content: m.content })),
            { role: 'user', content: userMessage.content },
          ],
        }),
      });

      const data = await response.json();

      if (data.success) {
        const assistantMessage: Message = {
          role: 'assistant',
          content: data.response,
          timestamp: new Date(),
        };
        setMessages(prev => [...prev, assistantMessage]);
      } else {
        throw new Error(data.error || 'Failed to get response');
      }
    } catch (error) {
      console.error('Chat error:', error);
      const errorMessage: Message = {
        role: 'assistant',
        content: 'Sorry, I encountered an error. Please try again.',
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-bs-black">
      {/* Header */}
      <header className="border-b-2 border-bs-cyan bg-bs-black/90 backdrop-blur-sm sticky top-0 z-50">
        <div className="container-custom py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold text-bs-cyan hover:text-glow-cyan transition-all">
              HIKARU<span className="text-bs-green">_AI</span>
            </Link>
            <nav className="flex gap-4">
              <Link 
                href="/music" 
                className="px-4 py-2 border border-bs-green rounded hover:bg-bs-green hover:text-bs-black transition-all"
              >
                Music
              </Link>
              <Link 
                href="/" 
                className="px-4 py-2 border border-bs-cyan rounded hover:bg-bs-cyan hover:text-bs-black transition-all"
              >
                Home
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Chat Container */}
      <main className="flex-1 container-custom py-8 flex flex-col">
        <div className="mb-4">
          <h1 className="text-3xl font-bold text-bs-cyan mb-2">
            AI CHAT INTERFACE
          </h1>
          <p className="text-bs-gray">
            Powered by <span className="text-bs-cyan">Grok AI</span> (xAI)
          </p>
        </div>

        {/* Messages Area */}
        <div className="flex-1 border-2 border-bs-cyan rounded-lg bg-bs-black/50 backdrop-blur-sm p-4 mb-4 overflow-y-auto max-h-[600px]">
          <div className="space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-lg p-4 ${
                    message.role === 'user'
                      ? 'bg-bs-cyan/20 border border-bs-cyan'
                      : 'bg-bs-green/20 border border-bs-green'
                  }`}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`text-sm font-bold ${
                      message.role === 'user' ? 'text-bs-cyan' : 'text-bs-green'
                    }`}>
                      {message.role === 'user' ? 'YOU' : 'HIKARU AI'}
                    </span>
                    <span className="text-xs text-bs-gray">
                      {message.timestamp.toLocaleTimeString()}
                    </span>
                  </div>
                  <p className="text-bs-white whitespace-pre-wrap break-words">
                    {message.content}
                  </p>
                </div>
              </div>
            ))}
            
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-bs-green/20 border border-bs-green rounded-lg p-4">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold text-bs-green">HIKARU AI</span>
                    <span className="text-bs-green">is typing</span>
                    <span className="loading-dots text-bs-green"></span>
                  </div>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>
        </div>

        {/* Input Area */}
        <form onSubmit={handleSubmit} className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            disabled={isLoading}
            className="flex-1 bg-bs-black border-2 border-bs-cyan rounded-lg px-4 py-3 text-bs-white placeholder-bs-gray focus:outline-none focus:border-bs-green focus:shadow-neon-cyan transition-all disabled:opacity-50"
          />
          <button
            type="submit"
            disabled={isLoading || !input.trim()}
            className="px-6 py-3 bg-bs-cyan text-bs-black font-bold rounded-lg hover:bg-bs-green hover:shadow-neon-cyan transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? 'SENDING...' : 'SEND'}
          </button>
        </form>

        {/* Tips */}
        <div className="mt-4 text-center text-sm text-bs-gray">
          <p>💡 Tip: Ask me anything! I can help with coding, creative writing, analysis, and more.</p>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t-2 border-bs-cyan bg-bs-black/90 backdrop-blur-sm py-4">
        <div className="container-custom text-center text-sm text-bs-gray">
          <p>Powered by Grok AI (xAI) • HIKARU AI © 2024</p>
        </div>
      </footer>
    </div>
  );
}
