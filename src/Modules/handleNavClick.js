import beachIMG from '../assets/images/backgrounds/beach.jpg';
import forestIMG from '../assets/images/backgrounds/forest.jpg';
import gardenIMG from '../assets/images/backgrounds/garden.jpg';
import cafeIMG from '../assets/images/backgrounds/cafe.jpg';

const bg = {
  beach: beachIMG,
  forest: forestIMG,
  garden: gardenIMG,
  cafe: cafeIMG,
}

const changeBG = (key) => {
  document.body.style.backgroundImage = `url(${bg[key]})`;
}

const handleNavClick = (name, navStatus) => {
  const newObj = Object.fromEntries(
    Object.entries(navStatus).map(([key, value]) => {
      if (key === name) {
        changeBG(key)
        return [key, true];
      }

      return [key, false];
    })
  );

  return newObj;
}

export default handleNavClick;
