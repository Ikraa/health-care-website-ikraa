//=======================Import File and necessary data=============== 
import React from 'react';
import useService from '../../hooks/useService';
import ServiceCard from '../ServiceCard/ServiceCard';
import './Service.css'


const Service = () => {
  const [service] = useService();

  //==============================Start Service s Part===================
  return (
    <div className='my-3'>
       <h2 className='title_service'>Our Ser<span className='service_title'>v</span>ice</h2>
            <h6 className='service_title font_hover'>WE'RE CREATIVE CRAFTING WITH LOVE</h6>
      <div>
          <div className="row">
            {
              service.map(service => <div className='col-6'><ServiceCard
                key={service._id}
                service={service}
              />
              </div>
              )
            }

          </div>
        </div>
      {/*===========================End Service Section=================*/}
    </div>
  );
};

export default Service;