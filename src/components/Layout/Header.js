import { Fragment } from 'react';

import classes from './Header.module.css';
import mealImg from '../../assets/meal-bg.png';
import HeaderCartButton from './HeaderCartButton';

const Header = props => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton />
      </header>
      <div className={classes['main-image']}>
        <img src={mealImg} alt="meals" />
      </div>
    </Fragment>
  );
};

export default Header;
