import './index.css';
import logo from '../../assets/images/Logo.svg';
import Nav from "../Nav";

function Header() {
  return (
    <>
      <header>
        <div>
          <h1 className="logo">
            <a href="#">
              <img src={logo} alt="Little Lemon logo" />
              Little Lemon
            </a>
          </h1>
          <Nav />
        </div>
      </header>
    </>
  );
}

export default Header;
