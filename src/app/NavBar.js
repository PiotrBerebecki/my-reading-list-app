import React from 'react';

import NavBarHeader from './NavBarHeader';
import Nav from './Nav';
import './NavBar.css';


const NavBar = () => (
  <nav className="nav">
    <div className="nav__container">
      <NavBarHeader />
      <Nav />
    </div>
  </nav>
);


export default NavBar;
