import AudioBtn from "./AudioBtn";
import VolumeSlider from "./VolumeSlider";


const AudioControl = ({ source, name }) => {
  return (
    <div className='audio-control'>
      <audio data-audio={name} src={source} loop></audio>
      <AudioBtn name={name}></AudioBtn>
      <VolumeSlider name={name}></VolumeSlider>
    </div>
  )
}

export default AudioControl;
