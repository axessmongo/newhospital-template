import React from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';

function Featured() {
  return (
    <div>
         <section id="featured-services" className="featured-services">
      <div className="container" data-aos="fade-up">
        <div className="row">
          <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
            <div className="icon-box" data-aos="fade-up" data-aos-delay="100">
              {/* <div className="icon"><i className="fas fa-heartbeat"></i></div> */}
              <h4 className="title"><a href="">Expert Medical Team</a></h4>
              <p className="description">Our dedicated doctors and medical staff bring years of expertise to provide the highest quality
              care for our patients.</p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
            <div className="icon-box" data-aos="fade-up" data-aos-delay="200">
              {/* <div className="icon"><i className="fas fa-pills"></i></div> */}
              <h4 className="title"><a href="">Advanced Technology</a></h4>
              <p className="description">Equipped with state-of-the-art medical equipment, we offer cutting-edge treatments and
              accurate diagnostics.</p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
            <div className="icon-box" data-aos="fade-up" data-aos-delay="300">
              {/* <div className="icon"><i className="fas fa-thermometer"></i></div> */}
              <h4 className="title"><a href="">Comprehensive Services</a></h4>
              <p className="description">From general medicine to specialized care, we provide a wide range of healthcare services
              under one roof.</p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
            <div className="icon-box" data-aos="fade-up" data-aos-delay="400">
              {/* <div className="icon"><i className="fas fa-dna"></i></div> */}
              <h4 className="title"><a href="">Patient-Centered Approach</a></h4>
              <p className="description">We focus on personalized care, ensuring each patient receives the attention and treatment they
              deserve.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="cta" className="cta">
      <div className="container" data-aos="zoom-in">
        <div className="text-center">
          <h3>In an Emergency? Need Help Now?</h3>
          <p>Unity Health Center is here for you 24/7. Our emergency services provide immediate and
life-saving care with a team of experienced professionals and advanced medical technology. For
urgent medical assistance, call us at [emergency contact number] or visit our emergency
department without delay.</p>
          <a className="cta-btn scrollto" href="#appointment">Make an Appointment</a>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Featured