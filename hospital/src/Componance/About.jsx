import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import aboutimg from '../assets/img/about.jpg';

function About() {
  return (
    <div>
      <section id="about" className="about">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>About Us</h2>
            <p>
              Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.
            </p>
          </div>
          <div className="row">
            <div className="col-lg-6" data-aos="fade-right">
              <img src={aboutimg} className="img-fluid" alt="About" />
            </div>
            <div className="col-lg-6 pt-4 pt-lg-0 content" data-aos="fade-left">
              <h3>Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</h3>
              <p className="fst-italic">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <ul>
                <li><i className="fas fa-check-circle"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                <li><i className="fas fa-check-circle"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                <li><i className="fas fa-check-circle"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</li>
              </ul>
              <p>
                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Counts */}
      <section id="counts" className="counts">
        <div className="container" data-aos="fade-up">
          <div className="row no-gutters">
            <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
              <div className="count-box">
                <i className="fas fa-user-md"></i>
                <span data-purecounter-start="0" data-purecounter-end="85" data-purecounter-duration="1" className="purecounter"></span>
                <p><strong>Doctors</strong> consequuntur quae qui deca rode</p>
                <a href="#">Find out more &raquo;</a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
              <div className="count-box">
                <i className="fas fa-hospital"></i>
                <span data-purecounter-start="0" data-purecounter-end="26" data-purecounter-duration="1" className="purecounter"></span>
                <p><strong>Departments</strong> adipisci atque cum quia aut numquam delectus</p>
                <a href="#">Find out more &raquo;</a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
              <div className="count-box">
                <i className="fas fa-flask"></i>
                <span data-purecounter-start="0" data-purecounter-end="14" data-purecounter-duration="1" className="purecounter"></span>
                <p><strong>Research Lab</strong> aut commodi quaerat. Aliquam ratione</p>
                <a href="#">Find out more &raquo;</a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
              <div className="count-box">
                <i className="fas fa-award"></i>
                <span data-purecounter-start="0" data-purecounter-end="150" data-purecounter-duration="1" className="purecounter"></span>
                <p><strong>Awards</strong> rerum asperiores dolor molestiae doloribu</p>
                <a href="#">Find out more &raquo;</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
