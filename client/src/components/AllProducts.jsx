import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../../src/style.css';

const categories = [
  'Sitting Room',
  'Gaming Room',
  'Bathroom',
  'Bedroom',
  'Outdoor',
  'Kitchen',
];

const types = [
  'Chair',
  'Table',
  'Rug',
  'Light',
  'Sofa',
  'Bed',
];

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/products/getAllProduct');
        setProducts(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    if (products.length > 0) {
      const filteredProducts = products.filter((product) => {
        if (selectedCategory === '') {
          return true;
        }
        if (selectedType === '') {
          return product.category.toLowerCase() === selectedCategory.toLowerCase();
        }
        return product.category.toLowerCase() === selectedCategory.toLowerCase() && product.type.toLowerCase() === selectedType.toLowerCase();
      });
      setFilteredProducts(filteredProducts);
    }
  }, [products, selectedCategory, selectedType]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setSelectedType('');
  };

  const handleTypeChange = (type) => {
    setSelectedType(type);
  };

  const handleAddToCart = (product) => {
    // Add product to cart logic here
    console.log(`Added ${product.name} to cart`);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="AllProduct">
      <h1>Products</h1>
      <p>Filter by category:</p>
      <select value={selectedCategory} onChange={(e) => handleCategoryChange(e.target.value)}>
        <option value="">All</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>

      {selectedCategory !== '' && (
        <div>
          <p>Filter by type:</p>
          <div className="type-filter">
            {types.map((type) => (
              <button
                key={type}
                className={selectedType === type ? 'active' : ''}
                onClick={() => handleTypeChange(type)}
              >
                {type}
              </button>
            ))}
          </div>
        </div>
      )}

      <h2>Top Products</h2>
      <div className="product-list">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.imageUrl} alt={product.name} className="product-image" />
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p>Price: ${product.price}</p>
              <p>Stock: {product.stock}</p>
              <button
                className="product-button"
                onClick={() => handleAddToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          ))
        ) : (
          <p>No products available.</p>
        )}
      </div>
    </div>
  );
};

export default AllProducts;