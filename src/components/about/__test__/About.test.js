import React from 'react';
import ReactDOM from 'react-dom';
import About from '../About';

import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';

afterEach(cleanup);

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<About />, div);
});

it('renders button correctly', () => {
	const { getByTestId } = render(<About />);
	expect(getByTestId('heading')).toHaveTextContent('What we are all about');
});

it('should take a snapshot', () => {
	const { asFragment } = render(<About />);
	expect(asFragment(<About />)).toMatchSnapshot();
});
