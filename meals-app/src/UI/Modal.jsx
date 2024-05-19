import React, { useContext } from 'react';

import ReactDOM from 'react-dom';
import CartItems from '../components/CartItems';
import { CartContext } from '../store/CartContext';

const Modal = ({ onClose, isOpen }) => {
  const { cartItems, dispatch } = useContext(CartContext);

  if (!isOpen) return null;
  return ReactDOM.createPortal(
    <>
      <div
        className="fixed top-0 left-0 right-0 bottom-0 bg-black/70 z-[1000] "
        onClick={onClose}
      ></div>

      <div className="fixed z-[1000] bg-white top-1/4 lg:w-1/3 sm:w-2/3 ml-[20%]  lg:ml-[33%] rounded-2xl p-6 flex flex-col gap-5 transition-transform duration-1000">
        <div>
          <div className="max-h-80 overflow-y-auto">
            {cartItems.items.map(item => {
              return <CartItems meal={item} key={item.id} />;
            })}
          </div>
          <div className="flex flex-col gap-5">
            <div className="flex justify-between font-bold text-2xl font-mono">
              <h1>Total Amount</h1>
              <h1>
                $
                {cartItems.totalAmount <= 0
                  ? '0.00'
                  : cartItems.totalAmount.toFixed(2)}
              </h1>
            </div>
            <div className="flex justify-end gap-4">
              <button
                className="border-2 border-[#8A2B06] hover:bg-[#8A2B06] text-[#8A2B06] hover:text-white font-semibold rounded-full px-6 py-2 transition duration-500"
                onClick={onClose}
              >
                Close
              </button>
              {cartItems.items.length > 0 && (
                <button className="hover:bg-[#421f14] text-white bg-[#8A2B06] font-semibold rounded-full px-6 py-2 transition duration-500">
                  Order
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>,
    document.getElementById('overlays')
  );
};

export default Modal;
