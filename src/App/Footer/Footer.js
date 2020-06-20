import React from 'react';
import './footer.css';
import SocialList from '../SocialList/SocialList';

function Footer() {
  return (
    <footer id="footer">
      <div className="row">
        <div className="footer-feedback">
          <h2>Feedback</h2>
          <h3>Your opinion is very important to me.</h3>
          <p>If you still have questions or want to offer me a job, use one of the ways to contact me</p>
        </div>
        <div className="contact-me">
          <div className="col-three">
            <i className="fa fa-mobile"></i>
            <h3>Phone</h3>
            <p>(+380) 98-832-80-26</p>
          </div>
          <div className="col-three"><i className="fa fa-envelope-o"></i>
            <h3>Email</h3>
            <p>ditritusa@gmail.com</p>
          </div>
          <div className="col-three"><i className="fa fa-map-marker"></i>
            <h3>Location</h3>
            <p>Ukraine, Kiev</p>
          </div>
        </div>
        <div className="footer-social-place">
          <div className="col-half">
            <span className="copyright">© Copyright Maksym Vinnytskyi 2020</span>
          </div>
          <div className="col-half">
            <SocialList className="footer-social transition-smooth"/>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
