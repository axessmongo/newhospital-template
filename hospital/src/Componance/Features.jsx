import React from 'react'
import 'boxicons/css/boxicons.min.css';

import featureimg from '../assets/img/features.jpg'

function Features() {
  return (
    <div>
        <section id="features" className="features">
      <div className="container" data-aos="fade-up">
        <div className="row">
          <div className="col-lg-6 order-2 order-lg-1" data-aos="fade-right">
            <div className="icon-box mt-5 mt-lg-0">
              <i className="bx bx-receipt"></i>
              <h4>State-of-the-Art Equipment:</h4>
              <p>Our lab is equipped with the latest technology to ensure
              accurate and timely diagnostics.</p>
            </div>
            <div className="icon-box mt-5">
              <i className="bx bx-cube-alt"></i>
              <h4>Experienced Technicians:</h4>
              <p>Skilled and certified lab technicians who ensure precise and
              reliable test results.</p>
            </div>
            <div className="icon-box mt-5">
              <i className="bx bx-images"></i>
              <h4>Comprehensive Testing:</h4>
              <p>Wide range of diagnostic tests available, covering everything
              from routine blood work to specialized screenings.</p>
            </div>
            <div className="icon-box mt-5">
              <i className="bx bx-shield"></i>
              <h4>Rapid Results:</h4>
              <p>Fast turnaround times for test results, allowing for prompt diagnosis and
              treatment.</p>
            </div>
          </div>
          <div className="image col-lg-6 order-1 order-lg-2" style={{ backgroundImage: `url(${featureimg})` }} data-aos="zoom-in"></div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Features