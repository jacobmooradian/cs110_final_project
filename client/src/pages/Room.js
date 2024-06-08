import React, { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';

function Room() {
  const { roomIdentifier } = useParams();
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');

  const fetchMessages = useCallback(() => {
    fetch(`http://localhost:8080/api/${roomIdentifier}/messages`)
      .then(response => response.json())
      .then(setMessages)
      .catch(err => console.error("Failed to fetch messages:", err));
  }, [roomIdentifier]); 

  useEffect(() => {
    fetchMessages();
    const interval = setInterval(fetchMessages, 3000);
    return () => clearInterval(interval);
  }, [fetchMessages]); 

  const handleMessageSubmit = (event) => {
    event.preventDefault();
    fetch(`http://localhost:8080/api/${roomIdentifier}/messages`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ nickname: 'Username', message })
    }).then(() => {
      setMessage('');
      fetchMessages();
    }).catch(err => console.error("Failed to post message:", err));
  };

  return (
    <div className="container">
      <h1>Chatroom: {roomIdentifier}</h1>
      <div id="messages">
        {messages.map((msg, index) => (
          <div key={index}>
            <div className="message-header">
              <strong>{msg.nickname}</strong>
              <em>{new Date(msg.createdAt).toLocaleString()}</em>
            </div>
            <div className="message-body">{msg.body}</div>
          </div>
        ))}
      </div>
      <form onSubmit={handleMessageSubmit}>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Enter Message"
          required
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default Room;
