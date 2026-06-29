// the brain

import { useState, useEffect, useRef } from "react";
import { responses, keywordMap } from "../data/responses";

// 
// Helper: get current time as "10:35 AM"
// 
function getCurrentTime() {
  return new Date().toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });
}

// 
// Helper: look up response by what user said
// 
function getResponse(input) {
  const cleaned = input.trim().toLowerCase();
  const key = keywordMap[cleaned];         // find the key
  return responses[key] || responses["default"]; // fallback to default
}

// 
// Helper: create a user message object
// 
function makeUserMessage(text) {
  return {
    id: Date.now(),
    from: "user",
    type: "text",
    text,
    status: "sent",       // sent → delivered → read
    timestamp: getCurrentTime(),
  };
}

// 
// Helper: create a bot message object
// 
function makeBotMessage(response) {
  return {
    id: Date.now() + 1,
    from: "bot",
    type: response.file ? "document" : "text",
    text: response.text,
    file: response.file || null,
    links: response.links || [],
    timestamp: getCurrentTime(),
    contacts: response.contacts || [],
  };
}

// 
// THE MAIN HOOK
// 
export function useChat() {
  const [messages, setMessages] = useState([]);
  const [chips, setChips] = useState([]);
  const [headerStatus, setHeaderStatus] = useState(`last seen today at ${getCurrentTime()}`);
  const [isTyping, setIsTyping] = useState(false);

  // This ref is used by ChatArea to auto-scroll to bottom
  const bottomRef = useRef(null);

  //  Auto scroll whenever messages or typing changes 
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  //  Send intro message automatically on page load 
  useEffect(() => {
    const timer = setTimeout(() => {
      const intro = responses["intro"];
      const botMsg = makeBotMessage(intro);
      setMessages([botMsg]);
      setChips(intro.chips);
    }, 1000);

    return () => clearTimeout(timer); // cleanup if component unmounts
  }, []);

  // 
  // THE 6-STEP SEQUENCE
  // Called when user sends a message or clicks a chip
  // 
  function sendMessage(text) {
    if (!text.trim()) return; // ignore empty sends

    const userMsg = makeUserMessage(text);
    const response = getResponse(text);

    //  Step 1: Add user bubble with "sent" (single grey tick) 
    setMessages((prev) => [...prev, userMsg]);
    setChips([]); // hide chips while waiting for response

    //  Step 2: Double grey tick (delivered) 
    setTimeout(() => {
      setMessages((prev) =>
        prev.map((m) => (m.id === userMsg.id ? { ...m, status: "delivered" } : m))
      );
    }, 500);

    //  Step 3: Header → "online" 
    setTimeout(() => {
      setHeaderStatus("online");
    }, 800);

    //  Step 4: Typing indicator appears 
    setTimeout(() => {
      setIsTyping(true);
    }, 1200);

    //  Step 5: Typing disappears, bot message appears 
    setTimeout(() => {
      setIsTyping(false);
      const botMsg = makeBotMessage(response);
      setMessages((prev) => [...prev, botMsg]);
      setChips(response.chips || []);
    }, 2500);

    //  Step 6: User ticks turn blue (read) 
    setTimeout(() => {
      setMessages((prev) =>
        prev.map((m) => (m.id === userMsg.id ? { ...m, status: "read" } : m))
      );
    }, 3000);

    //  Step 7: Header back to "last seen" 
    setTimeout(() => {
      setHeaderStatus(`last seen today at ${getCurrentTime()}`);
    }, 3500);
  }

  // Return everything App.jsx needs
  return {
    messages,
    chips,
    headerStatus,
    isTyping,
    bottomRef,
    sendMessage,
  };
}