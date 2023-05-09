
import AudioControl from '../AudioControl/AudioControl';
import rustle from '../../assets/sounds/rustle.ogg';
import walking from '../../assets/sounds/walking.ogg';
import drizzle from '../../assets/sounds/drizzle.ogg';
import forestBirds from '../../assets/sounds/forest-birds.ogg';
import cricket from '../../assets/sounds/cricket.ogg'
import crow from '../../assets/sounds/crow.ogg';

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