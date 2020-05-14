import React from 'react';
import ContextProvider from './components/context/ContextApi';
import Layouts from './layouts/Layouts';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
	faCoffee,
	faHeart,
	faShoppingCart,
	faTrash,
	faList,
	faPlusCircle,
	faMinusCircle,
	faSearch,
	faPlayCircle,
	faUser,
	faLock,
	faPhone,
	faPhoneAlt,
	faCheck,
	faSpinner
} from '@fortawesome/free-solid-svg-icons';
import './scss/styles.scss';

library.add(
	faCoffee,
	faHeart,
	faShoppingCart,
	faTrash,
	faList,
	faPlayCircle,
	faPlusCircle,
	faSearch,
	faMinusCircle,
	faUser,
	faLock,
	faPhone,
	faPhoneAlt,
	faCheck,
	faSpinner
);

const App = () => {
	return (
		<ContextProvider>
			<div className='app'>
				<Layouts />
			</div>
		</ContextProvider>
	);
};

export default App;
