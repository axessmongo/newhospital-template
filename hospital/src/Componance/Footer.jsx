import React from 'react'
import logo from "../assets/img/logo/Logo.png"
function Footer() {
  return (
    <div>
         <footer id="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="footer-info">
                <div>
                  <img src={logo} className='logo1' alt="" />
                </div>
                
                <p>
                  A108 Adam Street <br />
                  NY 535022, USA<br /><br />
                  <strong>Phone:</strong> +1 5589 55488 55<br />
                  <strong>Email:</strong> info@example.com<br />
                </p>
                <div className="social-links mt-3">
                  <a href="#" className="twitter"><i className="bx bxl-twitter"></i></a>
                  <a href="#" className="facebook"><i className="bx bxl-facebook"></i></a>
                  <a href="#" className="instagram"><i className="bx bxl-instagram"></i></a>
                  <a href="#" className="google-plus"><i className="bx bxl-skype"></i></a>
                  <a href="#" className="linkedin"><i className="bx bxl-linkedin"></i></a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li><i className="bx bx-chevron-right"></i> <a href="#">Home</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href="#">About us</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href="#">Services</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href="#">Terms of service</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href="#">Privacy policy</a></li>
              </ul>
            </div>


            <div className="col-lg-4 col-md-6 footer-newsletter">
              <h4>Our Newsletter</h4>
              <p>Stay informed with exclusive updates and offers through our newsletter.</p>
              <form action="" method="post">
                <input type="email" name="email" /><input type="submit" value="Subscribe" />
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="copyright">
         <p>Copyright UnityHealthCenter. All Rights Reserved</p>
        </div>
        <div className="credits">
        Designed by  <a href="https://axesstechnology.in/">Axess Technology</a>
        </div>
      </div>
    </footer>
    </div>
  )
}

export default Footer