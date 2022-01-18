import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./ServiceDetails.css";

const Service = (props) => {
    const { title_1stLetter,title, details, image } = props.service;
    return (
        <div>
            <section className='mt-3'>
                <div className='serviceDetails shadow p-3 mb-5 bg-body rounded'>
                    <h4><span className='title_color'>{title_1stLetter}</span>{title}</h4>
                    <div className='d-flex justify-content-center serviceCard'>
                        <img className='image_hover' src={image} alt='pic' />
                        <div className='service_info'>
                        <p>{details.slice(0, 202)}</p>
                        </div>
                    </div>
                    <Link to="/service">
                    <Button className='fs-6 fw-bolder btn-hover mt-3'>Details</Button>
                    </Link>
                    {/* {`/service/${slug}`} */}
                </div>
            </section>
        </div>
    );
};

export default Service;