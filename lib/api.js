// frontend/lib/api.js
const BASE_URL = process.env.NEXT_PUBLIC_API_BASE || '';

export const fetchMessages = (userId) => 
  fetch(`${BASE_URL}/api/messages/${userId}`).then(res => res.json());

export const sendMessage = (message) => 
  fetch(`${BASE_URL}/api/messages/send`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(message)
  }).then(res => res.json());

export const fetchUsers = () => 
  fetch(`${BASE_URL}/api/users`).then(res => res.json());