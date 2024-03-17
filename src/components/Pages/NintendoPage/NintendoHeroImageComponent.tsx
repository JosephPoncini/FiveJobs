import React from 'react';
import heroImage from '../../../assets/patrick-fOYg1lkZA7Y-unsplash.jpg'

const NintendoHeroImage = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '400px', // Adjust the height as needed
        width: '100%',
      }}
    />
  );
};

export default NintendoHeroImage;