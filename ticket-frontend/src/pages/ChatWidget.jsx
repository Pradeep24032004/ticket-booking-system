import React, { useState } from 'react';

const ChatWidget = () => {
  const [messages, setMessages] = useState([]);

  const fetchMessages = async () => {
    // Logic to fetch messages from the server
  };

  return (
    <div className="chat-widget">
      <h3>Chat with Support</h3>
      <div className="messages">
        {messages.map((msg, index) => (
          <div key={index}>
            <p>{msg.text}</p>
          </div>
        ))}
      </div>
      <button onClick={fetchMessages}>Refresh</button>
    </div>
  );
};

export default ChatWidget;
