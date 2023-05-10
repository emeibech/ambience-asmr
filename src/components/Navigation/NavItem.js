import React, { useContext } from 'react';
import { NavStatusContext } from '../../App';
import handleNavClick from '../../Modules/handleNavClick';

const NavItem = ({ name, navStatus }) => {
  const setActiveTab = useContext(NavStatusContext);


  const handleClick = () => {
    const newObj = handleNavClick(name, navStatus);
    setActiveTab(newObj);
  }

  return (
    <li
      className={`${name}-nav ${navStatus[name] ? 'active' : 'inactive'}`}
      onClick={handleClick}
    >
      {name}
    </li>
  );
};

export default NavItem;
