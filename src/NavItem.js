import React from 'react';

function NavItem(props) {
  return (
    <li
      className={`nav__item${props.isSelected ? ' nav__item--selected' : ''}`}
      id={props.id}
      onClick={props.handleClick}
    >
      {props.children}
    </li>
  );
}

NavItem.propTypes = {
  isSelected: React.PropTypes.bool.isRequired,
  id: React.PropTypes.number.isRequired,
  children: React.PropTypes.string.isRequired,
  handleClick: React.PropTypes.func.isRequired
};

export default NavItem;
