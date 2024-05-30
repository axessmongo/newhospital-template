import React from "react";

function Service() {
  return (
    <div>
      <section id="services" className="services">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Services</h2>
            <p>
              Magnam dolores commodi suscipit. Necessitatibus eius consequatur
              ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
              quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
              Quia fugiat sit in iste officiis commodi quidem hic quas.
            </p>
          </div>
          {/* <div className="row">
          <ServiceBox iconClass="fas fa-heartbeat" title="Lorem Ipsum" description="Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident" />
          <ServiceBox iconClass="fas fa-pills" title="Dolor Sitema" description="Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata" />
          <ServiceBox iconClass="fas fa-hospital-user" title="Sed ut perspiciatis" description="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur" />
          <ServiceBox iconClass="fas fa-dna" title="Magni Dolores" description="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum" />
          <ServiceBox iconClass="fas fa-wheelchair" title="Nemo Enim" description="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque" />
          <ServiceBox iconClass="fas fa-notes-medical" title="Eiusmod Tempor" description="Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi" />
        </div> */}
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
