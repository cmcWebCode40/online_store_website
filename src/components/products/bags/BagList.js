import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { context } from '../../context/ContextApi';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import slideImage from '../../../images/slide3.jpg';

const BagList = ({ title, price }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isAdded, setIsAdded] = useState(false);
  const [addToCart] = useContext(context);
  const handleLikeBtn = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div className="product">
      <div className="product-like">
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
      <div className="product-cart p-1" >
        {
          isAdded ? <p>
            <FontAwesomeIcon
              icon="check"
              size="1x"
              style={{ marginRight: "1rem" }}
              color="green"
            /> <Link className="link-cart" to='/cart'>Go  to  cart</Link>
          </p>
            : <p onClick={() => { addToCart('image', 'bag-image', '200'); setIsAdded(!isAdded) }}>
              <FontAwesomeIcon
                icon="shopping-cart"
                size="1x"
                style={{ marginRight: "1rem" }}
                color="#fff"
              />Add to cart
      </p>
        }
      </div>
    </div>

  )
}

export default BagList
