import { useState } from 'react';
import './index.css';
import { Routes, Route, Link, Router } from "react-router-dom";
import Homepage from '../../pages/Homepage';
import Reservations from '../../pages/Reservations';

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
          <li><Link to="/" onClick={onLink}>Home</Link></li>
          <li><Link to="/" onClick={onLink}>About</Link></li>
          <li><Link to="/" onClick={onLink}>Menu</Link></li>
          <li><Link to="/reservations" onClick={onLink}>Reservations</Link></li>
          <li><Link to="/reservations" onClick={onLink}>Order Online</Link></li>
          <li><Link to="/" onClick={onLink}>Login</Link></li>
        </ul>
      </nav>
    </>
  );
}

export default Nav;
