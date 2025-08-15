
export const metadata = {
  title: 'WhatsApp Web Clone',
  description: 'A WhatsApp-like chat UI (frontend) connected to Node/Express',
};

import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900">{children}</body>
    </html>
  );
}
