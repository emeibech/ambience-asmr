import './App.css';
import AudioControl from './components/AudioControl/AudioControl';
import campfire from './assets/sounds/crackling-campfire.ogg';
import gentleWaves from './assets/sounds/gentle-waves.ogg';
import splash from './assets/sounds/splashing-water.ogg';
import strongWaves from './assets/sounds/strong-waves.ogg';
import wind from './assets/sounds/wind.ogg';
import wading from './assets/sounds/wading-in-the-water.ogg';

const App = () => {

  return (
    <div className="App">
      <div className='audio-container'>
        <AudioControl source={gentleWaves} name='Gentle Waves'>
        </AudioControl>

        <AudioControl source={strongWaves} name='Strong Waves'>
        </AudioControl>

        <AudioControl source={splash} name='Splashes'>
        </AudioControl>

        <AudioControl source={wind} name='Wind'>
        </AudioControl>

        <AudioControl source={campfire} name='Campfire'>
        </AudioControl>

        <AudioControl source={wading} name='Wading'>
        </AudioControl>
      </div>
    </div>
  );
}

export default App;
