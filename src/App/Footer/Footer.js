import React from 'react';
import './footer.css';

function Footer() {
  return (
    <footer id="footer">
      <div className="row">
        <div className="footer-feedback">
          <h2>Обратная связь</h2>
          <h3>Ваше мнение очень важно для меня</h3>
          <p>Если у вас остались вопросы, или вы хотите предложить мне работу, воспользуйтесь одним из способов связи со мной</p>
        </div>
        <div class="footer-social-place">
          <div class="col-half">
              <span className="copyright">© Copyright Max Vinnytskyi 2019</span>
          </div>
          <div class="col-half">
            <ul className="footer-social transition-smooth">
              <li><a href="viber://chat?number=+380988328026" title="viber" target="_blank" rel="noopener noreferrer">
                <i className="fa fa-phone"></i></a></li>
              <li><a href="https://t.me/wearenumber_n7" title="telegram" target="_blank" rel="noopener noreferrer">
                <i className="fa fa-telegram"></i></a></li>
              <li><a href="mailto:ditritusa@gmail.com" title="mail" target="_blank" rel="noopener noreferrer">
                <i className="fa fa-envelope-open"></i></a></li>
              <li><a href="https://www.facebook.com/max.shepard.739" title="facebook" target="_blank" rel="noopener noreferrer">
                <i className="fa fa-facebook-square"></i></a></li>
              <li><a href="https://www.linkedin.com/in/maksym-vinnytskyi" title="linkedin" target="_blank" rel="noopener noreferrer">
                <i className="fa fa-linkedin"></i></a></li>
              <li><a href="https://github.com/n7-remax" title="github" target="_blank" rel="noopener noreferrer">
                <i className="fa fa-github"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
