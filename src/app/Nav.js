import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import './Nav.css';


class Nav extends Component {
  render() {
    return (
      <ul className="nav__list" ref="navList">
        <li className="nav__item"><NavLink className="nav__link" activeClassName="nav__link--active" to="/tag/javascript">JavaScript</NavLink></li>
        <li className="nav__item"><NavLink className="nav__link" activeClassName="nav__link--active" to="/tag/react">React</NavLink></li>
        <li className="nav__item"><NavLink className="nav__link" activeClassName="nav__link--active" to="/tag/css">CSS</NavLink></li>
      </ul>
    );
  }
}


export default Nav;
