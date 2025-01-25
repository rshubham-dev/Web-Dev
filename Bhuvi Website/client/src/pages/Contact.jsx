import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaYoutube, FaWhatsapp, FaLinkedin } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { FcGoogle } from "react-icons/fc";
import { FiPhone } from "react-icons/fi";
import CTA from '../components/CTA'

const Contact = () => {
  return (
    <main className='main'>
      <div className='contact'>
        <h1 className="text-2xl">Contact Us For Your Dream House!</h1>
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29296.88728727086!2d85.2565817909361!3d23.3842046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f131!3m3!1m2!1s0x39f4e16ce5555163%3A0x7ecdee8668bff6d9!2sBhuvi%20Consultants!5e0!3m2!1sen!2sin!4v1722085911328!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0, outline: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer" // Corrected property name
          />
        </div>
      </div>
      <div className="contact-container">
        <form className="contact-form">
          <h2>Get In Touch</h2>
          <div className="form-row">
            <div className="form-group">
              <label>Name</label>
              <input type="text" placeholder="Enter Name" />
            </div>
            <div className="form-group">
              <label>Phone Number</label>
              <input type="tel" placeholder="Enter phone number" />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Email</label>
              <input type="email" placeholder="Enter email" />
            </div>
            <div className="form-group">
              <label>Service</label>
              <select name="service">
                <option value="">Select Service</option>
                <option value="design">Design</option>
                <option value="construction">Construction</option>
                <option value="consultants">Consultants</option>
                <option value="vila">Villa</option>
                <option value="3d">3D Elevation</option>
                <option value="3d">Approval</option>
                <option value="estimation">Estimation</option>
                <option value="boq">BOQ</option>
                <option value="bbs">BBS</option>
              </select>
              {/* <input type="tel" placeholder="What Services You are Looking For" /> */}
            </div>
          </div>
          <div className="form-group">
            <label>What do you have in mind</label>
            <textarea placeholder="Please enter query..."></textarea>
          </div>
          <button type="submit" className="submit-button">Submit</button>
        </form>
        <div className="contact-info">
          <h2>Contact us</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim</p>
          <div className="info-group">
            <FiPhone className="icon" />
            <span>+91 7019943376, +91 8986699600</span>
          </div>
          <div className="info-group">
            < MdOutlineMailOutline className="icon" />
            <span>info@bhuviconsultants.com</span>
          </div>
          <div className="info-group">
            <CiLocationOn className="icon location" />
            <span>Sri Guru Kripa, near Kaju Bagan Road, Radha Nagar, Simliya, Hehal, Ranchi, Jharkhand 834005</span>
          </div>
          <div className="social-icons">
            <FcGoogle className="icon" style={{ color: "white" }} color='white' />
            <FaYoutube className="icon" />
            <FaInstagram className="icon" />
            <FaFacebook className="icon" />
          </div>
        </div>
      </div>
      <CTA />
    </main>
  )
}

export default Contact