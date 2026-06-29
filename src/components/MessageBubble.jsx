// Renders ONE message — user (right, green) or bot (left, gray)

// ── Tick marks for user messages ──
function Ticks({ status }) {
  if (status === "sent") return <span className="ticks">✓</span>;
  if (status === "delivered") return <span className="ticks">✓✓</span>;
  if (status === "read") return <span className="ticks blue">✓✓</span>;
  return null;
}

// ── Bold text parser: *word* → <strong>word</strong> ──
function parseText(text) {
  // Split on *bold* patterns, render bold parts as <strong>
  const parts = text.split(/\*([^*]+)\*/g);
  return parts.map((part, i) =>
    i % 2 === 1 ? <strong key={i}>{part}</strong> : part
  );
}

// ── Document bubble (when bot sends a PDF) ──
function DocumentBubble({ file }) {
  return (
    <div className="document-bubble">
      <div className="doc-icon">📄</div>
      <div className="doc-info">
        <p className="doc-name">{file.name}</p>
        <p className="doc-size">{file.size}</p>
      </div>
      <a href={file.url} download className="doc-download"  target="_blank">🡇</a>
    </div>
  );
}

// ── Main component ──
function MessageBubble({ message }) {
  const isUser = message.from === "user";

  return (
    <div className={`bubble-wrapper ${isUser ? "user-wrapper" : "bot-wrapper"}`}>
      <div className={`bubble ${isUser ? "user-bubble" : "bot-bubble"}`}>

        {/* Regular text — with *bold* support and line breaks */}
        <p className="bubble-text">
          {message.text.split("\n").map((line, i) => (
            <span key={i}>
              {parseText(line)}
              <br />
            </span>
          ))}
        </p>

        {/* Document bubble — only for resume */}
        {message.type === "document" && message.file && (
          <DocumentBubble file={message.file} />
        )}

        {/* Link buttons — for project demos/github */}
        {message.links && message.links.length > 0 && (
          <div className="link-buttons">
            {message.links.map((link, i) => (
              <a
                key={i}
                href={link.url}
                target="_blank"
                rel="noreferrer"
                className="link-btn"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}

        {message.contacts && message.contacts.length > 0 && (
          <div className="contact-links">
            {message.contacts.map((contact, i) => (
              <a
                key={i}
                href={contact.url}
                target="_blank"
                rel="noreferrer"
                className="contact-link"
              >
                <span>{contact.icon}</span>
                <span>{contact.text}</span>
              </a>
            ))}
          </div>
        )}

        {/* Timestamp + ticks */}
        <div className="bubble-meta">
          <span className="timestamp">{message.timestamp}</span>
          {isUser && <Ticks status={message.status} />}
        </div>

      </div>
    </div>
  );
}

export default MessageBubble;