//============================Import file and necessary data===================
import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';
import logo from "../../images/logo.png";


//======================Start header section part===================
const Header = () => {
    return (
        <div>

            <header>
                {/*=============Header logo section===========*/} 
                <img src={logo} alt=""/>
                {/*-------------Handle Page linking-------------*/}
                <nav>
                    <li><Link className="active" to="/home">Home</Link></li>
                    <li><Link to="/service">Service</Link></li>
                    <li><Link to="/gallery">Gallery</Link></li>
                    <li><Link to="/patient_education_video">Video</Link></li>
                    <li><Link to="/dental_tips">Dental Tips</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
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