// The 3 animated bouncing dots — shown while bot is "thinking"

function TypingIndicator() {
  return (
    // <div className="bubble bot typing-bubble">
    //   <span className="dot" />
    //   <span className="dot" />
    //   <span className="dot" />
    // </div>
    <div className="bubble-wrapper bot-wrapper">
      <div className="bubble bot-bubble typing-bubble">
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>
    </div>
  );
}

export default TypingIndicator;