// Text input + send button
// Enter key also sends

import { useState } from "react";

function InputBar({ onSend }) {
  const [value, setValue] = useState("");

  function handleSend() {
    if (!value.trim()) return;
    onSend(value);       // pass text up to useChat
    setValue("");        // clear input
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") handleSend();
  }

  return (
    <div className="input-bar">
      <input
        type="text"
        className="input-field"
        placeholder="Type a message"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button className="send-btn" onClick={handleSend}>
        ➤
      </button>
    </div>
  );
}

export default InputBar;