import React, { useContext, useState } from 'react';
import { CartContext } from '../store/CartContext';

const AvailableMeals = ({ meal }) => {
  const { cartItems, dispatch } = useContext(CartContext);
  const [newQuantity, setNewQuantity] = useState(1);

  return (
    <div className="p-10 mx-10 flex justify-between border-b-2">
      <div className="flex flex-col gap-2">
        <h3 className="text-2xl font-bold">{meal.name}</h3>
        <p className="italic text-lg">{meal.description}</p>
        <h3 className="text-xl font-bold text-[#AD5502]">${meal.price}</h3>
      </div>
      <div className="flex flex-col gap-4">
        <div>
          <label
            htmlFor="amount"
            className="text-xl font-mono font-semibold px-2"
          >
            Amount
          </label>
          <input
            type="number"
            value={newQuantity}
            min={1}
            max={5}
            id="amount"
            className="border-2 w-14 font-semibold px-2 rounded-md"
            onChange={e => setNewQuantity(e.target.value)}
          />
        </div>
        <button
          className="bg-[#641E03] hover:bg-[#a94b26] text-white font-bold px-8 py-2 rounded-full"
          onClick={() =>
            dispatch({
              type: 'add_item',
              payload: { ...meal, quantity: Number(newQuantity) },
            })
          }
        >
          +Add
        </button>
      </div>
    </div>
  );
};

export default AvailableMeals;
