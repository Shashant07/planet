import React from 'react';
import ServiceDetailsTitle from '../../components/ServiceDetails/ServiceDetailsTitle';
import ServiceDetailsContainer from '../../components/ServiceDetails/ServiceDetailsContainer';

const ServiceDetailsScreen = () => {
  return (
    <main className="main">
        <ServiceDetailsTitle/>
        <ServiceDetailsContainer />
    </main>
  )
}

export default ServiceDetailsScreen;