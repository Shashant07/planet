import React from 'react';
import val1 from '../../../images/values-1.png';
import val2 from '../../../images/values-2.png';
import val3 from '../../../images/values-3.png';

const ValuesSection = () => {
    return (
        <section id="values" className="values section">
            <div className="container section-title" data-aos="fade-up">
                <h2>Our Values</h2>
                <p>What we value most<br /></p>
            </div>
            <div className="container">
                <div className="row gy-4">
                    <div className="col-lg-4" data-aos="fade-up" data-aos-delay="100">
                        <div className="card">
                            <img src={val2} className="img-fluid" alt="" />
                            <h3>Innovation</h3>
                            <p>We constantly embrace new ideas and cutting-edge technologies to create websites that stand out and drive impact.</p>
                        </div>
                    </div>
                    <div className="col-lg-4" data-aos="fade-up" data-aos-delay="200">
                        <div className="card">
                            <img src={val1} className="img-fluid" alt="" />
                            <h3>Collaboration</h3>
                            <p>We believe in building strong partnerships with our clients, working hand-in-hand to bring their vision to life.</p>
                        </div>
                    </div>
                    <div className="col-lg-4" data-aos="fade-up" data-aos-delay="300">
                        <div className="card">
                            <img src={val3} className="img-fluid" alt="" />
                            <h3>Excellence</h3>
                            <p>Our commitment to quality ensures every project we deliver exceeds expectations and fosters growth.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ValuesSection;