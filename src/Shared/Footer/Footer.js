import React from 'react';
import "./Footer.css";



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
                            <a href='https://www.youtube.com/results?search_query=laser+dental+care' target='_blank'><i className="fab fa-youtube text-danger me-3"></i>
                            </a>
                            <a href='' target='_blank'> <i className="fab fa-twitter"></i>
                            </a>

                        </h3>
                    </div>
                    <div className="col-4">
                        <h3 className='mb-3'><span className='text-white'>Laser Dental Care</span><br/>                          
                        {/* ---------------open hour-----------------*/}
                         
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