import React from 'react';
import wheels from '../../images/wheel1.svg';
import loaderImage from '../../images/loader.svg';

const Loader = () => {
	return (
		<div className='loader-shell'>
			<div className='loader-wrapper'>
				<img height='300' width='300' src={loaderImage} alt='la more collections' />
				<div className='wheels wheels-1'>
					<img src={wheels} alt='rolling wheels' />
				</div>
				<div className='wheels wheels-2'>
					<img src={wheels} alt='rolling wheels' />
				</div>
			</div>
		</div>
	);
};

export default Loader;
