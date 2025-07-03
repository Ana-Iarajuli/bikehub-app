import { useState, useEffect } from 'react';
import axios from 'axios';

export const useFetchBikes = (location = 'Berlin') => {
  const [bikes, setBikes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBikes = async () => {
      try {
        const res = await axios.get(
          `https://bikeindex.org:443/api/v3/search?page=1&per_page=10&location=${location}&distance=10&stolenness=proximity`
        );
        setBikes(res.data.bikes);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchBikes();
  }, [location]);

  return { bikes, loading };
};
