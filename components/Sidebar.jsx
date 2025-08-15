'use client';

import { useEffect, useState } from 'react';

export default function Sidebar({ onSelectUser }) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/users`;
    fetch(url)
      .then(res => res.json())
      .then(setUsers)
      .catch(err => console.error('Failed to fetch users', err));
  }, []);

  return (
    <div className="w-80 border-r border-gray-200 h-full overflow-y-auto bg-white p-4">
      <h2 className="text-lg font-bold mb-4">Chats</h2>
      {users.map(u => (
        <div
          key={u._id}
          className="p-2 mb-2 cursor-pointer hover:bg-gray-100 rounded"
          onClick={() => onSelectUser(u._id)}
        >
          <div className="font-medium">{u.name || u._id}</div>
          <div className="text-xs text-gray-500">{u._id}</div>
        </div>
      ))}
      {users.length === 0 && (
        <div className="text-sm text-gray-500">No users yet. Make sure your backend has /api/users.</div>
      )}
    </div>
  );
}
