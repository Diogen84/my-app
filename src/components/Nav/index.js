import { useState } from 'react';
import './index.css';

function Nav() {
  const [open, setOpen] = useState(false);
  const onHamburgerClick = () => {
    setOpen(!open);
  };
  const onLink = () => {
    setOpen(false);
  };
  const openerClass = open ? 'opened' : '';

  return (
    <>
      <button className={`hamburger ${openerClass}`} onClick={onHamburgerClick}>Open/Close menu</button>
      <nav>
        <ul>
          <li><a href="#" onClick={onLink}>Home</a></li>
          <li><a href="#" onClick={onLink}>About</a></li>
          <li><a href="#" onClick={onLink}>Menu</a></li>
          <li><a href="#" onClick={onLink}>Reservations</a></li>
          <li><a href="#" onClick={onLink}>Order Online</a></li>
          <li><a href="#" onClick={onLink}>Login</a></li>
        </ul>
      </nav>
    </>
  );
}

export default Nav;
