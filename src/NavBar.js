import React from 'react';
import { NavLink } from 'react-router-dom';

import { Logo } from './Logo';
import './NavBar.css';


class NavBar extends React.Component {
  render() {
    return (
      <nav className="nav">
        <div className="nav__container">
          <NavLink to="/"><Logo /></NavLink>
          <ul className="nav__list" ref="navList">
            <li className="nav__item"><NavLink className="nav__link" activeClassName="nav__link--active" to="/tag/javascript">JavaScript</NavLink></li>
            <li className="nav__item"><NavLink className="nav__link" activeClassName="nav__link--active" to="/tag/react">React</NavLink></li>
            <li className="nav__item"><NavLink className="nav__link" activeClassName="nav__link--active" to="/tag/css">CSS</NavLink></li>
          </ul>
        </div>
      </nav>
    );
  }
}


export default NavBar;
