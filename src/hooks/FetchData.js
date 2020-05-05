import React, { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState('');
  const [error, setError] = useState('');

  const fetchData = async (url) => {
    try {
      const req = await fetch(url);
      const res = req.json();
      setData(res);
    } catch (error) {
      setError(error)
    }
  }
  useEffect(() => {
    fetchData(url)
  }, [])
  return { data, error }
}

export default useFetch;
