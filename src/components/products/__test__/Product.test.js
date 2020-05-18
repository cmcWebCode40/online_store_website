import React from 'react';
import ReactDOM from 'react-dom';
import Product from '../Products';
import Bags from '../bags/Bag';
import Shoes from '../shoes/Shoes';
import '@testing-library/dom';
import { render, cleanup } from '@testing-library/react';

afterEach(cleanup);

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<Product />, div);
});

// it('advert renders correctly', () => {
// 	const { getByTestId } = render(<Bags />);
// 	expect(getByTestId('spin')).toHaveClass('spinner');
// });

// it('advert renders correctly', () => {
// 	const { getByTestId } = render(<Bags />);
// 	expect(getByTestId('spin2')).toHaveClass('spinner');
// });
