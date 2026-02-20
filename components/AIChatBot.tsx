
import React, { useState, useRef, useEffect } from 'react';
import { getSchoolAssistantResponse } from '../services/geminiService';

const AIChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ text: string, sender: 'user' | 'bot' }[]>([
    { text: "Hello! I'm the New Holy Cross assistant. How can I help you today?", sender: 'bot' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!inputValue.trim()) return;

    const userMessage = inputValue;
    setMessages(prev => [...prev, { text: userMessage, sender: 'user' }]);
    setInputValue('');
    setIsLoading(true);

    const botResponse = await getSchoolAssistantResponse(userMessage);
    setMessages(prev => [...prev, { text: botResponse || "I'm sorry, I encountered an error.", sender: 'bot' }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[60]">
      {isOpen ? (
        <div className="bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.2)] w-[calc(100vw-2rem)] sm:w-96 flex flex-col overflow-hidden border border-gray-100 animate-in slide-in-from-bottom-10 zoom-in-95 duration-300">
          <div className="bg-indigo-600 p-4 flex justify-between items-center text-white">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center animate-pulse">
                <i className="fas fa-robot"></i>
              </div>
              <span className="font-bold tracking-tight">School Assistant</span>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/10 transition-all tap-scale"
            >
              <i className="fas fa-times"></i>
            </button>
          </div>
          
          <div className="h-80 sm:h-96 overflow-y-auto p-4 space-y-4 bg-gray-50/50">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'} animate-in slide-in-from-bottom-2 duration-300`}>
                <div className={`max-w-[85%] p-3 px-4 rounded-2xl text-[13px] sm:text-sm leading-relaxed ${
                  msg.sender === 'user' 
                    ? 'bg-indigo-600 text-white rounded-tr-none shadow-md shadow-indigo-100' 
                    : 'bg-white text-gray-800 shadow-sm border border-gray-100 rounded-tl-none'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start animate-pulse">
                <div className="bg-white p-3 px-4 rounded-2xl rounded-tl-none border border-gray-100 shadow-sm">
                  <div className="flex space-x-1.5">
                    <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-bounce"></div>
                    <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-bounce delay-75"></div>
                    <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-bounce delay-150"></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="p-4 border-t bg-white">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Type your question..."
                className="flex-grow p-3 text-[14px] sm:text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-gray-50/50 transition-all"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading}
                className="bg-indigo-600 text-white w-12 h-12 flex-shrink-0 rounded-xl hover:bg-indigo-700 transition-all tap-scale shadow-lg shadow-indigo-100 flex items-center justify-center disabled:opacity-50"
              >
                <i className="fas fa-paper-plane"></i>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-indigo-600 text-white w-14 h-14 sm:w-16 sm:h-16 rounded-full shadow-2xl hover:bg-indigo-700 transition-all hover:scale-110 tap-scale flex items-center justify-center group"
          aria-label="Open Chatbot"
        >
          <i className="fas fa-comment-dots text-2xl group-hover:rotate-12 transition-transform"></i>
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full border-2 border-white animate-ping"></span>
        </button>
      )}
    </div>
  );
};

export default AIChatBot;
