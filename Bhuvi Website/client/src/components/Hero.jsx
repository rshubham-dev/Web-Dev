import React from 'react'
import design from '../../public/Design.jpg'

const Hero = () => {
    return (
        <section
            className='hero'
            style={{
                backgroundImage: `url(${design})`,
            }}>
            <div className="hero-container">
            </div>
        </section>
    )
}

export default Hero