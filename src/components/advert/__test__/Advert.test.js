import React from 'react';
import ReactDOM from 'react-dom';
import Advert from '../Advert';
<<<<<<< HEAD
// import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
=======
>>>>>>> ft-deploy-pwa-setup
import { render, cleanup } from '@testing-library/react';

afterEach(cleanup);

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<Advert />, div);
});

it('advert renders correctly', () => {
	const { getByTestId } = render(<Advert />);
	expect(getByTestId('icon-1')).toHaveClass('svg-inline--fa fa-facebook fa-w-16 fa-2x');
});

it('advert renders correctly', () => {
	const { getByTestId } = render(<Advert />);
	expect(getByTestId('icon-2')).toHaveClass('svg-inline--fa fa-twitter fa-w-16 fa-2x');
});

it('advert renders correctly', () => {
	const { getByTestId } = render(<Advert />);
	expect(getByTestId('icon-3')).toHaveClass('svg-inline--fa fa-instagram fa-w-14 fa-2x');
});
