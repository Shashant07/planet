import React from 'react';
import ServiceDetailsSection from './ServiceDetailsSection';
import ServiceDetailsSidebar from './ServiceDetailsSidebar';
// import ServiceDetailsTitle from '../ServiceDetailsTitle';

const ServiceDetailsContainer = () => {
  return (
    <section id="service-details" className="service-details section">

    <div className="container">

      <div className="row gy-5">

        <ServiceDetailsSidebar />
        <ServiceDetailsSection />

       

      </div>

    </div>

  </section>
  )
}

export default ServiceDetailsContainer;