import React from 'react'
import heroImage from '../../../assets/javier-esteban-mIUJZi8a828-unsplash.jpg'

const NvidiaHeroImageComponent = () => {
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

export default NvidiaHeroImageComponent