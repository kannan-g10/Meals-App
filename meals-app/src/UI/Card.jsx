import React from 'react';

const Card = () => {
  return (
    <div className=" bg-[#383838] text-white w-1/2 max-w-[45rem] text-center m-auto relative rounded-xl p-4 -mt-96 shadow-2xl shadow-slate-900">
      <h2 className="mb-4 text-3xl font-mono font-bold">
        Delicious Food, Delivered To You
      </h2>
      <p className="m-2 text-lg font-sans font-medium">
        Choose your favorite meal from our broad selection of available meals
        and enjoy a delicious lunch or dinner at home.
      </p>
      <p className="m-2 text-lg font-sans font-medium">
        All our meals are cooked with high-quality ingredients, just-in-time and
        of course by experienced chefs!
      </p>
    </div>
  );
};

export default Card;
