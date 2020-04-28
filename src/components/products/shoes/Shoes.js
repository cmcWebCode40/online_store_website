import React from 'react';
import ShoesList from '../shoes/ShoesList';

const Shoes = () => {
  return (
    <div className="shoes mt-3">
      <div className="shoes-title">
        <span></span><h2>shoes Collectionz</h2>
      </div>
      <ShoesList />
    </div>
  )
}

export default Shoes
