import React from 'react';
import featuresImg from '../../../images/features.png';

const FeaturesSection = () => {
    return (
        <section id="features" className="features section">
            <div className="container section-title" data-aos="fade-up">
                <h2>Features</h2>
                <p>Our Advaced Features<br /></p>
            </div>
            <div className="container">
                <div className="row gy-5">
                    <div className="col-xl-6" data-aos="zoom-out" data-aos-delay="100">
                        <img src={featuresImg} className="img-fluid" alt="" />
                    </div>
                    <div className="col-xl-6 d-flex">
                        <div className="row align-self-center gy-4">
                            <div className="col-md-6" data-aos="fade-up" data-aos-delay="200">
                                <div className="feature-box d-flex align-items-center">
                                    <i className="bi bi-check"></i>
                                    <h3>End-to-End Web Development</h3>
                                </div>
                            </div>
                            <div className="col-md-6" data-aos="fade-up" data-aos-delay="300">
                                <div className="feature-box d-flex align-items-center">
                                    <i className="bi bi-check"></i>
                                    <h3>Responsive and Modern Design</h3>
                                </div>
                            </div>
                            <div className="col-md-6" data-aos="fade-up" data-aos-delay="400">
                                <div className="feature-box d-flex align-items-center">
                                    <i className="bi bi-check"></i>
                                    <h3>Custom Features Tailored to You</h3>
                                </div>
                            </div>
                            <div className="col-md-6" data-aos="fade-up" data-aos-delay="500">
                                <div className="feature-box d-flex align-items-center">
                                    <i className="bi bi-check"></i>
                                    <h3>Domain and Hosting Included</h3>
                                </div>
                            </div>
                            <div className="col-md-6" data-aos="fade-up" data-aos-delay="600">
                                <div className="feature-box d-flex align-items-center">
                                    <i className="bi bi-check"></i>
                                    <h3>Fast and Reliable Deployment</h3>
                                </div>
                            </div>
                            <div className="col-md-6" data-aos="fade-up" data-aos-delay="700">
                                <div className="feature-box d-flex align-items-center">
                                    <i className="bi bi-check"></i>
                                    <h3>Ongoing Support and Maintenance</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FeaturesSection;