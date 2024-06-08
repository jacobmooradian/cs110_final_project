import React, { useState, useEffect } from 'react';

function Home() {
  const [chatrooms, setChatrooms] = useState([]);
  const [roomName, setRoomName] = useState('');

  useEffect(() => {
    fetch('http://localhost:8080/api/chatrooms')
      .then(response => response.json())
      .then(data => setChatrooms(data));
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch('http://localhost:8080/api/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ roomName })
    })
    .then(response => response.json())
    .then(data => {
      if (data.exists) {
        alert('A room with this name already exists.');
      } else {
        window.location.href = `/${data.identifier}`;
      }
    });
  };

  return (
    <div className="container">
      <h1>Welcome to Chatroom Application</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={roomName}
          onChange={(e) => setRoomName(e.target.value)}
          placeholder="Enter Room Name (optional)"
        />
        <button type="submit">Create Chatroom</button>
      </form>
      <h2>Existing Chatrooms</h2>
      <ul>
        {chatrooms.map(chatroom => (
          <li key={chatroom.identifier}>
            <a href={`/${chatroom.identifier}`}>{chatroom.name} (ID: {chatroom.identifier})</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
