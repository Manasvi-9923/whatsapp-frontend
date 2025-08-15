'use client';

import { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import ChatWindow from '@/components/ChatWindow';

export default function Home() {
  const [selectedUserId, setSelectedUserId] = useState(null);

  return (
    <div className="flex h-screen">
      <Sidebar onSelectUser={setSelectedUserId} />
      {selectedUserId ? (
        <ChatWindow userId={selectedUserId} />
      ) : (
        <div className="flex-1 flex items-center justify-center text-gray-500">
          Select a conversation
        </div>
      )}
    </div>
  );
}
