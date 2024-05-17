import Input from '../../UI/Input';
import classes from './MealItemForm.module.css';
import CartContext from '../../../store/cart-context';
import { useContext } from 'react';

const MealItemForm = props => {
  const cartContext = useContext(CartContext);

  const handleClick = e => {
    e.preventDefault();
    cartContext.addItem(props.items);
    console.log(cartContext, cartContext.totalItems);
  };

  return (
    <form className={classes.form} onSubmit={handleClick}>
      <Input
        label="Amount"
        input={{
          id: 'amount_' + props.id,
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1',
        }}
      />
      <button>+ Add</button>
    </form>
  );
};

export default MealItemForm;
