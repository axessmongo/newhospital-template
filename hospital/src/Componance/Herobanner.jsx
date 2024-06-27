import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import slide1 from "../assets/img/slide/slide-1.jpg";
import slide2 from "../assets/img/slide/slide-2.jpg";
import slide3 from "../assets/img/slide/slide-3.jpg";

function Herobanner() {
  return (
    <div>
      <section id="hero">
        <div
          id="heroCarousel"
          className="carousel slide carousel-fade"
          data-bs-interval="5000"
          data-bs-ride="carousel"
        >
          <ol
            className="carousel-indicators"
            id="hero-carousel-indicators"
          ></ol>

          <div className="carousel-inner" role="listbox">
            <div
              className="carousel-item active"
              style={{ backgroundImage: `url(${slide1})` }}
            >
              <div className="container">
                <h2>
                  Welcome to <span>Unity Healthcare Center</span>
                </h2>
                <p>
                  At Unity Health Center, we prioritize your well-being with
                  compassionate care and advanced treatments. Our experienced
                  professionals and state-of-the-art technology ensure the best
                  possible outcomes for all our patients.
                </p>
                <a href="#about" className="btn-get-started scrollto">
                  Read More
                </a>
              </div>
            </div>

            <div
              className="carousel-item"
              style={{ backgroundImage: `url(${slide2})` }}
            >
              <div className="container">
                <h2>Lorem Ipsum Dolor</h2>
                <p>
                  Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut
                  et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem
                  mollitia ut. Similique ea voluptatem. Esse doloremque
                  accusamus repellendus deleniti vel.
                </p>
                <a href="#about" className="btn-get-started scrollto">
                  Read More
                </a>
              </div>
            </div>

            <div
              className="carousel-item"
              style={{ backgroundImage: `url(${slide3})` }}
            >
              <div className="container">
                <h2>Sequi ea ut et est quaerat</h2>
                <p>
                  Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut
                  et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem
                  mollitia ut. Similique ea voluptatem. Esse doloremque
                  accusamus repellendus deleniti vel.
                </p>
                <a href="#about" className="btn-get-started scrollto">
                  Read More
                </a>
              </div>
            </div>
          </div>

          <a
            className="carousel-control-prev"
            href="#heroCarousel"
            role="button"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon bi bi-chevron-left"
              aria-hidden="true"
            ></span>
          </a>

          <a
            className="carousel-control-next"
            href="#heroCarousel"
            role="button"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon bi bi-chevron-right"
              aria-hidden="true"
            ></span>
          </a>
        </div>
      </section>
    </div>
  );
}

export default Herobanner;
