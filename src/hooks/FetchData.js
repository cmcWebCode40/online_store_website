import React, { useEffect } from 'react';
import axios from 'axios';

const fetchCollection = async url => {
	const res = await axios.get(url);
	return res;
};

const useFetch = url => {
	const [data, setData] = React.useState('');
	const [error, setError] = React.useState('');

	useEffect(() => {
		fetchCollection(url)
			.then(res => {
				setData(res);
			})
			.catch(err => setError(err));
	}, []);
	return { data, error };
};

export default useFetch;
