import React, { useState } from "react";

const Tabs = ({name, source}) => {

  const [isActive, setActive] = useState(false);

  const toggleStatus = () => {
    setActive((prevState) => !prevState);
  };

  return (
    <>
      <button onClick={toggleStatus}>
        <img 
          src={isActive ? source[0] : source[1]} 
          alt={name}
          height='30px'
          width='30px'
        />
      </button>
    </>
  )
}

export default Tabs;