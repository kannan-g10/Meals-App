import { useState } from 'react';

import Header from './components/Header';
import MealsList from './components/MealsList';
import Card from './UI/Card';
import Modal from './UI/Modal';
import CartProvider from './store/CartProvider';

function App() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  return (
    <CartProvider>
      <Modal onClose={() => setIsOpenModal(false)} isOpen={isOpenModal} />
      <Header onOpen={() => setIsOpenModal(true)} />
      <Card />
      <MealsList />
    </CartProvider>
  );
}

export default App;
