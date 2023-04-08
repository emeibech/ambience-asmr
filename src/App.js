import './App.css';
import AudioControl from './components/AudioControl';
import seagullTest from './assets/sounds/seagulls-test.mp3'

const App = () => {
  return (
    <div className="App">
      <AudioControl source={seagullTest} name='Seagull Test'></AudioControl>
    </div>
  );
}

export default App;
