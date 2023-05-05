import React from 'react';

const NavItem = ({ name, isActive, onClick }) => {
  return (
    <li
      className={`${name}-nav ${isActive ? 'active' : 'inactive'}`}
      onClick={onClick}
    >
      {name}
    </li>
  );
};

export default NavItem;
