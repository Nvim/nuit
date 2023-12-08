import React, { useState } from 'react';
import NavBar from '@/Components/NavBar';
import { Inertia } from '@inertiajs/inertia';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
    const [userInput, setUserInput] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };


    const sendMessage = () => {
        // Ajouter le message de l'utilisateur au tableau des messages
        const newUserMessage = { id: messages.length, text: userInput, sender: 'user' };
        setMessages([...messages, newUserMessage]);

        //Appeler la méthode chatbot du ChatBotController via Inertia
        Inertia.post('/chatbot', { message: userInput }, {
            onSuccess: (response) => {
               // Ajouter la réponse du chatbot au tableau des messages
                const newBotMessage = { id: messages.length + 1, text: response.data, sender: 'bot' };
                setMessages(currentMessages => [...currentMessages, newBotMessage]);
                console.log(response.data);
            },
            onError: (errors) => {
                 console.error('Erreur lors de l\'envoi du message au chatbot:', errors);
            }
        });

        // Effacer le champ de saisie
        setUserInput('');
    };

  return (
    <div >
      <NavBar />
      <div
        style={{
            backgroundColor: '#a8d5ba',
        }}
      >
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
            backgroundColor: 'white',
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

            backgroundColor: '#f9f1a5',
            padding: '8px',
            borderRadius: '5px',
            marginBottom: '5px',
            textAlign: 'left',
            wordWrap: 'break-word',
            display: 'inline-block',
            maxWidth: '80%',
            float: 'right',
            clear: 'both',
          }}
        >
          {message.text}
        </div>
          ))}
        </div>
        {/* <form
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
        </form> */}
            <input type="text" value={userInput} onChange={e => setUserInput(e.target.value)} />
            <button onClick={sendMessage}>Envoyer</button>
      </div>
      </div>
    </div>
  );
};

export default Chat;
