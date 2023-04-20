import "./index.css";
import footerLogo from '../../assets/images/FooterLogo.svg';

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer-wrapper">
          <a href="#" className="footer-logo">
            <img src={footerLogo} alt='footer logo' />
          </a>
          <div className="footer-links">
            <div>
              <h4>Doormat navigation</h4>
              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Menu</a></li>
                <li><a href="#">Reservations</a></li>
                <li><a href="#">Order Online</a></li>
                <li><a href="#">Login</a></li>
              </ul>
            </div>
            <div>
              <h4>Contacts</h4>
              <ul>
                <li><a href="#">Address</a></li>
                <li><a href="#">Phone number</a></li>
                <li><a href="#">Email</a></li>
              </ul>
            </div>
            <div>
              <h4>Social Media Links</h4>
              <ul>
                <li><a href="#">Facebook</a></li>
                <li><a href="#">LinkedIn</a></li>
                <li><a href="#">Twitter</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
