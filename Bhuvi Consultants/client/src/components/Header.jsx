import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../public/logo.png'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className='header'>
      <nav className='navbar'>
        <div className='logo-container'>
          <img src={logo} alt="logo" className="logo" />
          <NavLink to='/' className='logo-title'>Bhuvi Consultants</NavLink>
        </div>
        <div 
        className={`hamburger ${isOpen ? 'open' : ''}`}
        onClick={handleMenuClick}>
          <span className='line menu1'></span>
          <span className='line menu2'></span>
          <span className='line menu3'></span>
        </div>
        <div className={`nav-menu ${isOpen ? 'open' : ''}`}>
          <NavLink
            to='/'
            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
            Home
          </NavLink>
          <NavLink
            to='/about'
            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
            About
          </NavLink>
          <NavLink
            to='/project'
            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
            Project
          </NavLink>
          <NavLink
            to='/blog'
            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
            Blog
          </NavLink>
          <NavLink
            to='/contact'
            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
            Contact
          </NavLink>
        </div>

      </nav>
    </header>
  )
}

export default Header