import React, { useContext } from "react";
import { NavStatusContext } from "../../App";
import beachIMG from '../../assets/images/backgrounds/beach.jpg';
import forestIMG from '../../assets/images/backgrounds/forest.jpg';
import gardenIMG from '../../assets/images/backgrounds/garden.jpg';
import cafeIMG from '../../assets/images/backgrounds/cafe.jpg';

const Tabs = ({name, source, navStatus}) => {
  const setActiveTab = useContext(NavStatusContext);
  const bg = {
    beach: beachIMG,
    forest: forestIMG,
    garden: gardenIMG,
    cafe: cafeIMG,
  }

  const changeBG = (key) => {
    document.body.style.backgroundImage = `url(${bg[key]})`;
  }

  const handleClick = () => {
    const newObj = Object.fromEntries(
      Object.entries(navStatus).map(([key, value]) => {
        if (key === name) {
          changeBG(key)
          return [key, true];
        }

        return [key, false];
      })
    );
    
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