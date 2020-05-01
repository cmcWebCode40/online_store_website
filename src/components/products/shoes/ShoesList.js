import React, { useState, useContext } from 'react';
import { context } from '../../context/ContextApi';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import slideImage from '../../../images/slide3.jpg';

const ShoesList = ({ title, price }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [addToCart] = useContext(context);
  const handleLikeBtn = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div>
      <div className="product">
        <div className="product-like ">
          <span onClick={handleLikeBtn} >
            <FontAwesomeIcon
              icon="heart"
              size="1x"
              style={{ marginRight: "1rem" }}
              color={isLiked ? "#ee6a65" : "#ccc"}
            />
          </span>
        </div>
        <div className="product-image ">
          <img src={slideImage} alt="" />
          <p>{title}</p>
          <p>${price}</p>
        </div>
        <div className="product-cart p-1" onClick={() => { addToCart('image', 'bag-image', '200') }}>
          <p>Add to cart</p>
        </div>
      </div>
    </div>
  )
}

export default ShoesList
