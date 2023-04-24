import "./index.css";
import footerLogo from '../../assets/images/FooterLogo.svg';
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer-wrapper">
          <Link to="/" className="footer-logo">
            <img src={footerLogo} alt='footer logo' />
          </Link>
          <div className="footer-links">
            <div>
              <h4>Doormat navigation</h4>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/">About</Link></li>
                <li><Link to="/">Menu</Link></li>
                <li><Link to="/reservations">Reservations</Link></li>
                <li><Link to="/reservations">Order Online</Link></li>
                <li><Link to="/">Login</Link></li>
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
