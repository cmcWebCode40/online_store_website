import React, { useState } from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import BagList from './BagList';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const Bag = () => {
  const [data] = useState([
    {
      id: 1,
      title: 'latest fashion bag',
      price: '300'
    },
    {
      id: 2,
      title: 'latest fashion bag',
      price: '300'
    },
    {
      id: 3,
      title: 'latest fashion bag',
      price: '300'
    },
    {
      id: 4,
      title: 'latest fashion bag',
      price: '300'
    },
    {
      id: 5,
      title: 'latest fashion bag',
      price: '300'
    },
    {
      id: 6,
      title: 'latest fashion bag',
      price: '300'
    },
    {
      id: 7,
      title: 'latest fashion bag',
      price: '300'
    },
    {
      id: 8,
      title: 'latest fashion bag',
      price: '300'
    },
    {
      id: 9,
      title: 'latest fashion bag',
      price: '300'
    },
  ])
  return (
    <div className="bags mt-3">
      <div className="bags-title">
        <span></span><h2>Bags Collectionz</h2>
      </div>
      <Carousel responsive={responsive}>
        {data.map(item => (
          <BagList key={item.id} title={item.title} price={item.price} />
        ))}
      </Carousel>
    </div>
  )
}

export default Bag
