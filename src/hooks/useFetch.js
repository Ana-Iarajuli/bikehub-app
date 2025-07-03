import { useState, useEffect } from 'react';
import axios from 'axios';

export const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(url)
      .then(res => setData(res.data))
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
  }, [url]);

  return { data, loading };
};
