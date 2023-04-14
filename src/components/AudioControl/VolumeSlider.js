import React, { useState } from "react";

const VolumeSlider = ({ name }) => {
  const [volume, setVolume] = useState(50);

  const changeVolume = (e) => {
    const audio = document.querySelector(`[data-audio='${name}']`);
    setVolume(e.target.value);
    audio.volume = e.target.value / 100;
  };

  return (
    <div>
      <label htmlFor="volume-slider">Volume</label>
      <input
        id="volume-slider"
        type="range"
        min="0"
        max="100"
        value={volume}
        onChange={changeVolume}
      />
    </div>
  );
};

export default VolumeSlider;
