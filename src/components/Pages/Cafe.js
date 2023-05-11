
import React from 'react';
import AudioControl from '../AudioControl/AudioControl';
import machine from '../../assets/sounds/coffee-machine.mp3';
import clinking from '../../assets/sounds/clinking.mp3';
import softChatter from '../../assets/sounds/soft-chatter.mp3';
import bustle from '../../assets/sounds/bustle.mp3';
import jazz from '../../assets/sounds/cafe-jazz.mp3'
import lofi from '../../assets/sounds/cafe-lofi.mp3';

const Cafe = () => {
  return (
    <div className="page">
      <div className='audio-container'>
        <AudioControl source={machine} name='Machinery' />
        <AudioControl source={clinking} name='Clinking' />
        <AudioControl source={softChatter} name='Soft Chatter' />
        <AudioControl source={bustle} name='Bustle' />
        <AudioControl source={jazz} name='Jazz BGM' />
        <AudioControl source={lofi} name='Lofi BGM' />
      </div>
    </div>
  );
}

export default Cafe;