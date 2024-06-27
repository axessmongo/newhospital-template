import React from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';

function Service() {
  return (
    <div>

      {/* Services */}
      <section id="services" className="services services">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Services</h2>
            <p>
              Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum
              quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui
              impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.
            </p>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-6 icon-box" data-aos="zoom-in" data-aos-delay="100">
              
              <h4 className="title">
                <a href="#">General Medicine:</a>
              </h4>
              <p className="description">
              Comprehensive healthcare for all ages, including preventive care,
              diagnosis, and treatment of common illnesses.
              </p>
            </div>
            <div className="col-lg-4 col-md-6 icon-box" data-aos="zoom-in" data-aos-delay="200">
            
              <h4 className="title">
                <a href="#">Emergency Services:</a>
              </h4>
              <p className="description">
              Immediate and life-saving care available 24/7 for urgent medical
              situations.
              </p>
            </div>
            <div className="col-lg-4 col-md-6 icon-box" data-aos="zoom-in" data-aos-delay="300">
             
              <h4 className="title">
                <a href="#">Surgical Services:</a>
              </h4>
              <p className="description">
              Advanced surgical procedures performed by experienced surgeons
              using state-of-the-art technology.
              </p>
            </div>
            <div className="col-lg-4 col-md-6 icon-box" data-aos="zoom-in" data-aos-delay="100">
             
              <h4 className="title">
                <a href="#">Maternity Care:</a>
              </h4>
              <p className="description">
              Personalized care for expecting mothers, from prenatal to postnatal
              services, ensuring a safe and healthy pregnancy journey.
              </p>
            </div>
            <div className="col-lg-4 col-md-6 icon-box" data-aos="zoom-in" data-aos-delay="200">
             
              <h4 className="title">
                <a href="#">Pediatrics:</a>
              </h4>
              <p className="description">
              Specialized medical care for infants, children, and adolescents, focusing on
              their growth and development.
              </p>
            </div>
            <div className="col-lg-4 col-md-6 icon-box" data-aos="zoom-in" data-aos-delay="300">
              
              <h4 className="title">
                <a href="#">Cardiology: </a>
              </h4>
              <p className="description">
              Expert heart care, offering advanced treatments and diagnostics for
              cardiovascular conditions.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* Appointment */}
      <section id="appointment" class="appointment section-bg">
        <div class="container" data-aos="fade-up">
          <div class="section-title">
            <h2>Make an Appointment</h2>
            <p>
            Schedule your visit with our experienced medical professionals today. Call us at [phone number]
            or book online for convenient and prompt service.
            </p>
          </div>

          <form
            action="forms/appointment.php"
            method="post"
            role="form"
            class="php-email-form"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div class="row">
              <div class="col-md-4 form-group">
                <input
                  type="text"
                  name="name"
                  class="form-control"
                  id="name"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div class="col-md-4 form-group mt-3 mt-md-0">
                <input
                  type="email"
                  class="form-control"
                  name="email"
                  id="email"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div class="col-md-4 form-group mt-3 mt-md-0">
                <input
                  type="tel"
                  class="form-control"
                  name="phone"
                  id="phone"
                  placeholder="Your Phone"
                  required
                />
              </div>
            </div>
            <div class="row">
              <div class="col-md-4 form-group mt-3">
                <input
                  type="datetime"
                  name="date"
                  class="form-control datepicker"
                  id="date"
                  placeholder="Appointment Date"
                  required
                />
              </div>
              <div class="col-md-4 form-group mt-3">
                <select name="department" id="department" class="form-select">
                  <option value="">Select Department</option>
                  <option value="Department 1">Department 1</option>
                  <option value="Department 2">Department 2</option>
                  <option value="Department 3">Department 3</option>
                </select>
              </div>
              <div class="col-md-4 form-group mt-3">
                <select name="doctor" id="doctor" class="form-select">
                  <option value="">Select Doctor</option>
                  <option value="Doctor 1">Doctor 1</option>
                  <option value="Doctor 2">Doctor 2</option>
                  <option value="Doctor 3">Doctor 3</option>
                </select>
              </div>
            </div>

            <div class="form-group mt-3">
              <textarea
                class="form-control"
                name="message"
                rows="5"
                placeholder="Message (Optional)"
              ></textarea>
            </div>
            <div class="my-3">
              <div class="loading">Loading</div>
              <div class="error-message"></div>
              <div class="sent-message">
                Your appointment request has been sent successfully. Thank you!
              </div>
            </div>
            <div class="text-center">
              <button type="submit">Make an Appointment</button>
            </div>
          </form>
        </div>
      </section>

      
    </div>
  );
}

export default Service;
