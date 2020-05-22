import React from 'react';
import homePageImage from '../../images/content-image.jpg';

const LandingPage = () => {
	return (
		<div className='landing-page' id='content'>
			<div className='landing-page-content ml-2'>
				<h1 className='mt-2'>
					LA MORE <br /> <span>COLLECTIONZ</span>
				</h1>
				<div className='small-word'>
					<p className='mt-1'>YOUR FASHION AND STYLE DESTINATION</p>
					<small className='mt-1'>
						Our La Collectionz community are experts at styling our luxurious shoes & bags
					</small>
				</div>
				<div className='mt-2 shop-btn'>
					<a title='shop now' className='btn' href='#collection'>
						SHOP NOW
					</a>
				</div>
			</div>
			<div className='landing-page-image my-2'>
				<img height='400' src={homePageImage} alt='landing page' />
			</div>
		</div>
	);
};

export default LandingPage;
