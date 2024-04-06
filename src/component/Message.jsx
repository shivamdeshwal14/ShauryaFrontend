import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
const Message = () => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');

  const handleMessageChange = (e) => {
    setInputMessage(e.target.value);
  };

  const sendMessage = () => {
    if (inputMessage.trim() !== '') {
      const newMessage = {
        id: messages.length + 1,
        text: inputMessage,
        timestamp: new Date().toLocaleTimeString(),
        // You can add more fields like sender, receiver, etc. as needed
      };

      setMessages([...messages, newMessage]);
      setInputMessage('');
    }
  };

  return (
    <>
    <Navbar/>
    <h2 style={{margin:'5px',padding:'5px'}}>Battlefront Exchange</h2>
   
    <div className="message-app msg1">
      <div className="message-window ">
        {messages.map((message) => (
          <div key={message.id} className="message msg2">
            <div className="message-text">{message.text}</div>
            <div className="message-timestamp">{message.timestamp}</div>
          </div>
        ))}
      </div>
      <div className="message-input">
        <input className='msg2 btn5'
          type="text"
          value={inputMessage}
          onChange={handleMessageChange}
          placeholder="Type your message here..."
        />
        <button className='btn5'style={{borderRadius:'7px',width:'100px'}} onClick={sendMessage}>Send</button>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Message;
