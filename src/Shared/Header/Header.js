//============================Import file and necessary data===================
import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';
import logo from "../../images/logo/logo.png";


//======================Start header section part===================
const Header = () => {
    return (
        <div>

            <header>
                {/*=============Header logo section===========*/} 
                <img className='ms-3' src={logo} alt=""/>
                <span className='text-white me-5 call'><i className="fas fa-phone"></i>+8 0123456789</span>
                {/* -------------Handle Page linking------------- */}
                 <nav className='call'>
                    <li><Link className="active" to="/home">Home</Link></li>
                    <li><Link to="/service">Service</Link></li>
                    <li><Link to="/gallery">Gallery</Link></li>
                    <li><Link to="/patient_education_video">Video</Link></li>
                    <li><Link to="/dental_tips">Dental Tips</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact_us">Contact Us</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    
                    {/*-------------End Page Linking---------------*/}
                </nav>

            </header>
            {/*-------------------End Header Section-----------------*/}
        </div>
    );
};

export default Header;