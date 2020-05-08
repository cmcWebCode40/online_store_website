import React from 'react';
import homePageImage from '../../images/home2.jpg';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="landing-page-content ml-2">
        <h1 className="mt-2">LA MORE <br /> <span>COLLECTIONZ</span></h1>
        <p className="mt-1">YOUR FASHION AND STYLE DESTINATION</p>
        <small className="mt-1">Buildings are the strongest visible art piece that would be there displayed for generation</small>
        <div className="mt-2">
          <a title="shop now" className="btn" href="#collection">SHOP NOW</a>
        </div>
      </div>
      <div className="landing-page-image">
        <img height="500" src={homePageImage} alt="landing page" />
      </div>
    </div>
  )
}

export default LandingPage
