import React from 'react';
import { DUMMY_MEALS } from '../constants/data';
import AvailableMeals from './AvailableMeals';

const MealsList = () => {
  return (
    <div className="shadow-md lg:mx-64 md:mx-40 sm:mx-20 my-10 rounded-lg py-5">
      {DUMMY_MEALS.map((item, index) => (
        <AvailableMeals key={index} meal={item} />
      ))}
    </div>
  );
};

export default MealsList;
