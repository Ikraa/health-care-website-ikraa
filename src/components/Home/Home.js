import React from 'react';
import ServiceDetails from '../ServiceDetails/ServiceDetails';
import Banner from './Banner/Banner';
import useService from '../../hooks/useService';

const Home = () => {
    const [service] = useService();
    return (
        <div>
            <Banner />
            <div className='my-3'>
       <h2 className='title_service'>Our Ser<span className='service_title'>v</span>ice</h2>
            <h6 className='service_title font_hover'>WE'RE CREATIVE CRAFTING WITH LOVE</h6>
      <div>
          <div className="row">
            {
              service.map(service => <div className='col-6'><ServiceDetails
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
        </div>
    );
};

export default Home;