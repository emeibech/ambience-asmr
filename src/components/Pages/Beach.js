
import AudioControl from '../AudioControl/AudioControl';
import campfire from '../../assets/sounds/crackling-campfire.mp3';
import gentleWaves from '../../assets/sounds/gentle-waves.mp3';
import splash from '../../assets/sounds/splashing-water.mp3';
import strongWaves from '../../assets/sounds/strong-waves.mp3';
import wind from '../../assets/sounds/wind.mp3';
import wading from '../../assets/sounds/wading-in-the-water.mp3';

const Beach = () => {
  return (
    <div className="page">
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