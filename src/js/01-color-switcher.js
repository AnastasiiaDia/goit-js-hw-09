const buttonStartEl = document.querySelector('button[data-start]');
const buttonStopEl = document.querySelector('button[data-stop]');
const body = document.querySelector('.body');

buttonStartEl.addEventListener('click', onClickStart);
buttonStopEl.addEventListener('click', onClickStop);

let intervalId = null;

function onClickStopDisabled(boolean) {
  buttonStopEl.disabled = !boolean;
  buttonStartEl.disabled = boolean;
}

function onClickStart() {
  onClickStopDisabled(true);
  intervalId = setInterval(() => {
    const color = getRandomHexColor();
    body.style.backgroundColor = color;
  }, 1000);
}

function onClickStop() {
  clearInterval(intervalId);
  intervalId = null;
  onClickStopDisabled(false);
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
