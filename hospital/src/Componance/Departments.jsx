import React from 'react';
import departmentImg1 from '../assets/img/departments-1.jpg';
import departmentImg2 from '../assets/img/departments-2.jpg';
import departmentImg3 from '../assets/img/departments-3.jpg';
import departmentImg4 from '../assets/img/departments-4.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function Departments() {
    return (
        <section id="departments" className="departments">
            <div className="container" data-aos="fade-up">
                <div className="section-title">
                    <h2>Departments</h2>
                    <p>
                        Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum
                        quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit
                        suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.
                    </p>
                </div>

                <div className="row" data-aos="fade-up" data-aos-delay="100">
                    <div className="col-lg-4 mb-5 mb-lg-0">
                        <ul className="nav nav-tabs flex-column">
                            <li className="nav-item">
                                <a className="nav-link active show" data-bs-toggle="tab" data-bs-target="#tab-1">
                                    <h4>Cardiology</h4>
                                    <p>Quis excepturi porro totam sint earum quo nulla perspiciatis eius.</p>
                                </a>
                            </li>
                            <li className="nav-item mt-2">
                                <a className="nav-link" data-bs-toggle="tab" data-bs-target="#tab-2">
                                    <h4>Neurology</h4>
                                    <p>Voluptas vel esse repudiandae quo excepturi.</p>
                                </a>
                            </li>
                            <li className="nav-item mt-2">
                                <a className="nav-link" data-bs-toggle="tab" data-bs-target="#tab-3">
                                    <h4>Hepatology</h4>
                                    <p>Velit veniam ipsa sit nihil blanditiis mollitia natus.</p>
                                </a>
                            </li>
                            <li className="nav-item mt-2">
                                <a className="nav-link" data-bs-toggle="tab" data-bs-target="#tab-4">
                                    <h4>Pediatrics</h4>
                                    <p>Ratione hic sapiente nostrum doloremque illum nulla praesentium id</p>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-8">
                        <div className="tab-content">
                            <div className="tab-pane active show" id="tab-1">
                                <h3>Cardiology</h3>
                                <p className="fst-italic">
                                    Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a
                                    videna mareta paulona marka
                                </p>
                                <img src={departmentImg1} alt="Cardiology" className="img-fluid" />
                                <p>
                                    Et nobis maiores eius. Voluptatibus ut enim blanditiis atque harum sint. Laborum eos
                                    ipsum ipsa odit magni. Incidunt hic ut molestiae aut qui. Est repellat minima
                                    eveniet eius et quis magni nihil. Consequatur dolorem quaerat quos qui similique
                                    accusamus nostrum rem vero
                                </p>
                            </div>
                            <div className="tab-pane" id="tab-2">
                                <h3>Neurology</h3>
                                <p className="fst-italic">
                                    Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a
                                    videna mareta paulona marka
                                </p>
                                <img src={departmentImg2} alt="Neurology" className="img-fluid" />
                                <p>
                                    Et nobis maiores eius. Voluptatibus ut enim blanditiis atque harum sint. Laborum eos
                                    ipsum ipsa odit magni. Incidunt hic ut molestiae aut qui. Est repellat minima
                                    eveniet eius et quis magni nihil. Consequatur dolorem quaerat quos qui similique
                                    accusamus nostrum rem vero
                                </p>
                            </div>
                            <div className="tab-pane" id="tab-3">
                                <h3>Hepatology</h3>
                                <p className="fst-italic">
                                    Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a
                                    videna mareta paulona marka
                                </p>
                                <img src={departmentImg3} alt="Hepatology" className="img-fluid" />
                                <p>
                                    Et nobis maiores eius. Voluptatibus ut enim blanditiis atque harum sint. Laborum eos
                                    ipsum ipsa odit magni. Incidunt hic ut molestiae aut qui. Est repellat minima
                                    eveniet eius et quis magni nihil. Consequatur dolorem quaerat quos qui similique
                                    accusamus nostrum rem vero
                                </p>
                            </div>
                            <div className="tab-pane" id="tab-4">
                                <h3>Pediatrics</h3>
                                <p className="fst-italic">
                                    Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a
                                    videna mareta paulona marka
                                </p>
                                <img src={departmentImg4} alt="Pediatrics" className="img-fluid" />
                                <p>
                                    Et nobis maiores eius. Voluptatibus ut enim blanditiis atque harum sint. Laborum eos
                                    ipsum ipsa odit magni. Incidunt hic ut molestiae aut qui. Est repellat minima
                                    eveniet eius et quis magni nihil. Consequatur dolorem quaerat quos qui similique
                                    accusamus nostrum rem vero
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
