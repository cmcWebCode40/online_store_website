import React from 'react';
import SlideOne from '../../images/slide1 (2).jpg';
import SlideTwo from '../../images/slide6.jpg';

const Advert = () => {
  return (
    <div className="advert">
      <div className="advert-links">
        <h5>LA More Collectons Showrooms</h5>
        <p className="mt-1">We bring to you our showroom of latest wears comming soon!!</p>
        <div className="my-2">
          <span>Facebook</span>
          <span>Twitter</span>
          <span>instagram</span>
        </div>
      </div>
      <div className="advert-image1"> <img src={SlideOne} height="240" width="300" alt="gallery one" /></div>
      <div className="advert-image1">
      <img src={SlideTwo} alt="gallery two" width="300" />
      </div>
    </div>
  )
}

export default Advert
