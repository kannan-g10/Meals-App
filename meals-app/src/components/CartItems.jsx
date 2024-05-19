import React, { useContext, useEffect, useState } from 'react';
import { CartContext } from '../store/CartContext';

const CartItems = ({ meal }) => {
  const { cartItems, dispatch } = useContext(CartContext);
  const [count, setCount] = useState(meal.quantity);

  const buttonStyle =
    'w-14 h-10 pb-2 border border-[#8A2B06] hover:bg-[#8A2B06] hover:text-white rounded-md text-[#8A2B06] font-extrabold text-2xl text-center transition-all duration-500';

  const handleIncrease = () => {
    setCount(prev => prev + 1);
    dispatch({ type: 'total_amount_increase', payload: meal.price });
  };

  const handleDecrease = () => {
    if (count === 1) {
      dispatch({ type: 'remove_item', payload: meal });
    } else if (count > 0) {
      setCount(prev => prev - 1);
      dispatch({ type: 'total_amount_decrease', payload: meal.price * 1 });
    }
  };

  return (
    <div className="flex justify-between border-b-4 border-[#8A2B06] p-4 mb-3 m-2">
      <div>
        <h1 className="font-bold text-2xl">{meal.name}</h1>
        <div className="flex gap-16">
          <h2 className="text-[#8A2B06] font-bold text-xl">${meal.price}</h2>
          <p className="border-2 px-4 py-1 rounded-lg">x {count}</p>
        </div>
      </div>

      <div className="flex gap-2">
        <button className={buttonStyle} onClick={handleDecrease}>
          -
        </button>
        <button className={buttonStyle} onClick={handleIncrease}>
          +
        </button>
      </div>
    </div>
  );
};

export default CartItems;
