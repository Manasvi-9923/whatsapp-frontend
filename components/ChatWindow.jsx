'use client';
import { useEffect, useState } from 'react';
import MessageBubble from './MessageBubble';
import MessageInput from './MessageInput';
import { fetchMessages, sendMessage } from '@lib/api';

export default function ChatWindow({ userId }) {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (!userId) return;
    fetchMessages(userId)
      .then(setMessages)
      .catch(console.error);
  }, [userId]);

  const handleSend = async (text) => {
    try {
      const created = await sendMessage({ wa_id: userId, text });
      setMessages(prev => [...prev, created]);
    } catch (error) {
      console.error('Failed to send message', error);
    }
  };

  return (
    <div className="flex-1 flex flex-col bg-[url('/chat-bg.png')] bg-cover">
      <div className="flex items-center gap-3 p-3 border-b bg-green-600 text-white">
        <div className="w-8 h-8 rounded-full bg-white text-green-700 flex items-center justify-center font-bold">
          {userId ? userId[0].toUpperCase() : '?'}
        </div>
        <div className="font-semibold">{userId}</div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {messages.map((msg, index) => (
          <MessageBubble key={msg.meta_msg_id || index} message={msg} />
        ))}
      </div>

      <MessageInput onSend={handleSend} />
    </div>
  );
}