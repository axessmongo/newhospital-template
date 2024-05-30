import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

import testimonialImg1 from '../assets/img/testimonials/testimonials-1.jpg';
import testimonialImg2 from '../assets/img/testimonials/testimonials-2.jpg';
import testimonialImg3 from '../assets/img/testimonials/testimonials-3.jpg';
import testimonialImg4 from '../assets/img/testimonials/testimonials-4.jpg';
import testimonialImg5 from '../assets/img/testimonials/testimonials-5.jpg';

function Testimonials() {
    return (

        <>


            <section id="testimonials" className="testimonials">
                <div className="container" data-aos="fade-up">
                    <div className="section-title">
                        <h2>Testimonials</h2>
                        <p>
                            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum
                            quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit
                            suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.
                        </p>
                    </div>

                    <div className="testimonials-slider swiper" data-aos="fade-up" data-aos-delay="100">
                        <Swiper
                            spaceBetween={30}
                            pagination={{ clickable: true }}
                            modules={[Pagination]}
                            className="swiper-wrapper"
                        >
                            <SwiperSlide className="swiper-slide">
                                <div className="testimonial-item">
                                    <p>
                                        <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                                        Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus.
                                        Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                                        <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                                    </p>
                                    <img src={testimonialImg1} className="testimonial-img" alt="Saul Goodman" />
                                    <h3>Saul Goodman</h3>
                                    <h4>Ceo &amp; Founder</h4>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide className="swiper-slide">
                                <div className="testimonial-item">
                                    <p>
                                        <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                                        Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum
                                        eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.
                                        <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                                    </p>
                                    <img src={testimonialImg2} className="testimonial-img" alt="Sara Wilsson" />
                                    <h3>Sara Wilsson</h3>
                                    <h4>Designer</h4>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide className="swiper-slide">
                                <div className="testimonial-item">
                                    <p>
                                        <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                                        Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis
                                        minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.
                                        <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                                    </p>
                                    <img src={testimonialImg3} className="testimonial-img" alt="Jena Karlis" />
                                    <h3>Jena Karlis</h3>
                                    <h4>Store Owner</h4>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide className="swiper-slide">
                                <div className="testimonial-item">
                                    <p>
                                        <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                                        Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim
                                        velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.
                                        <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                                    </p>
                                    <img src={testimonialImg4} className="testimonial-img" alt="Matt Brandon" />
                                    <h3>Matt Brandon</h3>
                                    <h4>Freelancer</h4>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide className="swiper-slide">
                                <div className="testimonial-item">
                                    <p>
                                        <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                                        Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam
                                        enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.
                                        <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                                    </p>
                                    <img src={testimonialImg5} className="testimonial-img" alt="John Larson" />
                                    <h3>John Larson</h3>
                                    <h4>Entrepreneur</h4>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                        <div className="swiper-pagination"></div>
                    </div>
                </div>
            </section>



        </>
    );
}

export default Testimonials;
