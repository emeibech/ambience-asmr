import "./VolumeSlider.css";
import React, { useState } from "react";

const VolumeSlider = ({ name }) => {
  const [volume, setVolume] = useState(50);

  const handleVolume = (e) => {
    const audio = document.querySelector(`[data-audio='${name}']`);
    setVolume(e.target.value);
    audio.volume = e.target.value / 100;
  };

  const handleSlider = (e) => {
    const handleInputChange = (e) => {
      let target = e.target;

      const min = target.min;
      const max = target.max;
      const val = target.value;

      target.style.backgroundSize =
        ((val - min) * 100) / (max - min) + "% 100%";
    };

    handleInputChange(e);
  };

  const handleOnChange = (e) => {
    handleSlider(e);
    handleVolume(e);
  };

  return (
    <div>
      <input
        id={name}
        type="range"
        min="0"
        max="100"
        value={volume}
        onChange={handleOnChange}
      />
    </div>
  );
};

export default VolumeSlider;
