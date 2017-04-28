import React from 'react';
import { NavLink } from 'react-router-dom';

import './NavBarHeader.css';
import Logo from './Logo';
// import SearchForm from './SearchForm';


const NavBarHeader = () => (
  <div className="nav__header">
    <NavLink to="/"><Logo /></NavLink>
    {/* <SearchForm /> */}
  </div>
);


export default NavBarHeader;
