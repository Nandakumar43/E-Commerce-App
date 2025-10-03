import React, { useState } from 'react';
import Header from './components/Header';
import ProductCard from './components/ProductCard';
import Cart from './components/Cart';
import './App.css';

const productsData = [
  { id: 1, name: "T-Shirt", price: 500 },
  { id: 2, name: "Jeans", price: 1200 },
  { id: 3, name: "Shoes", price: 1500 }
];

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  return (
    <div className="App">
      <Header cartCount={cart.length} />
      <h2>Products</h2>
      <div className="products-container">
        {productsData.map(product => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
      <Cart cart={cart} removeFromCart={removeFromCart} />
    </div>
  );
}

export default App;
