// const buttonStartEl = document.getElementById('start');
const buttonStartEl = document.querySelector('button[data-start]');
const buttonStopEl = document.querySelector('button[data-stop]');

// const buttonStopEl = document.getElementById('stop');
const body = document.querySelector('.body');

buttonStartEl.addEventListener('click', onClickStart);
buttonStopEl.addEventListener('click', onClickStop);

let intervalId = null;

function onClickStart() {
  buttonStartEl.disabled = true;
  buttonStopEl.disabled = false;

  intervalId = setInterval(() => {
    const color = getRandomHexColor();
    body.style.backgroundColor = color;
  }, 1000);
}

function onClickStop() {
  clearInterval(intervalId);
  intervalId = null;
  buttonStartEl.disabled = false;
  buttonStopEl.disabled = true;
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
