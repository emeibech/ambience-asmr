
import AudioControl from '../AudioControl/AudioControl';
import shishiodoshi from '../../assets/sounds/shishiodoshi.mp3';
import chimes from '../../assets/sounds/wooden-chimes.mp3';
import birds from '../../assets/sounds/garden-birds.mp3';
import fish from '../../assets/sounds/fish.mp3';
import bees from '../../assets/sounds/bees.mp3'
import dragonfly from '../../assets/sounds/dragonfly.mp3';

const Garden = () => {
  return (
    <div className="page">
      <div className='audio-container'>
        <AudioControl source={shishiodoshi} name='Shishi-Odoshi' />
        <AudioControl source={chimes} name='Chimes' />
        <AudioControl source={birds} name='Birds' />
        <AudioControl source={fish} name='Fish' />
        <AudioControl source={bees} name='Bees' />
        <AudioControl source={dragonfly} name='Dragonfly' />
      </div>
    </div>
  );
}

export default Garden;