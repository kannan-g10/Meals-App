import React from 'react';

const cartItems = {
  items: [],
  totalItems: 0,
  addItem: function (item) {
    this.items.push(item);
    this.totalItems++;
  },
  removeItem: id => {},
};

const CartContext = React.createContext(cartItems);

export default CartContext;
