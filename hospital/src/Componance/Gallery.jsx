import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'swiper/css';
import 'swiper/css/pagination';

function Gallery() {
    useEffect(() => {
        AOS.init({ duration: 1000 });
      }, []);
    
  return (
    <div>
<section id="gallery" className="gallery">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Gallery</h2>
          <p>
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum
            quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui
            impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.
          </p>
        </div>

        <div className="gallery-slider swiper">
          <Swiper
            modules={[Pagination]}
            pagination={{ clickable: true }}
            className="swiper-wrapper align-items-center"
          >
            <SwiperSlide className="swiper-slide">
              <a className="gallery-lightbox" href="assets/img/gallery/gallery-1.jpg">
                <img
                  src="assets/img/gallery/gallery-1.jpg"
                  className="img-fluid"
                  alt="Gallery 1"
                />
              </a>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <a className="gallery-lightbox" href="assets/img/gallery/gallery-2.jpg">
                <img
                  src="assets/img/gallery/gallery-2.jpg"
                  className="img-fluid"
                  alt="Gallery 2"
                />
              </a>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <a className="gallery-lightbox" href="assets/img/gallery/gallery-3.jpg">
                <img
                  src="assets/img/gallery/gallery-3.jpg"
                  className="img-fluid"
                  alt="Gallery 3"
                />
              </a>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <a className="gallery-lightbox" href="assets/img/gallery/gallery-4.jpg">
                <img
                  src="assets/img/gallery/gallery-4.jpg"
                  className="img-fluid"
                  alt="Gallery 4"
                />
              </a>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <a className="gallery-lightbox" href="assets/img/gallery/gallery-5.jpg">
                <img
                  src="assets/img/gallery/gallery-5.jpg"
                  className="img-fluid"
                  alt="Gallery 5"
                />
              </a>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <a className="gallery-lightbox" href="assets/img/gallery/gallery-6.jpg">
                <img
                  src="assets/img/gallery/gallery-6.jpg"
                  className="img-fluid"
                  alt="Gallery 6"
                />
              </a>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <a className="gallery-lightbox" href="assets/img/gallery/gallery-7.jpg">
                <img
                  src="assets/img/gallery/gallery-7.jpg"
                  className="img-fluid"
                  alt="Gallery 7"
                />
              </a>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <a className="gallery-lightbox" href="assets/img/gallery/gallery-8.jpg">
                <img
                  src="assets/img/gallery/gallery-8.jpg"
                  className="img-fluid"
                  alt="Gallery 8"
                />
              </a>
            </SwiperSlide>
          </Swiper>
          <div className="swiper-pagination"></div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Gallery