
import AudioControl from '../AudioControl/AudioControl';
import rustle from '../../assets/sounds/rustle.mp3';
import walking from '../../assets/sounds/walking.mp3';
import drizzle from '../../assets/sounds/drizzle.mp3';
import forestBirds from '../../assets/sounds/forest-birds.mp3';
import cricket from '../../assets/sounds/cricket.mp3'
import crow from '../../assets/sounds/crow.mp3';

const Forest = () => {
  return (
    <div className="page">
      <div className='audio-container'>
        <AudioControl source={rustle} name='Rustle' />
        <AudioControl source={walking} name='Walking' />
        <AudioControl source={drizzle} name='Drizzle' />
        <AudioControl source={cricket} name='Cricket' />
        <AudioControl source={forestBirds} name='Birds' />
        <AudioControl source={crow} name='Crow' />
      </div>
    </div>
  );
}

export default Forest;