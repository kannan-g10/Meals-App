import React, { useContext } from 'react';
import CartContext from './cart-context';

const CartProvider = props => {
  const cartContext = useContext(CartContext);

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
