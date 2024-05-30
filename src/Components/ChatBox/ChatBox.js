import React, { useState } from 'react';
import './styles.scss';

const ChatBox = ({ onSearch, greeting }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [conversation, setConversation] = useState([]);
  const [isActive, setActive] = useState(true);

  const handleSearch = () => {
    if (searchTerm.trim() !== '') {
      onSearch(searchTerm);
      setConversation([...conversation, searchTerm]);
      setSearchTerm('');
    }
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const toggleClass = () => {
    setActive(!isActive);
  };

  return (
    <>
      <div className={isActive ? 'chat-popup -open' : 'chat-popup -close'}  >

        <div className='form-container'>
          <p>Olá, eu sou o Mayonesio, como posso ajuda-lo ?</p>
          {conversation.map((message, index) => (
            <p key={index}>{message}</p>
          ))}
          {greeting && <p>{greeting}</p>}
          <div className='form-actions'>
            <input
              type="text"
              placeholder="Digite o que você procura"
              value={searchTerm}
              onChange={handleChange}
              className='chatbox-input'
            />
            <button onClick={handleSearch} className="submit-button">↑</button>
          </div>
        </div>
      </div>
      <button onClick={toggleClass} className='chat-button'>Clique aqui</button>
    </>
  );
};


export default ChatBox;
