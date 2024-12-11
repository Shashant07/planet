import React from 'react';
import { Link } from 'react-router-dom';

import team1 from '../../../images/team/team-1.jpg'
import team2 from '../../../images/team/team-2.jpg'
import team3 from '../../../images/team/team-3.jpg'
import team4 from '../../../images/team/team-4.jpg'

const TeamSection = () => {
    return (
        <section id="team" className="team section">
            <div className="container section-title" data-aos="fade-up">
                <h2>Team</h2>
                <p>Our hard working team</p>
            </div>
            <div className="container">
                <div className="row gy-4">
                    <div className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="100">
                        <div className="team-member">
                            <div className="member-img">
                                <img src={team1} className="img-fluid" alt="" />
                                <div className="social">
                                    <Link to=""><i className="bi bi-twitter-x"></i></Link>
                                    <Link to=""><i className="bi bi-facebook"></i></Link>
                                    <Link to=""><i className="bi bi-instagram"></i></Link>
                                    <Link to=""><i className="bi bi-linkedin"></i></Link>
                                </div>
                            </div>
                            <div className="member-info">
                                <h4>Walter White</h4>
                                <span>Chief Executive Officer</span>
                                <p>Velit aut quia fugit et et. Dolorum ea voluptate vel tempore tenetur ipsa quae aut. Ipsum exercitationem iure minima enim corporis et voluptate.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="200">
                        <div className="team-member">
                            <div className="member-img">
                                <img src={team2} className="img-fluid" alt="" />
                                <div className="social">
                                    <Link to=""><i className="bi bi-twitter-x"></i></Link>
                                    <Link to=""><i className="bi bi-facebook"></i></Link>
                                    <Link to=""><i className="bi bi-instagram"></i></Link>
                                    <Link to=""><i className="bi bi-linkedin"></i></Link>
                                </div>
                            </div>
                            <div className="member-info">
                                <h4>Sarah Jhonson</h4>
                                <span>Product Manager</span>
                                <p>Quo esse repellendus quia id. Est eum et accusantium pariatur fugit nihil minima suscipit corporis. Voluptate sed quas reiciendis animi neque sapiente.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="300">
                        <div className="team-member">
                            <div className="member-img">
                                <img src={team3} className="img-fluid" alt="" />
                                <div className="social">
                                    <Link to=""><i className="bi bi-twitter-x"></i></Link>
                                    <Link to=""><i className="bi bi-facebook"></i></Link>
                                    <Link to=""><i className="bi bi-instagram"></i></Link>
                                    <Link to=""><i className="bi bi-linkedin"></i></Link>
                                </div>
                            </div>
                            <div className="member-info">
                                <h4>William Anderson</h4>
                                <span>CTO</span>
                                <p>Vero omnis enim consequatur. Voluptas consectetur unde qui molestiae deserunt. Voluptates enim aut architecto porro aspernatur molestiae modi.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="400">
                        <div className="team-member">
                            <div className="member-img">
                                <img src={team4} className="img-fluid" alt="" />
                                <div className="social">
                                    <Link to=""><i className="bi bi-twitter-x"></i></Link>
                                    <Link to=""><i className="bi bi-facebook"></i></Link>
                                    <Link to=""><i className="bi bi-instagram"></i></Link>
                                    <Link to=""><i className="bi bi-linkedin"></i></Link>
                                </div>
                            </div>
                            <div className="member-info">
                                <h4>Amanda Jepson</h4>
                                <span>Accountant</span>
                                <p>Rerum voluptate non adipisci animi distinctio et deserunt amet voluptas. Quia aut aliquid doloremque ut possimus ipsum officia.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TeamSection;