import React from 'react';
import SlideOne from '../../images/slide1 (2).jpg';
import SlideTwo from '../../images/slide6.jpg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram

} from "@fortawesome/free-brands-svg-icons";

const Advert = () => {
  return (
    <div className="advert">
      <div className="advert-links">
        <h5>LA More Collectons Showrooms</h5>
        <p className="mt-1">We bring to you our showroom of latest wears comming soon!!</p>
        <div className="my-2">
          <a
            href="https://web.facebook.com/chinweikemichael.chinonso"
            target="_blanck"
          >
            <FontAwesomeIcon icon={faFacebook} color="brown" size="2x" />
          </a>
          <a
            href="https://twitter.com/cmcWebCode?s=07"
            target="_blanck"
          >
            <FontAwesomeIcon icon={faTwitter} color="brown" size="2x" />
          </a>
          <a
            href="https://github.com/cmcWebCode40"
            color="brown"
            target="_blanck"
          >
            <FontAwesomeIcon color="brown" icon={faInstagram} size="2x" />
          </a>
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
