import React from 'react';

function Cart({ cart, removeFromCart }) {
  const total = cart.reduce((acc, item) => acc + item.price, 0);
  return (
    <div className="cart">
      <h2>Cart</h2>
      {cart.map(item => (
        <div key={item.id}>
          {item.name} - ₹{item.price} 
          <button onClick={() => removeFromCart(item.id)}>Remove</button>
        </div>
      ))}
      <h3>Total: ₹{total}</h3>
    </div>
  );
}

export default Cart;
