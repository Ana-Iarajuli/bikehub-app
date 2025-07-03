import React from 'react';
import { useFetchBikes } from '../hooks/useFetchBikes';

const Bikes = () => {
  const { bikes, loading } = useFetchBikes('Berlin');

  return (
    <main>
      <h1>Nearby Bikes</h1>
      {loading ? (
        <p>Loading bikes...</p>
      ) : bikes.length > 0 ? (
        <ul>
          {bikes.map((bike) => (
            <li key={bike.id}>
              <strong>{bike.title || 'No title'}</strong> <br />
              {bike.manufacturer_name} <br />
              <img
                src={bike.large_img || bike.thumb || 'https://via.placeholder.com/150'}
                alt={bike.title}
                width="150"
              />
            </li>
          ))}
        </ul>
      ) : (
        <p>No bikes found.</p>
      )}
    </main>
  );
};

export default Bikes;
