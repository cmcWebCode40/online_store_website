import React from 'react';
import Slide1 from '../../images/lamoreslides/slide1.jpg';
import Slide2 from '../../images/lamoreslides/slide2.jpg';
import Slide3 from '../../images/lamoreslides/slide3.jpg';
import Slide4 from '../../images/lamoreslides/slide4.jpg';
import Slide5 from '../../images/lamoreslides/slide5.jpg';
import Slide6 from '../../images/lamoreslides/slide6.jpg';
import Slide7 from '../../images/lamoreslides/slide7.jpg';
import Slide8 from '../../images/lamoreslides/slide8.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

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
		<div className='advert'>
			<div className='advert-links mt-3'>
				<h5>LA More Collections Showrooms</h5>
				<p className='mt-1'>Look out for our showroom of all latest wears coming soon!!</p>
				<div className=' socials my-2'>
					<a
						href='https://web.facebook.com/chinweikemichael.chinonso'
						target='_blanck'
						title='facebook'>
						<FontAwesomeIcon data-testid='icon-1' icon={faFacebook} color='#ee6a65' size='2x' />
					</a>
					<a href='https://twitter.com/cmcWebCode?s=07' target='_blanck' title='twiiter'>
						<FontAwesomeIcon data-testid='icon-2' icon={faTwitter} color='#ee6a65' size='2x' />
					</a>
					<a
						href='https://github.com/cmcWebCode40'
						color='#ee6a65'
						target='_blanck'
						title='instagram'>
						<FontAwesomeIcon data-testid='icon-3' color='#ee6a65' icon={faInstagram} size='2x' />
					</a>
				</div>
			</div>
			<Carousel responsive={responsive} infinite={true} autoPlay={true} showDots={true}>
				<div className='advert-image1'>
					<img src={Slide1} alt='gallery one' />
				</div>
				<div className='advert-image1'>
					<img src={Slide2} alt='gallery one' />
				</div>
				<div className='advert-image1'>
					<img src={Slide3} alt='gallery one' />
				</div>
				<div className='advert-image1'>
					<img src={Slide4} alt='gallery one' />
				</div>
				<div className='advert-image1'>
					<img src={Slide5} alt='gallery one' />
				</div>
				<div className='advert-image1'>
					<img src={Slide6} alt='gallery one' />
				</div>
				<div className='advert-image1'>
					<img src={Slide7} alt='gallery one' />
				</div>
				<div className='advert-image1'>
					<img src={Slide8} alt='gallery one' />
				</div>
			</Carousel>
		</div>
	);
};

export default Advert;
