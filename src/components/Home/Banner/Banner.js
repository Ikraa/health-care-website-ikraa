import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css';
const Banner = () => {
    return (
      <div className="container-fluid">
            <div className="banner row d-flex justify-content-center align-items-center ">
            <div className='btn_appointment'>
            <div className='mt-5 pt-5 '>
                <Link to='/appoinment' className="appointment_btn" >Make an Appoinment</Link>
              </div>
              </div>
              
        </div>
      </div>
    );
};

export default Banner;