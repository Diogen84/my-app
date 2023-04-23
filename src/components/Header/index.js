import './index.css';
import logo from '../../assets/images/Logo.svg';
import Nav from "../Nav";
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
      <header>
        <div>
          <h1 className="logo">
            <Link to="/">
              <img src={logo} alt="Little Lemon logo" />
              Little Lemon
            </Link>
          </h1>
          <Nav />
        </div>
      </header>
    </>
  );
}

export default Header;
