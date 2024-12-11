import React from 'react';
import { Link } from 'react-router-dom';

const ServiceDetailsSidebar = () => {
  return (
    <div className="col-lg-4" data-aos="fade-up" data-aos-delay="100">

      <div className="service-box">
        <h4>Serices List</h4>
        <div className="services-list">
          <Link to="#" className="active"><i className="bi bi-arrow-right-circle"></i><span>Web Design</span></Link>
          <Link to="#"><i className="bi bi-arrow-right-circle"></i><span>Web Design</span></Link>
          <Link to="#"><i className="bi bi-arrow-right-circle"></i><span>Product Management</span></Link>
          <Link to="#"><i className="bi bi-arrow-right-circle"></i><span>Graphic Design</span></Link>
          <Link to="#"><i className="bi bi-arrow-right-circle"></i><span>Marketing</span></Link>
        </div>
      </div>

      <div className="service-box">
        <h4>Download Catalog</h4>
        <div className="download-catalog">
          <Link to="#"><i className="bi bi-filetype-pdf"></i><span>Catalog PDF</span></Link>
          <Link to="#"><i className="bi bi-file-earmark-word"></i><span>Catalog DOC</span></Link>
        </div>
      </div>

      <div className="help-box d-flex flex-column justify-content-center align-items-center">
        <i className="bi bi-headset help-icon"></i>
        <h4>Have a Question?</h4>
        <p className="d-flex align-items-center mt-2 mb-0"><i className="bi bi-telephone me-2"></i> <span>+1 5589 55488 55</span></p>
        <p className="d-flex align-items-center mt-1 mb-0"><i className="bi bi-envelope me-2"></i> <Link to="mailto:contact@example.com">contact@example.com</Link></p>
      </div>

    </div>
  )
}

export default ServiceDetailsSidebar;