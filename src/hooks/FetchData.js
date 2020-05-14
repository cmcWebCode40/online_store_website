import React, { useEffect, useContext } from 'react';
import axios from 'axios';
import { context } from '../components/context/ContextApi';

const fetchCollection = async url => {
	const res = await axios.get(url);
	return res;
};

const useFetch = url => {
	const [data, setData] = React.useState('');
	const [error, setError] = React.useState('');
	const [setIsLoading] = useContext(context);

	useEffect(() => {
		fetchCollection(url)
			.then(res => {
				setIsLoading(true);
				setData(res);
				setIsLoading('');
			})
			.catch(err => setError(err));
	}, []);
	return { data, error };
};

export default useFetch;
