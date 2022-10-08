import { getRandomHexColor } from '../js/template function/01-getRandomHexColor';

const refs = {
  startBtn: document.querySelector('[data-start]'),
  stopBtn: document.querySelector('[data-stop]'),
  body: document.querySelector('body'),
};

refs.startBtn.addEventListener('click', onStart);
refs.stopBtn.addEventListener('click', onStop);

let idInterval = null;

function onStart() {
   idInterval = setInterval(() => {
    refs.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
 refs.startBtn.setAttribute('disabled', 'disabled');
 refs.stopBtn.removeAttribute('disabled');
}
 

function onStop() {
  clearInterval(idInterval);
  
  refs.startBtn.removeAttribute('disabled');
  refs.stopBtn.setAttribute('disabled', 'disabled');
}
