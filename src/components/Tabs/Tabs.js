import React, { useContext } from "react";
import { NavStatusContext } from "../../App";
import handleNavClick from "../../Modules/handleNavClick";

const Tabs = ({name, source, navStatus}) => {
  const setActiveTab = useContext(NavStatusContext);

  const handleClick = () => {
    const newObj = handleNavClick(name, navStatus);
    setActiveTab(newObj);
  }

  return (
    <>
      <button onClick={handleClick}>
        <img 
          src={navStatus[name] ? source[0] : source[1]} 
          alt={name}
          height='24px'
          width='24px'
        />
      </button>
    </>
  )
}

export default Tabs;