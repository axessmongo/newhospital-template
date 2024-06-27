import React from 'react';
import logo from "../assets/img/logo/Logo.png"


const Header = () => {
  return (
    <header id="header" className="fixed-top">
      <div className=" d-flex align-items-center">
        <a href="index.html" className=" ">
          <img src={logo} className='logo1 mx-5' alt="" />
          
        </a>
        <h3 className='mx-2 mt-3 fw-bold '>Unity Health Center</h3>
        {/* Uncomment below if you prefer to use an image logo */}
        {/* <h1 className="logo me-auto"><a href="index.html">Medicio</a></h1> */}
        
        <nav id="navbar" className="navbar order-last ms-auto order-lg-0">
          <ul>
            <li><a className="nav-link scrollto" href="#hero">Home</a></li>
            <li><a className="nav-link scrollto" href="#about">About</a></li>
            <li><a className="nav-link scrollto" href="#services">Services</a></li>
            <li><a className="nav-link scrollto" href="#departments">Departments</a></li>
            <li><a className="nav-link scrollto" href="#doctors">Doctors</a></li>
            {/* <li className="dropdown">
              <a href="#"><span>Drop Down</span> <i className="bi bi-chevron-down"></i></a>
              <ul>
                <li><a href="#">Drop Down 1</a></li>
                <li className="dropdown">
                  <a href="#"><span>Deep Drop Down</span> <i className="bi bi-chevron-right"></i></a>
                  <ul>
                    <li><a href="#">Deep Drop Down 1</a></li>
                    <li><a href="#">Deep Drop Down 2</a></li>
                    <li><a href="#">Deep Drop Down 3</a></li>
                    <li><a href="#">Deep Drop Down 4</a></li>
                    <li><a href="#">Deep Drop Down 5</a></li>
                  </ul>
                </li>
                <li><a href="#">Drop Down 2</a></li>
                <li><a href="#">Drop Down 3</a></li>
                <li><a href="#">Drop Down 4</a></li>
              </ul>
            </li> */}
            <li><a className="nav-link scrollto" href="#contact">Contact</a></li>
          </ul>
          <i className="bi bi-list mobile-nav-toggle"></i>
        </nav>
        
        <a href="#appointment" className="appointment-btn scrollto">
          <span className="d-none d-md-inline">Make an</span> Appointment
        </a>
      </div>
    </header>
  );
}

export default Header;
