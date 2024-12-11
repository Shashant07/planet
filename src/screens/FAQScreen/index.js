import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';

const FAQScreen = () => {
    // Initialize state with an object to track visibility of each element
    const [visible, setVisible] = useState({
        q1: true,
        q2: false,
        q3: false,
        q4: false,
        q5: false,
        q6: false,
        q7: false,
        q8: false,
        q9: false,
        q10: false,
        q11: false,
        q12: false,
        q13: false,
        q14: false,
        q15: false,
        q16: false,
        q17: false,
        q18: false,
        q19: false,
        q20: false
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
            <div className="page-title">
                <div className="heading">
                    <div className="container">
                        <div className="row d-flex justify-content-center text-center">
                            <div className="col-lg-8">
                                <h1>Frequently Asked Questions (FAQ)</h1>
                                <p className="mb-0">Welcome to the FAQ page for Planet1! Here, we answer common questions to help you better understand our services and processes. If you have any additional queries, feel free to reach out to us.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="page-title">
                    <nav className="breadcrumbs">
                        <div className="container d-flex justify-content-center text-center">
                            <ol>
                                {/* <li><Link to="/faq">General Questions</Link></li> */}
                                <li className="current">General Questions</li>
                            </ol>
                        </div>
                    </nav>
                </div>
                <div className="row">
                    <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                        <div className="faq-container">
                            <div className={visible.q1 ? 'faq-item faq-active' : 'faq-item'} onClick={() => toggleVisibility('q1')}>
                                <h3>1. What services does Planet1 provide?</h3>
                                <div className="faq-content">
                                    <p>We offer end-to-end web development services, including website design, development, deployment, e-commerce integration, SEO, hosting, and maintenance.</p>
                                </div>
                                <i className="faq-toggle bi bi-chevron-right"></i>
                            </div>
                            <div className={visible.q2 ? 'faq-item faq-active' : 'faq-item'} onClick={() => toggleVisibility('q2')}>
                                <h3>2. Who can use your services?</h3>
                                <div className="faq-content">
                                    <p>Our services are ideal for startups, small businesses, and growing enterprises looking for professional web solutions tailored to their needs.</p>
                                </div>
                                <i className="faq-toggle bi bi-chevron-right"></i>
                            </div>
                            <div className={visible.q3 ? 'faq-item faq-active' : 'faq-item'} onClick={() => toggleVisibility('q3')}>
                                <h3>3. How long does it take to build a website?</h3>
                                <div className="faq-content">
                                    <p>The timeline depends on the complexity of your project. Typically, a simple website takes 2-4 weeks, while more complex solutions, like e-commerce platforms, may take 6-8 weeks.</p>
                                </div>
                                <i className="faq-toggle bi bi-chevron-right"></i>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
                        <div className="faq-container">
                            <div className={visible.q4 ? 'faq-item faq-active' : 'faq-item'} onClick={() => toggleVisibility('q4')}>
                                <h3>4. Do I need technical knowledge to use your services?</h3>
                                <div className="faq-content">
                                    <p>No, you don’t need any technical knowledge. Our team will handle everything from start to finish and provide support if needed.</p>
                                </div>
                                <i className="faq-toggle bi bi-chevron-right"></i>
                            </div>
                            <div className={visible.q5 ? 'faq-item faq-active' : 'faq-item'} onClick={() => toggleVisibility('q5')}>
                                <h3>5. Are your services customizable?</h3>
                                <div className="faq-content">
                                    <p>Yes! We tailor every project to meet your specific business needs, whether it’s design, features, or functionality.</p>
                                </div>
                                <i className="faq-toggle bi bi-chevron-right"></i>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="page-title">
                    <nav className="breadcrumbs">
                        <div className="container d-flex justify-content-center text-center">
                            <ol>
                                {/* <li><Link to="/faq">General Questions</Link></li> */}
                                <li className="current">Pricing and Payments</li>
                            </ol>
                        </div>
                    </nav>
                </div>
                <div className="row">
                    <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                        <div className="faq-container">
                            <div className={visible.q6 ? 'faq-item faq-active' : 'faq-item'} onClick={() => toggleVisibility('q6')}>
                                <h3>6. How do your pricing plans work?</h3>
                                <div className="faq-content">
                                    <p>We offer both monthly and contract-based plans. Choose the plan that best suits your budget and needs. All pricing details are listed on our Pricing page.</p>
                                </div>
                                <i className="faq-toggle bi bi-chevron-right"></i>
                            </div>
                            <div className={visible.q7 ? 'faq-item faq-active' : 'faq-item'} onClick={() => toggleVisibility('q7')}>
                                <h3>7. Do you offer refunds?</h3>
                                <div className="faq-content">
                                    <p>Refunds are provided as per our Refund Policy, which is outlined in our Terms and Conditions. Contact us for specific cases.</p>
                                </div>
                                <i className="faq-toggle bi bi-chevron-right"></i>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
                        <div className="faq-container">
                            <div className={visible.q8 ? 'faq-item faq-active' : 'faq-item'} onClick={() => toggleVisibility('q8')}>
                                <h3>8. Are there any hidden charges?</h3>
                                <div className="faq-content">
                                    <p>No, all charges are transparent. Any additional costs, such as premium plugins or third-party services, will be communicated upfront.</p>
                                </div>
                                <i className="faq-toggle bi bi-chevron-right"></i>
                            </div>
                            <div className={visible.q9 ? 'faq-item faq-active' : 'faq-item'} onClick={() => toggleVisibility('q9')}>
                                <h3>9. Can I switch my plan later?</h3>
                                <div className="faq-content">
                                    <p>Yes, you can upgrade or downgrade your plan anytime to better suit your business needs.</p>
                                </div>
                                <i className="faq-toggle bi bi-chevron-right"></i>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="page-title">
                    <nav className="breadcrumbs">
                        <div className="container d-flex justify-content-center text-center">
                            <ol>
                                {/* <li><Link to="/faq">General Questions</Link></li> */}
                                <li className="current">Technical and Support Questions</li>
                            </ol>
                        </div>
                    </nav>
                </div>
                <div className="row">
                    <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                        <div className="faq-container">
                            <div className={visible.q10 ? 'faq-item faq-active' : 'faq-item'} onClick={() => toggleVisibility('q10')}>
                                <h3>10. Will my website be mobile-friendly?</h3>
                                <div className="faq-content">
                                    <p>Absolutely! All our websites are designed to be fully responsive, ensuring they work seamlessly on any device.</p>
                                </div>
                                <i className="faq-toggle bi bi-chevron-right"></i>
                            </div>
                            <div className={visible.q11 ? 'faq-item faq-active' : 'faq-item'} onClick={() => toggleVisibility('q11')}>
                                <h3>11. Do you provide hosting and domain services?</h3>
                                <div className="faq-content">
                                    <p>Yes, hosting and domain management are included in our plans. We’ll help you secure your domain and set up hosting as part of the process.</p>
                                </div>
                                <i className="faq-toggle bi bi-chevron-right"></i>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
                        <div className="faq-container">
                            <div className={visible.q12 ? 'faq-item faq-active' : 'faq-item'} onClick={() => toggleVisibility('q12')}>
                                <h3>12. What happens if my website faces issues after launch?</h3>
                                <div className="faq-content">
                                    <p>Our ongoing maintenance services ensure your website remains secure and up-to-date. We’re always here to troubleshoot and resolve any issues.</p>
                                </div>
                                <i className="faq-toggle bi bi-chevron-right"></i>
                            </div>
                            <div className={visible.q13 ? 'faq-item faq-active' : 'faq-item'} onClick={() => toggleVisibility('q13')}>
                                <h3>13. Do you offer SEO services?</h3>
                                <div className="faq-content">
                                    <p>Yes, our websites are SEO-optimized, and we can provide additional SEO services to help improve your site’s visibility and ranking.</p>
                                </div>
                                <i className="faq-toggle bi bi-chevron-right"></i>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="page-title">
                    <nav className="breadcrumbs">
                        <div className="container d-flex justify-content-center text-center">
                            <ol>
                                {/* <li><Link to="/faq">General Questions</Link></li> */}
                                <li className="current">Customization and Features</li>
                            </ol>
                        </div>
                    </nav>
                </div>
                <div className="row">
                    <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                        <div className="faq-container">
                            <div className={visible.q14 ? 'faq-item faq-active' : 'faq-item'} onClick={() => toggleVisibility('q14')}>
                                <h3>14. Can I request specific features for my website?</h3>
                                <div className="faq-content">
                                    <p>Yes, we offer custom development to integrate features like e-commerce, booking systems, analytics, and more, based on your requirements.</p>
                                </div>
                                <i className="faq-toggle bi bi-chevron-right"></i>
                            </div>
                            <div className={visible.q15 ? 'faq-item faq-active' : 'faq-item'} onClick={() => toggleVisibility('q15')}>
                                <h3>15. Can I make changes to my website after it’s live?</h3>
                                <div className="faq-content">
                                    <p>Of course! You can request updates or use a content management system (if included) to make changes. We also provide ongoing support for modifications.</p>
                                </div>
                                <i className="faq-toggle bi bi-chevron-right"></i>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
                        <div className="faq-container">
                            <div className={visible.q16 ? 'faq-item faq-active' : 'faq-item'} onClick={() => toggleVisibility('q16')}>
                                <h3>16. Do you provide content for the website?</h3>
                                <div className="faq-content">
                                    <p>We can assist with basic content creation. However, for specialized content, we recommend hiring a professional content writer.</p>
                                </div>
                                <i className="faq-toggle bi bi-chevron-right"></i>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="page-title">
                    <nav className="breadcrumbs">
                        <div className="container d-flex justify-content-center text-center">
                            <ol>
                                {/* <li><Link to="/faq">General Questions</Link></li> */}
                                <li className="current">Getting Started</li>
                            </ol>
                        </div>
                    </nav>
                </div>
                <div className="row">
                    <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                        <div className="faq-container">
                            <div className={visible.q17 ? 'faq-item faq-active' : 'faq-item'} onClick={() => toggleVisibility('q17')}>
                                <h3>17. How do I get started with Planet1?</h3>
                                <div className="faq-content">
                                    <p>Simply reach out to us via our Contact Us page, and we’ll guide you through the process of selecting the right plan and starting your project.</p>
                                </div>
                                <i className="faq-toggle bi bi-chevron-right"></i>
                            </div>
                            <div className={visible.q18 ? 'faq-item faq-active' : 'faq-item'} onClick={() => toggleVisibility('q18')}>
                                <h3>18. What do you need from me to begin the project?</h3>
                                <div className="faq-content">
                                    <p>We’ll need details about your business, branding materials (like logos), and any specific requirements or ideas you have for the website.</p>
                                </div>
                                <i className="faq-toggle bi bi-chevron-right"></i>
                            </div>
                            
                        </div>
                    </div>
                    <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
                        <div className="faq-container">
                            <div className={visible.q19 ? 'faq-item faq-active' : 'faq-item'} onClick={() => toggleVisibility('q19')}>
                                <h3>19. Is there a contract I need to sign?</h3>
                                <div className="faq-content">
                                    <p>For contract-based plans, yes. We will provide a clear agreement outlining the scope of work, timelines, and terms.</p>
                                </div>
                                <i className="faq-toggle bi bi-chevron-right"></i>
                            </div>
                            <div className={visible.q20 ? 'faq-item faq-active' : 'faq-item'} onClick={() => toggleVisibility('q20')}>
                                <h3>20. How can I contact your support team?</h3>
                                <div className="faq-content">
                                    <p>You can reach us via email at <Link to='mailto:planet1@outlook.com'>planet1@outlook.com</Link> or by phone at <Link to='tel:9637744229'>+91 96377 44229</Link>. We’re here to help!</p>
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

export default FAQScreen;