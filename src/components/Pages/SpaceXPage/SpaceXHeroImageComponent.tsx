import React from 'react'
import heroImage from '../../../assets/anirudh-w_WZRYHb-D0-unsplash.jpg'

const SpaceXHeroImageComponent = () => {
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

export default SpaceXHeroImageComponent