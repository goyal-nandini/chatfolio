// Layout only. No logic here — all logic is in useChat.

import { useChat } from "./hooks/useChat";
import Header from "./components/Header";
import ChatArea from "./components/ChatArea";
import QuickReplies from "./components/QuickReplies";
import InputBar from "./components/InputBar";

function App() {
  const {
    messages,
    chips,
    headerStatus,
    isTyping,
    bottomRef,
    sendMessage,
  } = useChat();

  return (
    <div className="app">
      <div className="chat-window">
        <Header status={headerStatus} />
        <ChatArea
          messages={messages}
          isTyping={isTyping}
          bottomRef={bottomRef}
        />
        <div className="bottom-bar">
          <QuickReplies chips={chips} onChipClick={sendMessage} />
          <InputBar onSend={sendMessage} />
        </div>
      </div>
    </div>
  );
}

export default App;