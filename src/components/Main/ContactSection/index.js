import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { contactDataFun } from '../../../redux/actions/contactFormAction';
import { Link } from 'react-router-dom';

const ContactSection = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const [nameCheck, setNameCheck] = useState('Enter your name');
    const [emailCheck, setEmailCheck] = useState('Enter your email');
    
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleContactSubmit = (e) => {
        e.preventDefault();
        const contactData = { name, email, subject, message };
        dispatch(contactDataFun(contactData));
        console.log(contactData)
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
        navigate('/');
    }

    const onInputChange = (ip, type) => {
        if (type === 'name') {
            if (ip.length < 3) {
                setNameCheck('Name should be at least 3 characters long');
            } else {
                setNameCheck('Enter your name');
            }
            setName(ip);
        } else if (type === 'email') {
            const patt = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            if (patt.test(ip)) {
                setEmailCheck('Enter your email');
            } else {
                setEmailCheck('Invalid email');
            }
            setEmail(ip);
        } else if (type === 'subject') {
            setSubject(ip);
        } else if (type === 'message') {
            setMessage(ip);
        }else{
            console.log('no ip')
        }  
    }
    return (
        <section id="contact" className="contact section">
            <div className="container section-title" data-aos="fade-up">
                <h2>Contact</h2>
                <p>Contact Us</p>
            </div>
            <div className="container" data-aos="fade-up" data-aos-delay="100">
                <div className="row gy-4">
                    <div className="col-lg-6">
                        <div className="row gy-4">
                            <div className="col-md-6">
                                <div className="info-item" data-aos="fade" data-aos-delay="200">
                                    <i className="bi bi-geo-alt"></i>
                                    <h3>Address</h3>
                                    <p>Manish Nagar,</p>
                                    <p>Nagpur</p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="info-item" data-aos="fade" data-aos-delay="300">
                                    <i className="bi bi-telephone"></i>
                                    <h3>Call Us</h3>
                                    <p><Link to='tel:9637744229'>+91 96377 44229</Link></p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="info-item" data-aos="fade" data-aos-delay="400">
                                    <i className="bi bi-envelope"></i>
                                    <h3>Email Us</h3>
                                    <p><Link to='mailto:planet1@outlook.com'>planet1@outlook.com</Link></p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="info-item" data-aos="fade" data-aos-delay="500">
                                    <i className="bi bi-clock"></i>
                                    <h3>Open Hours</h3>
                                    <p>Everyday</p>
                                    <p>9:00 to 7:00</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <form className="php-email-form" data-aos="fade-up" data-aos-delay="200" onSubmit={handleContactSubmit}>
                            <div className="row gy-4">
                                <div className="col-md-6">
                                {(nameCheck.length < 16) ? <span style={{ color: 'white' }}>{nameCheck}</span> : <span style={{ color: '#ff7f7f' }}>{nameCheck}</span>}
                                    <input type="text" name="name" className="form-control" placeholder="Your Name" required onChange={(e) => onInputChange(e.target.value, 'name')} value={name} />
                                </div>
                                <div className="col-md-6 ">
                                {(emailCheck.length > 15) ? <span style={{ color: 'white' }}>{emailCheck}</span> : <span style={{ color: '#ff7f7f' }}>{emailCheck}</span>}
                                    <input type="email" className="form-control" name="email" placeholder="Your Email" required onChange={(e) => onInputChange(e.target.value, 'email')} value={email} />
                                </div>
                                <div className="col-12">
                                    <input type="text" className="form-control" name="subject" placeholder="Subject" required onChange={(e) => onInputChange(e.target.value, 'subject')} value={subject} />
                                </div>
                                <div className="col-12">
                                    <textarea className="form-control" name="message" rows="6" placeholder="Message" required onChange={(e) => onInputChange(e.target.value, 'message')} value={message}></textarea>
                                </div>
                                <div className="col-12 text-center">
                                    <div className="loading">Loading</div>
                                    <div className="error-message"></div>
                                    <div className="sent-message">Your message has been sent. Thank you!</div>
                                    <button type="submit">Send Message</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactSection;