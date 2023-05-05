import './Beach.css';
import AudioControl from '../AudioControl/AudioControl';
import campfire from '../../assets/sounds/crackling-campfire.ogg';
import gentleWaves from '../../assets/sounds/gentle-waves.ogg';
import splash from '../../assets/sounds/splashing-water.ogg';
import strongWaves from '../../assets/sounds/strong-waves.ogg';
import wind from '../../assets/sounds/wind.ogg';
import wading from '../../assets/sounds/wading-in-the-water.ogg';

const Beach = () => {
  return (
    <div className="beach">
      <div className='audio-container'>
        <AudioControl source={gentleWaves} name='Gentle Waves' />
        <AudioControl source={strongWaves} name='Strong Waves' />
        <AudioControl source={splash} name='Splashes' />
        <AudioControl source={wind} name='Wind' />
        <AudioControl source={campfire} name='Campfire' />
        <AudioControl source={wading} name='Wading' />
      </div>
    </div>
  );
}

export default Beach;