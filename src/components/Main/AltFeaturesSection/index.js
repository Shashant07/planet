import React from 'react';

import altFeatures from '../../../images/alt-features.png';

const AltFeaturesSection = () => {
    return (
        <section id="alt-features" className="alt-features section">
            <div className="container">
                <div className="row gy-5">
                    <div className="col-xl-7 d-flex order-2 order-xl-1" data-aos="fade-up" data-aos-delay="200">
                        <div className="row align-self-center gy-5">
                            <div className="col-md-6 icon-box">
                                <i className="bi bi-award"></i>
                                <div>
                                    <h4>Complete Web Solutions</h4>
                                    <p>From design to deployment, we handle it all seamlessly.</p>
                                </div>
                            </div>
                            <div className="col-md-6 icon-box">
                                <i className="bi bi-card-checklist"></i>
                                <div>
                                    <h4>Modern, Responsive Designs</h4>
                                    <p>Websites that look great on any device, anytime.</p>
                                </div>
                            </div>
                            <div className="col-md-6 icon-box">
                                <i className="bi bi-dribbble"></i>
                                <div>
                                    <h4>Custom Features Built for You</h4>
                                    <p>Tailored functionalities to match your unique business goals.</p>
                                </div>
                            </div>
                            <div className="col-md-6 icon-box">
                                <i className="bi bi-filter-circle"></i>
                                <div>
                                    <h4>Domain and Hosting Simplified</h4>
                                    <p>We manage your domain and hosting so you can focus on growth.</p>
                                </div>
                            </div>
                            <div className="col-md-6 icon-box">
                                <i className="bi bi-lightning-charge"></i>
                                <div>
                                    <h4>Secure and Optimized Performance</h4>
                                    <p>Fast, secure, and optimized for the best user experience.</p>
                                </div>
                            </div>
                            <div className="col-md-6 icon-box">
                                <i className="bi bi-patch-check"></i>
                                <div>
                                    <h4>Dedicated Support</h4>
                                    <p>Always here to keep your website running smoothly.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-5 d-flex align-items-center order-1 order-xl-2" data-aos="fade-up" data-aos-delay="100">
                        <img src={altFeatures} className="img-fluid" alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AltFeaturesSection;