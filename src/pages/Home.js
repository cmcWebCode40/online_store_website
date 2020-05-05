import React from 'react';
import About from '../components/about/About';
import LandingPage from '../components/landingpage/LandingPage';
import Products from '../components/products/Products';
import Advert from '../components/advert/Advert';

const Home = () => {
  return (
    <div className="home">
      <LandingPage />
      <Products />
      <About />
      <Advert />
    </div>
  )
}

export default Home
