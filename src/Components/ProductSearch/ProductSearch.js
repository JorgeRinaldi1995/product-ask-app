import React, { useState } from 'react';
import ChatBox from '../ChatBox/ChatBox';

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
      <h1>Product Search</h1>
      <ChatBox onSearch={searchProducts} greeting={greeting} />
      <ul>
        {results.map((product, index) => (
          <li key={index}>
            <strong>{product.name}</strong> - {product.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductSearch;