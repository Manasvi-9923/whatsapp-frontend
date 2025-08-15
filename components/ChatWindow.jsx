'use client';

import { useEffect, useState } from 'react';
import MessageBubble from './MessageBubble';
import MessageInput from './MessageInput';

export default function ChatWindow({ userId }) {
  const [messages, setMessages] = useState([]);
  const base = process.env.NEXT_PUBLIC_BACKEND_URL;

  // Load messages for selected user
  useEffect(() => {
    if (!userId) return;
    fetch(`${base}/api/messages/${userId}`)
      .then(res => res.json())
      .then(setMessages)
      .catch(console.error);
  }, [userId, base]);

  // Send message (store-only)
  const handleSend = async (text) => {
    const res = await fetch(`${base}/api/messages/send`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ wa_id: userId, text }),
    });
    if (!res.ok) {
      console.error('Failed to send message');
      return;
    }
    const created = await res.json();
    setMessages(prev => [...prev, created]); // optimistic append
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
