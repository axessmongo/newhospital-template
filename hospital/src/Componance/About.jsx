import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import aboutimg from "../assets/img/about.jpg";

function About() {
  return (
    <div>
      <section id="about" className="about">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>About Us</h2>
            <p>
              At Unity Health Center, we are committed to delivering top-quality
              medical care with compassion and excellence. Our experienced team
              utilizes advanced technology to ensure the best outcomes for our
              patients. Your health and well-being are our top priorities, and
              we strive to provide comprehensive and personalized healthcare
              services.
            </p>
          </div>
          <div className="row">
            <div className="col-lg-6" data-aos="fade-right">
              <img src={aboutimg} className="img-fluid" alt="About" />
            </div>
            <div className="col-lg-6 pt-4 pt-lg-0 content" data-aos="fade-left">
              <h3>Our Approach to Treatment</h3>
              <p className="fst-italic">
                At Unity Health Center, we adopt a holistic and patient-centered
                approach to treatment. We believe in personalized care plans
                that cater to the unique needs of each individual.
              </p>
              <ul>
                <li>
                  <i className="fas fa-check-circle"></i><span className="fw-bold"> Individualized Care
                  Plans:</span> Tailored treatment plans designed to meet each
                  patient's specific needs and conditions.
                </li>
                <li>
                  <i className="fas fa-check-circle"></i><span className="fw-bold"> Collaborative
                  Teamwork:</span>  Multidisciplinary teams working together to provide
                  comprehensive and cohesive care.
                </li>
                <li>
                  <i className="fas fa-check-circle"></i><span className="fw-bold"> Continuous Monitoring:</span> 
                  Regular follow-ups and monitoring to adjust treatments as
                  needed for optimal results.
                </li>
              </ul>
              <p>
                Our approach ensures that every patient receives attentive,
                personalized care. We prioritize open communication and patient
                education, empowering you to take an active role in your health
                journey. At Unity Health Center, your well-being is our mission.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Counts */}
      {/* <section id="counts" className="counts">
        <div className="container" data-aos="fade-up">
          <div className="row no-gutters">
            <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
              <div className="count-box">
                <i className="fas fa-user-md"></i>
                <span
                  data-purecounter-start="0"
                  data-purecounter-end="85"
                  data-purecounter-duration="1"
                  className="purecounter"
                ></span>
                <p>
                  <strong>Doctors</strong> consequuntur quae qui deca rode
                </p>
                <a href="#">Find out more &raquo;</a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
              <div className="count-box">
                <i className="fas fa-hospital"></i>
                <span
                  data-purecounter-start="0"
                  data-purecounter-end="26"
                  data-purecounter-duration="1"
                  className="purecounter"
                ></span>
                <p>
                  <strong>Departments</strong> adipisci atque cum quia aut
                  numquam delectus
                </p>
                <a href="#">Find out more &raquo;</a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
              <div className="count-box">
                <i className="fas fa-flask"></i>
                <span
                  data-purecounter-start="0"
                  data-purecounter-end="14"
                  data-purecounter-duration="1"
                  className="purecounter"
                ></span>
                <p>
                  <strong>Research Lab</strong> aut commodi quaerat. Aliquam
                  ratione
                </p>
                <a href="#">Find out more &raquo;</a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
              <div className="count-box">
                <i className="fas fa-award"></i>
                <span
                  data-purecounter-start="0"
                  data-purecounter-end="150"
                  data-purecounter-duration="1"
                  className="purecounter"
                ></span>
                <p>
                  <strong>Awards</strong> rerum asperiores dolor molestiae
                  doloribu
                </p>
                <a href="#">Find out more &raquo;</a>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
}

export default About;
