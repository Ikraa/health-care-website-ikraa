import React from 'react';
import "./Footer.css";
import logo from '../../images/logo.png';


const Footer = () => {
    return (
        // ====================Start Footer Section======================
        <div>
            <footer className="footer">
                <div className="d-flex justify-content-start mt-3">
                    <div className="col-4 ">
                        <h3 className="text-white">Contact us</h3>
                        <div className="text-start ms-3 mt-3"><p>Phone: 01xxxxxxxx</p>
                            <p>Address: Uttara Dhaka-1230</p>
                            <p>Email: munnisaikra750@gmail.com</p>
                        </div>
                    </div>
                    <div className="col-4">
                        <h3 className="text-white">Follow Us</h3>
                        {/* -----------------Icon------------------ */}
                        <h3 className="text-white mt-3">
                            <a href='https://www.facebook.com/ikraa.munnissa' target="_blank">
                                <i className="fab fa-facebook me-3 text-primary"></i>
                            </a>
                            <a href='https://www.linkedin.com/in/ikra-munnisa-7a8423153/' target='_blank'>
                                <i className="fab fa-linkedin me-3 text-primary"></i>
                            </a>
                            <a href='https://www.instagram.com/' target='_blank'>
                                <i className="fab fa-instagram me-3 icon-InstagramColor rounded"></i>
                            </a>
                            <a href='https://www.behance.net/' target='_blank' >
                                <i className="fab fa-behance me-3 text-primary"></i>
                            </a>
                            <a href='https://twitter.com/?lang=en' target='_blank'>
                                <i className="fab fa-twitter me-3 text-primary"></i>
                            </a>
                            <a href='https://youtube.com' target='_blank'><i className="fab fa-youtube text-danger"></i>
                            </a>

                        </h3>
                    </div>
                    <div className="col-4">
                        <h3 className='mb-3'><span className='text-white'>Laser Dental Care</span><br/>                          
                        {/* ---------------Logo-----------------*/}
                            <img className='img-logo' src={logo} alt='' />
                        </h3>
                    </div>
                </div>
                <div>
                    {/* -------------------Copyright------------------ */}
                    <p className='text-white'>
                        Copyright &copy; 2022 Ikra Munnisa
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;