import React, { useState } from 'react';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim() !== '') {
      const newMessage = {
        id: messages.length + 1,
        text: inputValue,
      };
      setMessages([...messages, newMessage]);
      setInputValue('');
    }
  };

  return (
    <div
      style={{
        fontFamily: 'Arial, sans-serif',
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        minHeight: '100vh',
        justifyContent: 'center',
      }}
    >
      <div
        style={{
          height: '300px',
          width: '60%', // Largeur du chat
          border: '1px solid #ccc',
          padding: '10px',
          overflowY: 'auto',
          marginBottom: '20px',
        }}
      >
        {messages.map((message) => (
          <div
            key={message.id}
            style={{
              backgroundColor: '#f2f2f2',
              padding: '8px',
              borderRadius: '5px',
              marginBottom: '5px',
            }}
          >
            {message.text}
          </div>
        ))}
      </div>
      <form
        onSubmit={handleSubmit}
        style={{
          width: '60%', // Largeur du chat
          display: 'flex',
        }}
      >
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Type a message..."
          style={{
            padding: '8px',
            marginRight: '10px',
            flex: '1',
            borderRadius: '5px',
            border: '1px solid #ccc',
          }}
        />
        <button
          type="submit"
          style={{
            padding: '8px 12px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default Chat;
