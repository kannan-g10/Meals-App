import React, { useContext, useEffect, useState } from 'react';
import meals from '../assets/meals.png';
import { FaShoppingCart } from 'react-icons/fa';
import { CartContext } from '../store/CartContext';

const Header = ({ onOpen }) => {
  const { cartItems, dispatch } = useContext(CartContext);
  const [scaleButton, setScaleButton] = useState(false);
  const [numberOfCartItems, setNumberOfCartItems] = useState(0);

  useEffect(() => {
    const totalItems = cartItems.items.reduce(
      (total, item) => total + item.quantity,
      0
    );
    setNumberOfCartItems(totalItems);
  }, [cartItems.items]);

  useEffect(() => {
    if (cartItems.items.length > 0) {
      setScaleButton(true);
      const timer = setTimeout(() => {
        setScaleButton(false);
      }, 200);
      return () => clearTimeout(timer);
    }
  }, [cartItems.items]);

  return (
    <>
      <div className="w-full h-[5rem] flex justify-around items-center bg-[#8a2b06] top-0 left-0 fixed z-[1]">
        <h1 className="text-white text-4xl font-bold font-mono">ReactMeals</h1>
        <button
          className={`bg-[#2C0D00] hover:bg-[#411d11] px-8 py-4 rounded-3xl text-white font-bold flex items-center justify-between ${
            scaleButton ? 'scale-125' : '' // Apply scaling effect if scaleButton is true
          } transition-transform duration-300`}
          onClick={onOpen}
        >
          <span className="px-2">
            <FaShoppingCart size={25} />
          </span>
          <span className="px-2">Your Cart</span>
          <span className="bg-[#8A2B06] w-5 rounded-2xl mx-2">
            {numberOfCartItems}
          </span>
        </button>
      </div>
      <img
        src={meals}
        alt="A fresh meals"
        className="w-full h-[40%] object-cover overflow-hidden transform -skew-y-6 -translate-y-72 "
      />
    </>
  );
};

export default Header;
