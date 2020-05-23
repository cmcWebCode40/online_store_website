import React from 'react';
import ReactDOM from 'react-dom';
import Notification from '../Notifications';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/dom';

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<Notification />, div);
});

afterEach(cleanup);

it('renders correctly 1', () => {
	const { getByTestId } = render(<Notification message={'action cannot be peformed'} />);
	expect(getByTestId('message')).toHaveTextContent('action cannot be peformed');
});

// it('renders correctly 2', () => {
// 	const { getByTestId } = render(<Notification message={'Item removed from cart'} />);
// 	expect(getByTestId('message')).toHaveTextContent('Item removed from cart');
// });
