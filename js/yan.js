const effects = [
  './effects/test.deepar',
  './effects/MakeupLook.deepar',
  './effects/Ping_Pong.deepar',
  './effects/galaxy_background.deepar',
];
let currentEffectIdx = -1;
const btn = document.getElementById('button');
btn.addEventListener('click', () => {
  currentEffectIdx = (currentEffectIdx + 1) % effects.length;
  const effect = effects[currentEffectIdx];
  ar.deepAR.switchEffect(0, 'slot', effect);
});
