import React from 'react'
import heroImage from '../../../assets/nasa--hI5dX2ObAs-unsplash.jpg'

const NasaHeroImageComponent = () => {
  return (
    <div
    style={{
      backgroundImage: `url(${heroImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'top',
      height: '400px', // Adjust the height as needed
      width: '100%',
    }}
  />
  )
}

export default NasaHeroImageComponent