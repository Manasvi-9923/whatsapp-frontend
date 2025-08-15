export default function MessageBubble({ message }) {
  const isOut = message.direction === 'out';

  return (
    <div className={`flex ${isOut ? 'justify-end' : 'justify-start'}`}>
      <div className={`relative max-w-xs px-4 py-2 rounded-2xl shadow 
        ${isOut ? 'bg-green-200 rounded-br-none' : 'bg-gray-200 rounded-bl-none'}`}>
        
        <div className="text-sm">{message.text}</div>
        <div className="text-[10px] text-gray-500 mt-1 text-right">
          {message.timestamp ? new Date(message.timestamp).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}) : ''}
          {isOut && message.status && ` • ${message.status}`}
        </div>
      </div>
    </div>
  );
}
