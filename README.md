# 📱 WhatsApp Web Clone

A full-stack WhatsApp Web Clone built using **Next.js**, **Tailwind CSS**, **Node.js**, **Express**, and **MongoDB Atlas**.  
This app mimics basic real-time messaging features and renders a WhatsApp-like UI.

---

## 🚀 Features

- Receive and process incoming webhook messages
- Store messages in MongoDB
- Frontend chat interface styled like WhatsApp Web
- Messages are grouped by contact and rendered in threads
- Dynamic routing with Next.js 13 App Router

---

## 🧰 Tech Stack

### Frontend
- [Next.js 13+ (App Router)](https://nextjs.org/docs/app)
- [Tailwind CSS](https://tailwindcss.com/)
- Axios for API communication

### Backend
- Node.js & Express.js
- MongoDB with Mongoose
- dotenv, cors

---

## 🗂️ Folder Structure

whatsapp-web-clone/
├── backend/
│ ├── server.js
│ ├── config/
│ │ └── db.js
│ ├── routes/
│ │ ├── messageRoutes.js
│ │ └── userRoutes.js
│ ├── controllers/
│ └── scripts/
│ └── processPayloads.js
├── frontend/
│ ├── app/
│ │ ├── layout.jsx
│ │ └── page.jsx
│ │ └── chat/
│ │ └── [userId]/page.jsx
│ ├── components/
│ │ ├── Sidebar.jsx
│ │ ├── ChatWindow.jsx
│ │ ├── MessageInput.jsx
│ │ └── MessageBubble.jsx
│ ├── postcss.config.json
│ └── package.json


## ⚙️ Setup Instructions

### 1. Clone the Repo


git clone https://github.com/yourusername/whatsapp-web-clone.git
cd whatsapp-web-clone
2. Backend Setup
   cd backend
   npm install
   🔐 Create .env in backend/
   PORT=5000
   MONGO_URI=your_mongo_connection_string
   ✅ Start Backend Server
   node server.js
   Runs at: http://localhost:5000

3. Frontend Setup
   cd ../frontend
   npm install
   🛠️ Tailwind Setup Check
   Ensure globals.css has:

]
### 🔐 Create .env.local in frontend/

NEXT_PUBLIC_API_BASE_URL=http://localhost:5000/api
  ✅ Start Frontend Server
   npm run dev
   Runs at: http://localhost:3000

### 🧪 Webhook Testing
To test the webhook:
  POST http://localhost:5000/webhook
  Content-Type: application/json

  {
    "contacts": [{ "wa_id": "user123", "profile": { "name": "John" } }],
    "messages": [{ "from": "user123", "text": { "body": "Hello!" } }]
  }

### 🔍 Demo Screens
 Sidebar shows contacts with latest message
 Clicking on a contact opens /app/chat/[userId]
 Messages are shown in bubbles aligned left/right
 New messages can be sent from input

## 🚀 Deployment
 Backend: Render
 Frontend: Vercel

### Public Deployment Links

- Frontend (submit this): [https://whatsapp-frontend-lilac.vercel.app](https://whatsapp-frontend-lilac.vercel.app)
- Backend API: [https://whatsapp-backend-do9l.onrender.com](https://whatsapp-backend-do9l.onrender.com)

## 📌 Author
  Built by Manasvi Shewale for RapidQuest Full Stack Developer Task
  Submission Date: 15 August 2025

