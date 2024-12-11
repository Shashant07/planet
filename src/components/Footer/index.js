import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { newsletterDataFun } from '../../redux/actions/contactFormAction';
import p1logo from '../../images/p1-logo.png';

const Footer = () => {
    const [email, setEmail] = useState('')

    const [emailCheck, setEmailCheck] = useState('Enter your email');

    const dispatch = useDispatch();

    const handleNewsletter = (e) => {
        e.preventDefault();
        const newsletterData = {email};
        dispatch(newsletterDataFun(newsletterData));
        setEmail('');
    }

    const onInputChange = (ip, type) => {
        if (type === 'email') {
            const patt = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            if (patt.test(ip)) {
                setEmailCheck('Enter your email');
            } else {
                setEmailCheck('Invalid email');
            }
            setEmail(ip);
        }
    }
    return (
        <footer id="footer" className="footer">

            <div className="footer-newsletter">
                <div className="container">
                    <div className="row justify-content-center text-center">
                        <div className="col-lg-6">
                            <h4>Join Our Newsletter</h4>
                            <p>Subscribe to our newsletter and receive the latest news about our products and services!</p>
                            <form className="php-email-form" onSubmit={handleNewsletter}>
                                {(emailCheck.length > 15) ? <span style={{ color: 'white' }}>{emailCheck}</span> : <span style={{ color: '#ff7f7f' }}>{emailCheck}</span>}
                                <div className="newsletter-form">
                                    <input type="email" name="email" placeholder='Enter your email' required onChange={(e) => onInputChange(e.target.value, 'email')} value={email}/>
                                    <input type="submit" value="Subscribe" />
                                </div>

                                <div className="loading">Loading</div>
                                <div className="error-message"></div>
                                <div className="sent-message">Your subscription request has been sent. Thank you!</div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container footer-top">
                <div className="row gy-4">
                    <div className="col-lg-4 col-md-6 footer-about">
                        <Link to="/" className="logo d-flex align-items-center me-auto" >
                            <img src={p1logo} alt="logo" style={{ maxHeight:"36px", marginRight: "8px"}}/>
                            <h1 className="sitename">Planet1</h1>
                        </Link>
                        <div className="footer-contact pt-3">
                            <p>Manish Nagar</p>
                            <p>Nagpur</p>
                            <p className="mt-3"><strong>Phone:</strong> <h6 style={{display: 'inline-block'}}><Link to='tel:9637744229'>+91 96377 44229</Link></h6></p>
                            <p><strong>Email:</strong> <h6 style={{display: 'inline-block'}}><Link to='mailto:planet1@outlook.com'>planet1@outlook.com</Link></h6></p>
                        </div>
                    </div>

                    <div className="col-lg-2 col-md-3 footer-links">
                        <h4>Useful Links</h4>
                        <ul>
                            <li><i className="bi bi-chevron-right"></i> <Link to="/">Home</Link></li>
                            <li><i className="bi bi-chevron-right"></i> <Link to="/about">About us</Link></li>
                            <li><i className="bi bi-chevron-right"></i> <Link to="/services">Services</Link></li>
                            <li><i className="bi bi-chevron-right"></i> <Link to="/contact">Contact Us</Link></li>
                        </ul>
                    </div>

                    <div className="col-lg-2 col-md-3 footer-links">
                        <h4>Important Links</h4>
                        <ul>
                            <li><i className="bi bi-chevron-right"></i> <Link to="privacypolicy">Privacy Policy</Link></li>
                            <li><i className="bi bi-chevron-right"></i> <Link to="tandc">Terms & Conditions</Link></li>
                            <li><i className="bi bi-chevron-right"></i> <Link to="faq">FAQs</Link></li>
                            <li><i className="bi bi-chevron-right"></i> <Link to="blogs">Blog</Link></li>
                        </ul>
                    </div>

                    <div className="col-lg-4 col-md-12">
                        <h4>Follow Us</h4>
                        <p>Stay connected and follow us on social media for the latest updates and insights!</p>
                        <div className="social-links d-flex">
                            {/* <Link to="planet1.official@outlook.com"><i className="bi bi-envelop"></i></Link> */}
                            <Link to="https://www.youtube.com/@planet1.official"><i className="bi bi-youtube"></i></Link>
                            <Link to="https://www.facebook.com/planet1.official"><i className="bi bi-facebook"></i></Link>
                            <Link to="https://www.instagram.com/planet1.official/"><i className="bi bi-instagram"></i></Link>
                            <Link to="https://www.instagram.com/planet1.official/"><i className="bi bi-github"></i></Link>
                        </div>
                    </div>

                </div>
            </div>

            <div className="container copyright text-center mt-4">
                <p>© <span>Copyright</span> <strong className="px-1 sitename">Planet1</strong> <span>All Rights Reserved</span></p>
                <div className="credits">
                    Designed by <Link to="https://planet1.in">Team Planet1</Link>
                </div>
            </div>

        </footer>
    )
}

export default Footer;