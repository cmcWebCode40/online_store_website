import React from 'react';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import Home from '../pages/Home';
import Cart from '../components/cart/Cart';

const Layouts = () => {
  return (
    <div>
      <Header />
      <Cart />
      <Home />
      <Footer />
    </div>
  )
}

export default Layouts
