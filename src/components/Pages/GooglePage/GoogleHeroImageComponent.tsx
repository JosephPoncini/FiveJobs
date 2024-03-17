import React from 'react'
import heroImage from '../../../assets/rajeshwar-bachu-K4txLik7pnY-unsplash.jpg'

const GoogleHeroImageComponent = () => {
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
  )
}

export default GoogleHeroImageComponent