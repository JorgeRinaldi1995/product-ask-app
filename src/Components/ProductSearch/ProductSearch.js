import React, { useState } from 'react';
import ChatBox from '../ChatBox/ChatBox';
import './styles.scss';

const ProductSearch = () => {

  const [greeting, setGreeting] = useState('');
  const [results, setResults] = useState([]);

  const searchProducts = async (term) => {
    let url = `http://localhost:5000/search`;
    const params = new URLSearchParams();
    
    if (term) {
      params.append('term', term);
    } 

    url += `?${params.toString()}`;


    const response = await fetch(url);
    const data = await response.json();

    try {
      setGreeting(data.greeting || '');
      setResults(data.products || []);
    } catch (error) {
      console.error('Error fetching data:', error);
      setResults(data.products || []);
    }
  };

  return (
    <div>
      <h1>Receitas</h1>
      <ChatBox onSearch={searchProducts} greeting={greeting} />
      <ul className='products-container'>
        {results.map((product, index) => (
          <li key={index} className='product-item'>
            <img src={product.image} />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};


export default ProductSearch;