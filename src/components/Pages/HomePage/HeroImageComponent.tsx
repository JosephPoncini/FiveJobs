import React from 'react';
import heroImage from '../../../assets/mario-gogh-VBLHICVh-lI-unsplash.jpg'

const HeroImage = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '600px', // Adjust the height as needed
        width: '100%',
      }}
    />
  );
};

export default HeroImage;