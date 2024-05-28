import React, { useState } from 'react';

const ChatBox = ({ onSearch, greeting }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [conversation, setConversation] = useState([]);

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

  return (
    <div style={styles.messageContainer}>
        <p>Olá, eu sou o Mayonesio, como posso ajuda-lo ?</p>
        {conversation.map((message, index) => (
            <p key={index}>{message}</p>
        ))}
        {greeting && <p>{greeting}</p>}
        <div style={styles.inputWrapper}>
            <input
                type="text"
                placeholder="Digite o que você procura"
                value={searchTerm}
                onChange={handleChange}
                style={styles.input}
            />
            <button onClick={handleSearch} style={styles.button}>Search</button>
        </div>
    </div>
  );
};

const styles = {
  messageContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    maxWidth: '400px',
    margin: '0 auto',
    position: 'fixed',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    transform: 'translate(100%, 10px)',
  },
  inputWrapper: {
    display: 'flex',
    flexDirection: 'row',
  },
  input: {
    width: '100%',
    padding: '10px',
    margin: '10px 0',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  button: {
    padding: '10px 20px',
    borderRadius: '5px',
    border: 'none',
    backgroundColor: '#007bff',
    color: '#fff',
    cursor: 'pointer',
  },
};

export default ChatBox;
