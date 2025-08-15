'use client';

import { useState } from 'react';

export default function MessageInput({ onSend }) {
  const [text, setText] = useState('');

  const submit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    onSend(text.trim());
    setText('');
  };

  return (
    <form onSubmit={submit} className="p-3 border-t bg-white flex items-center gap-2">
  <input
    className="flex-1 border px-4 py-2 rounded-full bg-gray-100 focus:outline-none"
    placeholder="Type a message..."
    value={text}
    onChange={e => setText(e.target.value)}
  />
  <button className="bg-green-500 p-3 rounded-full text-white">
    ➤
  </button>
</form>
  );
}
