
import React from 'react';
import AudioControl from '../AudioControl/AudioControl';
import machine from '../../assets/sounds/coffee-machine.ogg';
import clinking from '../../assets/sounds/clinking.ogg';
import softChatter from '../../assets/sounds/soft-chatter.ogg';
import bustle from '../../assets/sounds/bustle.ogg';
import jazz from '../../assets/sounds/cafe-jazz.ogg'
import lofi from '../../assets/sounds/cafe-lofi.ogg';

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