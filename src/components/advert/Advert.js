import React from 'react';
import SlideOne from '../../images/slide1 (2).jpg';
// import SlideTwo from '../../images/slide6.jpg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {
  faFacebook,
  faTwitter,
  faInstagram

} from "@fortawesome/free-brands-svg-icons";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const Advert = () => {
  return (
    <div className="advert">
      <div className="advert-links mt-3">
        <h5>LA More Collections Showrooms</h5>
        <p className="mt-1">We bring to you our showroom of all latest wears coming soon!!</p>
        <div className=" socials my-2">
          <a
            href="https://web.facebook.com/chinweikemichael.chinonso"
            target="_blanck"
            title="facebook"
          >
            <FontAwesomeIcon icon={faFacebook} color="#ee6a65" size="2x" />
          </a>
          <a
            href="https://twitter.com/cmcWebCode?s=07"
            target="_blanck"
            title="twiiter"
          >
            <FontAwesomeIcon icon={faTwitter} color="#ee6a65" size="2x" />
          </a>
          <a
            href="https://github.com/cmcWebCode40"
            color="#ee6a65"
            target="_blanck"
            title="instagram"
          >
            <FontAwesomeIcon color="#ee6a65" icon={faInstagram} size="2x" />
          </a>
        </div>
      </div>
      <Carousel responsive={responsive}>
        <div className="advert-image1">
          <img src={SlideOne} height="300" width="500" alt="gallery one" />
        </div>
        <div className="advert-image1">
          <img src={SlideOne} height="300" width="500" alt="gallery one" />
        </div>
        <div className="advert-image1">
          <img src={SlideOne} height="300" width="500" alt="gallery one" />
        </div>
        <div className="advert-image1">
          <img src={SlideOne} height="300" width="500" alt="gallery one" />
        </div>
        <div className="advert-image1">
          <img src={SlideOne} height="300" width="500" alt="gallery one" />
        </div>
      </Carousel>
    </div>
  )
}

export default Advert
