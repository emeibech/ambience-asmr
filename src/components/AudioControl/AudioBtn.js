import './AudioBtn.css';
import React, { useState } from "react";

const AudioBtn = ({ name }) => {
  const [playing, setPlaying] = useState(false);

  const togglePlayBack = () => {
    const audio = document.querySelector(`[data-audio='${name}']`);

    if (audio.paused) {
      audio.play()
        .then(() => setPlaying(true))
        .catch(() => console.log("Error playing audio."));
    } else {
      audio.pause();
      setPlaying(false);
    }
  }

  return (
    <>
      <button 
        className={playing ? "audio-btn playing" : "audio-btn"} 
        onClick={togglePlayBack} 
      >
        {name}
      </button>
    </>
  );
};

export default AudioBtn;
