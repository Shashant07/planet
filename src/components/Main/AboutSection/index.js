import React from 'react'
import { Link } from 'react-router-dom';

import aboutImg from '../../../images/about.jpg';

const AboutSection = () => {
  return (
    <section id="about" className="about section">

      <div className="container" data-aos="fade-up">
        <div className="row gx-0">

          <div className="col-lg-6 d-flex flex-column justify-content-center" data-aos="fade-up" data-aos-delay="200">
            <div className="content">
              <h3>Who We Are</h3>
              <h2>Empowering Your Business Growth with Bespoke Websites</h2>
              <p>We are your growth catalyst in the digital world! At <strong>Planet1</strong>, we specialize in empowering businesses by creating stunning, user-friendly websites that drive engagement and conversions. With our expertise, your vision transforms into an online presence that sets you apart from the competition. Let us help you shine in the digital landscape!</p>
              {/* <p>We are a passionate team of creators, strategists, and tech enthusiasts dedicated to helping businesses thrive in the digital era. With our innovative web design solutions, we transform your vision into an engaging online presence that drives growth and success.</p> */}
              <div className="text-center text-lg-start">
                <Link to="#" className="btn-read-more d-inline-flex align-items-center justify-content-center align-self-center">
                  <span>Read More</span>
                  <i className="bi bi-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-lg-6 d-flex align-items-center" data-aos="zoom-out" data-aos-delay="200">
            <img src={aboutImg} className="img-fluid" alt="" />
          </div>

        </div>
      </div>

    </section>
  )
}

export default AboutSection;