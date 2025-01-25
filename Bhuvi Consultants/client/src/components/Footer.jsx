import React from 'react'
import logo from '../../public/logo.png';
import { NavLink } from 'react-router-dom';
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { FiPhone } from "react-icons/fi";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaFacebook, FaInstagram, FaYoutube, FaWhatsapp, FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <footer className='footer'>
        <div className="footer-container">
          <div className="footer-section logo-section">
            <img src={logo} alt="Logo" className="logo-footer" />
            <p>
              Bhuvi Consultants Leading Building Design & Construction based Company in Jharkhand.
            </p>
            <div className="social">
              <FaFacebook size={24} />
              <FaInstagram size={24} />
              <FaWhatsapp size={24} />
              <FaYoutube size={24} />
              <FaLinkedin size={24} />
            </div>
          </div>
          <div className="footer-section contact">
            <h4>Contacts</h4>
            <div>
              <span className='contact-icon'><HiOutlineBuildingOffice2 size={20} /></span>
              <address>Sri Guru Kripa, near Kaju Bagan Road, Radha Nagar, Simliya, Hehal, Ranchi, Jharkhand 834005</address>
            </div>
            <div>
              <span className='contact-icon'><FiPhone size={20} /></span>
              +91 7019943376, +91 8986699600
            </div>
            <div>
              <NavLink className='email'>
                <span className='contact-icon'><MdOutlineMailOutline size={20} /> </span>
                info@bhuviconsultants.com
              </NavLink>
            </div>

          </div>
          <div className="footer-section">
            <h4>Business Hours</h4>
          </div>
          <div className="footer-section">
            <h4>Company</h4>
            <ul className='info'>
              <li><NavLink to='/about' className={({ isActive }) => isActive ? 'info-link active' : 'info-link'}>About Us</NavLink></li>
              <li><NavLink to='/' className={({ isActive }) => isActive ? 'info-link active' : 'info-link'}>How We Work</NavLink></li>
              <li><NavLink to='/project' className={({ isActive }) => isActive ? 'info-link active' : 'info-link'}>Our Projects</NavLink></li>
              <li><NavLink to='/about/testimonial' className={({ isActive }) => isActive ? 'info-link active' : 'info-link'}>Testimonial</NavLink></li>
              <li><NavLink to='/blog' className={({ isActive }) => isActive ? 'info-link active' : 'info-link'}>Blogs</NavLink></li>
              <li><NavLink to='/contact' className={({ isActive }) => isActive ? 'info-link active' : 'info-link'}>Contacts</NavLink></li>
              <li><NavLink to='/about/policy' className={({ isActive }) => isActive ? 'info-link active' : 'info-link'}>Privacy Policy</NavLink></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>Copyright © 2024 Bhuvi Consultants All Rights Reserved.</p>
        </div>
      </footer>
    </>
  )
}

export default Footer