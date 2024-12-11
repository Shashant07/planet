import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import test1 from '../../../images/testimonials/testimonials-1.jpg';
import test2 from '../../../images/testimonials/testimonials-2.jpg';
import test3 from '../../../images/testimonials/testimonials-3.jpg';
import test4 from '../../../images/testimonials/testimonials-4.jpg';
import test5 from '../../../images/testimonials/testimonials-5.jpg';

const TestimonialsSection = () => {

    return (
        <section id="testimonials" className="testimonials section">
            <div className="container section-title" data-aos="fade-up">
                <h2>Testimonials</h2>
                <p>What they are saying about us<br /></p>
            </div>
            <div className="container" data-aos="fade-up" data-aos-delay="100">
                <div className="swiper init-swiper init-swiper-testimonial">
                    <Swiper className="swiper-wrapper align-items-center"
                        modules={[Pagination]}
                        pagination={{ clickable: true, el: '.custom-pagination', type: 'bullets' }}
                        spaceBetween={50}
                        slidesPerView={'auto'}
                        loop={true}
                        speed={600}
                        autoplay={{
                            delay: 500
                        }}
                        breakpoints={{
                            320: {
                                slidesPerView: 1,
                                spaceBetween: 40
                            },
                            1200: {
                                slidesPerView: 3,
                                spaceBetween: 1
                            }
                        }}>
                        <SwiperSlide className="swiper-slide">
                            <div className="testimonial-item">
                                <div className="stars">
                                    <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
                                </div>
                                <p>
                                    Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                                </p>
                                <div className="profile mt-auto">
                                    <img src={test1} className="testimonial-img" alt="" />
                                    <h3>Saul Goodman</h3>
                                    <h4>Ceo &amp; Founder</h4>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <div className="testimonial-item">
                                <div className="stars">
                                    <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
                                </div>
                                <p>
                                    Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.
                                </p>
                                <div className="profile mt-auto">
                                    <img src={test2} className="testimonial-img" alt="" />
                                    <h3>Sara Wilsson</h3>
                                    <h4>Designer</h4>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <div className="testimonial-item">
                                <div className="stars">
                                    <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
                                </div>
                                <p>
                                    Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.
                                </p>
                                <div className="profile mt-auto">
                                    <img src={test3} className="testimonial-img" alt="" />
                                    <h3>Jena Karlis</h3>
                                    <h4>Store Owner</h4>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <div className="testimonial-item">
                                <div className="stars">
                                    <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
                                </div>
                                <p>
                                    Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.
                                </p>
                                <div className="profile mt-auto">
                                    <img src={test4} className="testimonial-img" alt="" />
                                    <h3>Matt Brandon</h3>
                                    <h4>Freelancer</h4>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <div className="testimonial-item">
                                <div className="stars">
                                    <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
                                </div>
                                <p>
                                    Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.
                                </p>
                                <div className="profile mt-auto">
                                    <img src={test5} className="testimonial-img" alt="" />
                                    <h3>John Larson</h3>
                                    <h4>Entrepreneur</h4>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                    <div className="custom-pagination"></div>
                </div>
            </div>
        </section>
    )
}

export default TestimonialsSection;