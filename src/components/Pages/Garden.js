
import AudioControl from '../AudioControl/AudioControl';
import shishiodoshi from '../../assets/sounds/shishiodoshi.ogg';
import chimes from '../../assets/sounds/wooden-chimes.ogg';
import birds from '../../assets/sounds/garden-birds.ogg';
import fish from '../../assets/sounds/fish.ogg';
import bees from '../../assets/sounds/bees.ogg'
import dragonfly from '../../assets/sounds/dragonfly.ogg';

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