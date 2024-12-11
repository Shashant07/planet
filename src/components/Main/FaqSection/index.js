import React, { useState } from 'react'

const FaqSection = () => {
    // Initialize state with an object to track visibility of each element
    const [visible, setVisible] = useState({
        q1: true,
        q2: false,
        q3: false,
        q4: false,
        q5: false,
        q6: false,
    });

    // Toggle function to update the state
    const toggleVisibility = (que) => {
        setVisible((prevState) => ({
        ...prevState,
        [que]: !prevState[que],
        }));
    };
    
    return (
        <section id="faq" className="faq section">
            <div className="container section-title" data-aos="fade-up">
                <h2>F.A.Q</h2>
                <p>Frequently Asked Questions</p>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                        <div className="faq-container">
                            <div className={visible.q1 ? 'faq-item faq-active' : 'faq-item'} onClick={() => toggleVisibility('q1')}>
                                <h3>1. What services do you offer?</h3>
                                <div className="faq-content">
                                    <p>We offer end-to-end web development services, including custom website design, full-stack development (MERN), e-commerce solutions, SEO optimization, domain & hosting management, and ongoing support.</p>
                                </div>
                                <i className="faq-toggle bi bi-chevron-right"></i>
                            </div>
                            <div className={visible.q2 ? 'faq-item faq-active' : 'faq-item'} onClick={() => toggleVisibility('q2')}>
                                <h3>2. How long does it take to build a website?</h3>
                                <div className="faq-content">
                                    <p>The timeline for building a website depends on the complexity of your project. Generally, it takes 2 to 4 weeks for a basic website and 4 to 8 weeks for more advanced features like e-commerce integration.</p>
                                </div>
                                <i className="faq-toggle bi bi-chevron-right"></i>
                            </div>
                            <div className={visible.q3 ? 'faq-item faq-active' : 'faq-item'} onClick={() => toggleVisibility('q3')}>
                                <h3>3. What is the difference between the Starter and Business Plans?</h3>
                                <div className="faq-content">
                                    <p>The Starter Plan is perfect for small businesses or personal websites with basic features, while the Business Plan offers advanced features, more pages, full e-commerce functionality, and premium support for growing businesses.</p>
                                </div>
                                <i className="faq-toggle bi bi-chevron-right"></i>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
                        <div className="faq-container">
                            <div className={visible.q4 ? 'faq-item faq-active' : 'faq-item'} onClick={() => toggleVisibility('q4')}>
                                <h3>4. Do you provide ongoing website maintenance?</h3>
                                <div className="faq-content">
                                    <p>Yes, we offer ongoing website maintenance to ensure your site is up-to-date, secure, and performing at its best. Our support includes updates, troubleshooting, and performance optimization.</p>
                                </div>
                                <i className="faq-toggle bi bi-chevron-right"></i>
                            </div>
                            <div className={visible.q5 ? 'faq-item faq-active' : 'faq-item'} onClick={() => toggleVisibility('q5')}>
                                <h3>5. Is hosting included with the plans?</h3>
                                <div className="faq-content">
                                    <p>Yes, our plans include hosting based on the package you choose. We offer secure and reliable hosting to ensure your website runs smoothly and efficiently.</p>
                                </div>
                                <i className="faq-toggle bi bi-chevron-right"></i>
                            </div>
                            <div className={visible.q6 ? 'faq-item faq-active' : 'faq-item'} onClick={() => toggleVisibility('q6')}>
                                <h3>6. Can I upgrade or downgrade my plan?</h3>
                                <div className="faq-content">
                                    <p>Yes, you can upgrade or downgrade your plan anytime based on your business needs. We offer flexible billing and will help you switch to a plan that better suits your requirements.</p>
                                </div>
                                <i className="faq-toggle bi bi-chevron-right"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FaqSection;