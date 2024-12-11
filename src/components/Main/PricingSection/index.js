import React from 'react';
import { Link } from 'react-router-dom';

const PricingSection = () => {
    return (
        <section id="pricing" className="pricing section">
            <div className="container section-title" data-aos="fade-up">
                <h2>Pricing</h2>
                <p>Check Our Affordable Pricing<br /></p>
            </div>
            <div className="container">
                <div className="row gy-4">
                <div className="col-lg-3 col-md-6" data-aos="zoom-in" data-aos-delay="300">
                        <div className="pricing-tem">
                            <span className="featured">Featured</span>  
                            <h3 style={{color: "#fd7e14"}}>Monthly Starter Plan</h3>
                            <div className="price"><sup>$</sup>19<span> / month</span></div>
                            <div className="icon">
                                <i className="bi bi-airplane" style={{color: "#fd7e14"}}></i>
                            </div>
                            <ul>
                                <li>Custom website design</li>
                                <li>2 GB hosting</li>
                                <li>Basic SEO structure</li>
                                <li>3 pages included</li>
                                <li>Email support</li>
                                <i>Note: Monthly billing, cancel anytime.</i>
                            </ul>
                            <Link to="#" className="btn-buy">Buy Now</Link>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6" data-aos="zoom-in" data-aos-delay="400">
                        <div className="pricing-tem">
                            <h3 style={{color: "#0d6efd"}}>Monthly Business Plan</h3>
                            <div className="price"><sup>$</sup>49<span> / month</span></div>
                            <div className="icon">
                                <i className="bi bi-rocket" style={{color: "#0d6efd"}}></i>
                            </div>
                            <ul>
                                <li>Advanced website design</li>
                                <li>10 GB hosting</li>
                                <li>Full e-commerce functionality</li>
                                <li>Basic SEO & analytics</li>
                                <li>Custom domain integration</li>
                                <li>5 pages included</li>
                                <li>24/7 email support</li>
                                <i>Note: Monthly billing, cancel anytime.</i>
                            </ul>
                            <Link to="#" className="btn-buy">Buy Now</Link>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6" data-aos="zoom-in" data-aos-delay="100">
                        <div className="pricing-tem">
                            <h3 style={{color: "#20c997"}}>Contract Starter Plan</h3>
                            <div className="price"><sup>$</sup>129<span> for 6 months</span></div>
                            <div className="icon">
                                <i className="bi bi-box" style={{color: "#20c997"}}></i>
                            </div>
                            <ul>
                                <li>Custom website design</li>
                                <li>5 GB hosting</li>
                                <li>Basic SEO structure</li>
                                <li>3 pages included</li>
                                <li>Email support</li>
                                <i>Note: Charged upfront for 6 months.</i>
                                {/* <li className="na">Pharetra massa</li>
                                <li className="na">Massa ultricies mi</li> */}
                            </ul>
                            <Link to="#" className="btn-buy">Buy Now</Link>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6" data-aos="zoom-in" data-aos-delay="200">
                        <div className="pricing-tem">
                            <h3 style={{color: "#0dcaf0"}}>Contract Business Plan</h3>
                            <div className="price"><sup>$</sup>299<span> for 12 months</span></div>
                            <div className="icon">
                                <i className="bi bi-send" style={{color: "#0dcaf0"}}></i>
                            </div>
                            <ul>
                                <li>Advanced website design</li>
                                <li>20 GB hosting</li>
                                <li>Full e-commerce functionality</li>
                                <li>Basic SEO & analytics</li>
                                <li>Custom domain integration</li>
                                <li>5 pages included</li>
                                <li>24/7 email support</li>
                                <i>Note: Charged upfront for 12 months.</i>
                                {/* <li className="na">Massa ultricies mi</li> */}
                            </ul>
                            <Link to="#" className="btn-buy">Buy Now</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PricingSection;