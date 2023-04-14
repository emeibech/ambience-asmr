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
        className="audio-btn" 
        onClick={togglePlayBack} 
      >
        {playing ? "Pause" : "Play"} {name}
      </button>
    </>
  );
};

export default AudioBtn;
