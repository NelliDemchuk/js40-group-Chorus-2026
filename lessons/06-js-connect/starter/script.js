// Готовая команда: ля первой октавы, 440 Гц. Разберём осциллятор на уроке 16.
function playA4() {
  const AudioCtx = window.AudioContext || window.webkitAudioContext;
  const ctx = new AudioCtx();
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.frequency.value = 440;
  osc.type = "sine";
  gain.gain.value = 0.12;
  osc.connect(gain);
  gain.connect(ctx.destination);
  osc.start();
  gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.4);
  osc.stop(ctx.currentTime + 0.4);
}

const status = document.querySelector("#status"); 
const playBtn = document.querySelector("#playBtn");
const toneBtn = document.querySelector("#toneBtn");
// 
 playA4()
 let isPlayng=false


 console.log(playBtn)
 playBtn.addEventListener("clik" ()  => {
  isPlayng = !isPlayng
  if(isPlaying){
  text.textCotent= "привет спасибо что нажал"
