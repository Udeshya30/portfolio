// import React, { useState, useRef } from "react";
// import { Send, X, MessageCircle } from "lucide-react";
// import "../styles/ChatBotWidget.scss";

// const ChatBotWidget = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [query, setQuery] = useState("");
//   const [messages, setMessages] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const chatEndRef = useRef(null);

//   const handleToggle = () => setIsOpen(!isOpen);

//   const sendMessage = async () => {
//     if (!query.trim()) return;

//     const userMessage = { type: "user", text: query };
//     setMessages((prev) => [...prev, userMessage]);
//     setQuery("");
//     setLoading(true);

//     const botMessage = { type: "bot", text: "" };
//     setMessages((prev) => [...prev, botMessage]);

//     try {
//       const apiBase = import.meta.env.VITE_CHATBOT_API_URL;
//       const res = await fetch(`${apiBase}/ask-stream`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ query }),
//       });

//       const reader = res.body.getReader();
//       const decoder = new TextDecoder("utf-8");
//       let botText = "";

//       while (true) {
//         const { value, done } = await reader.read();
//         if (done) break;

//         botText += decoder.decode(value, { stream: true });

//         setMessages((prev) => {
//           const updated = [...prev];
//           updated[updated.length - 1].text = botText;
//           return updated;
//         });

//         chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
//       }
//     } catch (error) {
//       console.error("Chat error:", error);
//       setMessages((prev) => [
//         ...prev,
//         {
//           type: "bot",
//           text:
//             "Oops! Something went wrong. Please try again or contact me at 📧 udeshya.kumar30@email.com.",
//         },
//       ]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleKeyDown = (e) => {
//     if (e.key === "Enter") sendMessage();
//   };

//   return (
//     <div className="chatbot-widget">
//       {isOpen ? (
//         <div className="chatbox">
//           <div className="chatbox-header">
//             <span>🟢 Chat with AI</span>
//             <button className="close-btn" onClick={handleToggle}>
//               <X size={18} />
//             </button>
//           </div>
//           <div className="chatbox-body">
//             {messages.map((msg, idx) => (
//               <div key={idx} className={`message ${msg.type}`}>
//                 {msg.text}
//               </div>
//             ))}
//             {loading && <div className="bot-typing">AI is thinking...</div>}
//             <div ref={chatEndRef} />
//           </div>
//           <div className="chatbox-input">
//             <input
//               type="text"
//               placeholder="Ask me anything..."
//               value={query}
//               onChange={(e) => setQuery(e.target.value)}
//               onKeyDown={handleKeyDown}
//             />
//             <button onClick={sendMessage}>
//               <Send size={18} />
//             </button>
//           </div>
//         </div>
//       ) : (
//         <button className="chat-toggle-btn" onClick={handleToggle}>
//           <MessageCircle size={26} />
//         </button>
//       )}
//     </div>
//   );
// };

// export default ChatBotWidget;



import React, { useState, useRef } from "react";
import { Send, X, MessageCircle } from "lucide-react";
import "../styles/ChatBotWidget.scss";

const ChatBotWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(true); // 👈 new
  const chatEndRef = useRef(null);

  const handleToggle = () => setIsOpen(!isOpen);

  const sendMessage = async (inputQuery = null) => {
    const finalQuery = inputQuery || query;
    if (!finalQuery.trim()) return;

    // hide suggestions after first interaction
    setShowSuggestions(false);

    const userMessage = { type: "user", text: finalQuery };
    setMessages((prev) => [...prev, userMessage]);
    setQuery("");
    setLoading(true);

    const botMessage = { type: "bot", text: "" };
    setMessages((prev) => [...prev, botMessage]);

    try {
      const apiBase = import.meta.env.VITE_CHATBOT_API_URL;
      const res = await fetch(`${apiBase}/ask-stream`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query: finalQuery }),
      });

      const reader = res.body.getReader();
      const decoder = new TextDecoder("utf-8");
      let botText = "";

      while (true) {
        const { value, done } = await reader.read();
        if (done) break;

        botText += decoder.decode(value, { stream: true });

        setMessages((prev) => {
          const updated = [...prev];
          updated[updated.length - 1].text = botText;
          return updated;
        });

        chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
      }
    } catch (error) {
      console.error("Chat error:", error);
      setMessages((prev) => [
        ...prev,
        {
          type: "bot",
          text:
            "Oops! Something went wrong. Please try again or contact me at 📧 udeshya.kumar30@email.com.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") sendMessage();
  };

  // ✨ template questions for first-time users
  const suggestions = [
    "What kind of AI projects have you worked on?",
    "Can you tell me about your Generative AI experience?",
    "How do you integrate AI into web apps?",
    "What are your key technical skills?",
  ];

  return (
    <div className="chatbot-widget">
      {isOpen ? (
        <div className="chatbox">
          <div className="chatbox-header">
            <span>🟢 Chat with AI</span>
            <button className="close-btn" onClick={handleToggle}>
              <X size={18} />
            </button>
          </div>

          <div className="chatbox-body">
            {/* Show initial suggestions only once */}
            {messages.length === 0 && showSuggestions && (
              <div className="suggestions">
                <p className="intro-text">You can start by asking:</p>
                {suggestions.map((q, idx) => (
                  <button
                    key={idx}
                    className="suggestion-btn"
                    onClick={() => sendMessage(q)}
                  >
                    {q}
                  </button>
                ))}
              </div>
            )}

            {messages.map((msg, idx) => (
              <div key={idx} className={`message ${msg.type}`}>
                {msg.text}
              </div>
            ))}

            {loading && <div className="bot-typing">AI is thinking...</div>}
            <div ref={chatEndRef} />
          </div>

          <div className="chatbox-input">
            <input
              type="text"
              placeholder="Ask me anything..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <button onClick={() => sendMessage()}>
              <Send size={18} />
            </button>
          </div>
        </div>
      ) : (
        <button className="chat-toggle-btn" onClick={handleToggle}>
          <MessageCircle size={26} />
        </button>
      )}
    </div>
  );
};

export default ChatBotWidget;
