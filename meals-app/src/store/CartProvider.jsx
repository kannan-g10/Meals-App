import React, { useReducer, useState } from 'react';
import { CartContext } from './CartContext';

const initialState = {
  items: [],
  totalAmount: 0,
  addItem: () => {},
  removeItem: () => {},
};

const actionType = {
  ADD_ITEM: 'add_item',
  REMOVE_ITEM: 'remove_item',
  TOTAL_AMOUNT: 'total_amount',
  TOTAL_AMOUNT_INCREASE: 'total_amount_increase',
  TOTAL_AMOUNT_DECREASE: 'total_amount_decrease',
};

function reducer(state, action) {
  switch (action.type) {
    case actionType.ADD_ITEM:
      if (state.items.find(item => item.id == action.payload.id)) return state;
      return {
        ...state,
        items: [...state.items, action.payload],
        totalAmount:
          state.totalAmount +
          action.payload.price * Number(action.payload.quantity),
      };
    case actionType.TOTAL_AMOUNT_INCREASE:
      return {
        ...state,
        totalAmount: state.totalAmount + action.payload,
      };
    case actionType.TOTAL_AMOUNT_DECREASE:
      return {
        ...state,
        totalAmount: state.totalAmount - action.payload,
      };

    case actionType.REMOVE_ITEM:
      return {
        ...state,
        items: state.items.filter(item => item.id != action.payload.id),
        totalAmount: state.totalAmount - action.payload.price,
      };

    default:
      return state;
  }
}

const CartProvider = props => {
  const [cartItems, dispatch] = useReducer(reducer, initialState);

  return (
    <CartContext.Provider value={{ cartItems, dispatch }}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
