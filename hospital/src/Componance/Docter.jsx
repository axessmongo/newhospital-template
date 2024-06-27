import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import doc1 from "../assets/img/doctors/doctors-1.jpg"
import doc2 from "../assets/img/doctors/doctors-2.jpg"
import doc3 from "../assets/img/doctors/doctors-3.jpg"
import doc4 from "../assets/img/doctors/doctors-4.jpg"

// import 'your-css-file.css';

function Docter() {
    useEffect(() => {
        AOS.init({ duration: 1000 });
      }, []);
  return (
    <div>
<section id="doctors" className="doctors section-bg">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Doctors</h2>
          <p>
          Meet our skilled team of doctors committed to delivering compassionate care and exceptional
          medical expertise.
          </p>
        </div>

        <div className="row">
          <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
            <div className="member" data-aos="fade-up" data-aos-delay="100">
              <div className="member-img">
                {/* <img
                  src={doc1}
                  className="img-fluid"
                  alt="Doctor 1"
                /> */}
                <div className="social">
                  <a href="#"><i className="bi bi-twitter"></i></a>
                  <a href="#"><i className="bi bi-facebook"></i></a>
                  <a href="#"><i className="bi bi-instagram"></i></a>
                  <a href="#"><i className="bi bi-linkedin"></i></a>
                </div>
              </div>
              <div className="member-info">
                <h4>Dr. Ananya Sharma</h4>
                <span>- Cardiologist</span>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
            <div className="member" data-aos="fade-up" data-aos-delay="200">
              <div className="member-img">
                {/* <img
                  src={doc2}
                  className="img-fluid"
                  alt="Doctor 2"
                /> */}
                <div className="social">
                  <a href="#"><i className="bi bi-twitter"></i></a>
                  <a href="#"><i className="bi bi-facebook"></i></a>
                  <a href="#"><i className="bi bi-instagram"></i></a>
                  <a href="#"><i className="bi bi-linkedin"></i></a>
                </div>
              </div>
              <div className="member-info">
                <h4>Dr. Vikram Singh</h4>
                <span>Neurologist</span>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
            <div className="member" data-aos="fade-up" data-aos-delay="300">
              <div className="member-img">
                {/* <img
                  src={doc3}
                  className="img-fluid"
                  alt="Doctor 3"
                /> */}
                <div className="social">
                  <a href="#"><i className="bi bi-twitter"></i></a>
                  <a href="#"><i className="bi bi-facebook"></i></a>
                  <a href="#"><i className="bi bi-instagram"></i></a>
                  <a href="#"><i className="bi bi-linkedin"></i></a>
                </div>
              </div>
              <div className="member-info">
                <h4>Dr. Nandini Patel</h4>
                <span>Hepatologist</span>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
            <div className="member" data-aos="fade-up" data-aos-delay="400">
              <div className="member-img">
                {/* <img
                  src={doc4}
                  className="img-fluid"
                  alt="Doctor 4"
                /> */}
                <div className="social">
                  <a href="#"><i className="bi bi-twitter"></i></a>
                  <a href="#"><i className="bi bi-facebook"></i></a>
                  <a href="#"><i className="bi bi-instagram"></i></a>
                  <a href="#"><i className="bi bi-linkedin"></i></a>
                </div>
              </div>
              <div className="member-info">
                <h4>Dr. Rahul Mehta</h4>
                <span>Pediatrician</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Docter