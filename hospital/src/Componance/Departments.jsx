import React from "react";
import departmentImg1 from "../assets/img/departments-1.jpg";
import departmentImg2 from "../assets/img/departments-2.jpg";
import departmentImg3 from "../assets/img/departments-3.jpg";
import departmentImg4 from "../assets/img/departments-4.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function Departments() {
  return (
    <section id="departments" className="departments">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Departments</h2>
          <p>
            Explore our specialized medical departments, each dedicated to
            providing expert care and personalized treatment options.
          </p>
        </div>

        <div className="row" data-aos="fade-up" data-aos-delay="100">
          <div className="col-lg-4 mb-5 mb-lg-0">
            <ul className="nav nav-tabs flex-column">
              <li className="nav-item">
                <a
                  className="nav-link active show"
                  data-bs-toggle="tab"
                  data-bs-target="#tab-1"
                >
                  <h4>Cardiology</h4>
                  <p>
                    Expert care for heart health, offering advanced treatments
                    and diagnostics to ensure cardiovascular wellness.
                  </p>
                </a>
              </li>
              <li className="nav-item mt-2">
                <a
                  className="nav-link"
                  data-bs-toggle="tab"
                  data-bs-target="#tab-2"
                >
                  <h4>Neurology</h4>
                  <p>
                    Specialized care for neurological disorders, providing
                    comprehensive diagnosis and treatment plans tailored to
                    individual needs.
                  </p>
                </a>
              </li>
              <li className="nav-item mt-2">
                <a
                  className="nav-link"
                  data-bs-toggle="tab"
                  data-bs-target="#tab-3"
                >
                  <h4>Hepatology</h4>
                  <p>
                    Dedicated to liver health, our hepatology department offers
                    specialized care and management of liver diseases.
                  </p>
                </a>
              </li>
              <li className="nav-item mt-2">
                <a
                  className="nav-link"
                  data-bs-toggle="tab"
                  data-bs-target="#tab-4"
                >
                  <h4>Pediatrics</h4>
                  <p>
                    Focused on the health and well-being of children, offering
                    compassionate care and comprehensive medical services for
                    infants to adolescents.
                  </p>
                </a>
              </li>
            </ul>
          </div>
          <div className="col-lg-8">
            <div className="tab-content">
              <div className="tab-pane active show" id="tab-1">
                <h3>Cardiology</h3>

                <img
                  src={departmentImg1}
                  alt="Cardiology"
                  className="img-fluid"
                />
                <p>
                  Cardiology is the medical specialty focused on diagnosing and
                  treating heart and blood vessel disorders. It encompasses
                  various conditions, including coronary artery disease, heart
                  failure, arrhythmias, and congenital heart defects.
                  Cardiologists use diagnostic tools like echocardiograms,
                  stress tests, and cardiac catheterization to assess heart
                  health. Treatment options range from lifestyle changes and
                  medications to surgical procedures like angioplasty and heart
                  transplants. Preventive cardiology emphasizes managing risk
                  factors such as hypertension, high cholesterol, and smoking to
                  reduce the incidence of heart disease.
                </p>
              </div>
              <div className="tab-pane" id="tab-2">
                <h3>Neurology</h3>

                <img
                  src={departmentImg2}
                  alt="Neurology"
                  className="img-fluid"
                />
                <p>
                  Neurology is the medical specialty dedicated to diagnosing and
                  treating disorders of the nervous system, including the brain,
                  spinal cord, and peripheral nerves. Neurologists manage
                  conditions such as stroke, epilepsy, Parkinson's disease,
                  multiple sclerosis, and migraines. Diagnostic tools include
                  MRI, CT scans, EEG, and lumbar punctures to assess
                  neurological function. Treatments may involve medications,
                  physical therapy, lifestyle modifications, and sometimes
                  surgical interventions. Preventive neurology focuses on
                  reducing risk factors for neurological disorders through
                  measures like controlling blood pressure, managing diabetes,
                  and promoting a healthy lifestyle.
                </p>
              </div>
              <div className="tab-pane" id="tab-3">
                <h3>Hepatology</h3>

                <img
                  src={departmentImg3}
                  alt="Hepatology"
                  className="img-fluid"
                />
                <p>
                  Hepatology is the branch of medicine focused on the study,
                  diagnosis, and treatment of liver, gallbladder, biliary tree,
                  and pancreas disorders. Hepatologists manage conditions such
                  as hepatitis, cirrhosis, liver cancer, fatty liver disease,
                  and liver transplantation. Diagnostic tools include liver
                  function tests, imaging studies like ultrasound and MRI, and
                  liver biopsies. Treatment options range from antiviral
                  medications and lifestyle changes to surgical interventions.
                  Preventive hepatology emphasizes vaccination, avoiding
                  excessive alcohol consumption, maintaining a healthy weight,
                  and reducing the risk of liver infections to prevent liver
                  disease.
                </p>
              </div>
              <div className="tab-pane" id="tab-4">
                <h3>Pediatrics</h3>

                <img
                  src={departmentImg4}
                  alt="Pediatrics"
                  className="img-fluid"
                />
                <p>
                  Pediatrics is the medical specialty dedicated to the health
                  and medical care of infants, children, and adolescents.
                  Pediatricians diagnose and treat a wide range of conditions,
                  from common illnesses and infections to chronic diseases and
                  developmental disorders. Preventive care is a cornerstone of
                  pediatrics, including vaccinations, regular health check-ups,
                  and guidance on nutrition and safety. Pediatricians also
                  monitor growth and development, ensuring that children meet
                  appropriate milestones. They work closely with families to
                  provide comprehensive care, addressing physical, emotional,
                  and social aspects of a child's health.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Departments;
