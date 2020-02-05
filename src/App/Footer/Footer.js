import React from 'react';
import './footer.css';
import SocialList from '../SocialList/SocialList';

function Footer() {
  return (
    <footer id="footer">
      <div className="row">
        <div className="footer-feedback">
          <h2>Обратная связь</h2>
          <h3>Ваше мнение очень важно для меня</h3>
          <p>Если у вас остались вопросы, или вы хотите предложить мне работу, воспользуйтесь одним из способов связи со мной</p>
        </div>
        <div className="contact-me">
          <div className="col-three">
            <i className="fa fa-mobile"></i>
            <h3>Телефон</h3>
            <p>(+380) 98-832-80-26</p>
          </div>
          <div className="col-three"><i className="fa fa-envelope-o"></i>
            <h3>Email</h3>
            <p>ditritusa@gmail.com</p>
          </div>
          <div className="col-three"><i className="fa fa-map-marker"></i>
            <h3>Локация</h3>
            <p>Украина, Киев</p>
          </div>
        </div>
        <div class="footer-social-place">
          <div class="col-half">
            <span className="copyright">© Copyright Max Vinnytskyi 2019</span>
          </div>
          <div class="col-half">
            <SocialList className="footer-social transition-smooth"/>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
