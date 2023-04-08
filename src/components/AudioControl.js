import processAudio from "../modules/processAudio";

const play = async (src) => {
  const source = await processAudio(src);
  source.start();
}

const AudioControl = ({ source, name }) => {
  return (
    <>
      <button onClick={play} src={source}>{name}</button>
    </>
  )
}

export default AudioControl;
