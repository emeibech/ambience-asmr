const processAudio = async (src) => {
  const audioContext = new AudioContext();
  const source = audioContext.createBufferSource();
  const arrayBuffer = await fetch(src).then((res) => res.arrayBuffer());
  const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
  source.buffer = audioBuffer;
  source.loop = true;
  source.connect(audioContext.destination);

  return source;
};

export default processAudio;
