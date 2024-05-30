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
              <div className="icon">
                <i className="fas fa-heartbeat"></i>
              </div>
              <h4 className="title">
                <a href="#">Lorem Ipsum</a>
              </h4>
              <p className="description">
                Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint
                occaecati cupiditate non provident
              </p>
            </div>
            <div className="col-lg-4 col-md-6 icon-box" data-aos="zoom-in" data-aos-delay="200">
              <div className="icon">
                <i className="fas fa-pills"></i>
              </div>
              <h4 className="title">
                <a href="#">Dolor Sitema</a>
              </h4>
              <p className="description">
                Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat tarad limino ata
              </p>
            </div>
            <div className="col-lg-4 col-md-6 icon-box" data-aos="zoom-in" data-aos-delay="300">
              <div className="icon">
                <i className="fas fa-hospital-user"></i>
              </div>
              <h4 className="title">
                <a href="#">Sed ut perspiciatis</a>
              </h4>
              <p className="description">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur
              </p>
            </div>
            <div className="col-lg-4 col-md-6 icon-box" data-aos="zoom-in" data-aos-delay="100">
              <div className="icon">
                <i className="fas fa-dna"></i>
              </div>
              <h4 className="title">
                <a href="#">Magni Dolores</a>
              </h4>
              <p className="description">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum
              </p>
            </div>
            <div className="col-lg-4 col-md-6 icon-box" data-aos="zoom-in" data-aos-delay="200">
              <div className="icon">
                <i className="fas fa-wheelchair"></i>
              </div>
              <h4 className="title">
                <a href="#">Nemo Enim</a>
              </h4>
              <p className="description">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
                voluptatum deleniti atque
              </p>
            </div>
            <div className="col-lg-4 col-md-6 icon-box" data-aos="zoom-in" data-aos-delay="300">
              <div className="icon">
                <i className="fas fa-notes-medical"></i>
              </div>
              <h4 className="title">
                <a href="#">Eiusmod Tempor</a>
              </h4>
              <p className="description">
                Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum
                soluta nobis est eligendi
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
              Magnam dolores commodi suscipit. Necessitatibus eius consequatur
              ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
              quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
              Quia fugiat sit in iste officiis commodi quidem hic quas.
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
