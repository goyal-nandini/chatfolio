// Renders the full message list + typing indicator
// bottomRef is passed in so it can auto-scroll

import MessageBubble from "./MessageBubble";
import TypingIndicator from "./TypingIndicator";

function ChatArea({ messages, isTyping, bottomRef }) {
  return (
    <div className="chat-area">
      {messages.map((msg) => (
        <MessageBubble key={msg.id} message={msg} />
      ))}

      {/* Show typing dots while bot is responding */}
      {isTyping && <TypingIndicator />}

      {/* Invisible div at the bottom — scrolled into view on new messages */}
      <div ref={bottomRef} />
    </div>
  );
}

export default ChatArea;