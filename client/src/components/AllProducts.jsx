import React, { useEffect, useState } from 'react';

const SittingRoom = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http:localhost:5000/api/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  return (
    <div className="sitting-room">
      <h1>Sitting Room</h1>
      <p>Transform your sitting room with our elegant and functional seating options, perfect for every modern home.</p>

      <h2>Top Products</h2>
      <div className="product-list">
        {products.map(product => (
          <div className="product" key={product.id}>
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <p>${product.description}</p>
            <ul>
              {product.items && product.items.map((item, index) => (
                <li key={index}>{item.name} - ${item.price}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <h2>People Also Viewed</h2>
      <div className="product-list">
        {products.slice(0, 1).map(product => (
          <div className="product" key={product.id}>
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <ul>
              {product.items && product.items.map((item, index) => (
                <li key={index}>{item.imageUrl} - ${item.name} - ${item.price} - ${ item.description}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <h2>Oasis</h2>
      <div className="oasis">
        <h3>Motor A (Prix) / Belt / Backer A</h3>
        
      </div>
    </div>
  );
};

export default SittingRoom;