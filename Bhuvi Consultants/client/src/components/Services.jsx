import React from 'react';
import { NavLink } from 'react-router-dom';
import design from '../../public/Design.jpg'
import construction from '../../public/Construction.png'

const Services = () => {
    return (
        <section className='service'>
            <h2 className='title'>WHAT ARE YOU LOOKING FOR?</h2>
            <div className="service-container">
                <div className="service-box">
                    <div className="service-img" style={{
                        backgroundImage: `url(${design})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                    }}>
                    </div>
                    <div className="service-title">
                        <NavLink to='/service/design' className='service-name'>Design</NavLink>
                    </div>
                </div>
                <div className="service-box">
                    <div className="service-img" style={{
                        backgroundImage: `url(${construction})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                    }}>
                    </div>
                    <div className="service-title">
                        <NavLink to='/service/construction' className='service-name'>Construction</NavLink>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services