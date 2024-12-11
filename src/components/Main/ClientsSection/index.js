import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import c1 from '../../../images/clients/client-1.png';
import c2 from '../../../images/clients/client-2.png';
import c3 from '../../../images/clients/client-3.png';
import c4 from '../../../images/clients/client-4.png';
import c5 from '../../../images/clients/client-5.png';
import c6 from '../../../images/clients/client-6.png';
import c7 from '../../../images/clients/client-7.png';
import c8 from '../../../images/clients/client-8.png';

const ClientsSection = () => {

    return (
        <section id="clients" className="clients section">
            <div className="container section-title" data-aos="fade-up">
                <h2>Clients</h2>
                <p>We work with best clients<br /></p>
            </div>
            <div className="container" data-aos="fade-up" data-aos-delay="100">
                <div className="swiper init-swiper">

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
                                slidesPerView: 2,
                                spaceBetween: 40
                            },
                            480: {
                                slidesPerView: 3,
                                spaceBetween: 60
                            },
                            640: {
                                slidesPerView: 4,
                                spaceBetween: 80
                            },
                            992: {
                                slidesPerView: 6,
                                spaceBetween: 120
                            }
                        }

                        }
                    >
                        <SwiperSlide className="swiper-slide"><img src={c1} className="img-fluid" alt="" /></SwiperSlide>
                        <SwiperSlide className="swiper-slide"><img src={c2} className="img-fluid" alt="" /></SwiperSlide>
                        <SwiperSlide className="swiper-slide"><img src={c3} className="img-fluid" alt="" /></SwiperSlide>
                        <SwiperSlide className="swiper-slide"><img src={c4} className="img-fluid" alt="" /></SwiperSlide>
                        <SwiperSlide className="swiper-slide"><img src={c5} className="img-fluid" alt="" /></SwiperSlide>
                        <SwiperSlide className="swiper-slide"><img src={c6} className="img-fluid" alt="" /></SwiperSlide>
                        <SwiperSlide className="swiper-slide"><img src={c7} className="img-fluid" alt="" /></SwiperSlide>
                        <SwiperSlide className="swiper-slide"><img src={c8} className="img-fluid" alt="" /></SwiperSlide>
                    </Swiper>
                    <div className="custom-pagination"></div>
                </div>
            </div>
        </section>
    )
}

export default ClientsSection;


