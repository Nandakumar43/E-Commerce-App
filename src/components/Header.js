import React from 'react';

function Header({ cartCount }) {
  return (
    <header>
      <h1>My eCommerce Store</h1>
      <p>Cart Items: {cartCount}</p>
    </header>
  );
}

export default Header;
