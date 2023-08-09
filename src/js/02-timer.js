import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const startBtnEl = document.querySelector('button[data-start]');
startBtnEl.disabled = 'true';

const refs = {
  days: document.querySelector('span[data-days]'),
  hours: document.querySelector('span[data-hours]'),
  minutes: document.querySelector('span[data-minutes]'),
  seconds: document.querySelector('span[data-seconds]'),
};

let selectedDates = [];
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose([dates]) {
    selectedDates = dates;
    if (selectedDates <= Date.now()) {
      Notiflix.Notify.warning('Please choose a date in the future');
      startBtnEl.disabled = true;
    } else {
      startBtnEl.disabled = false;
    }
  },
};

flatpickr('#datetime-picker', options);

startBtnEl.addEventListener('click', onClick);

let intervalId = null;

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function onClick() {
  intervalId = setInterval(() => {
    let timer = selectedDates - Date.now();
    if (timer <= 0) {
      clearInterval(intervalId);
      intervalId = null;
      resetData();
      return;
    }
    setData(timer);
  }, 1000);
}
function resetData() {
  refs.days.textContent = '00';
  refs.hours.textContent = '00';
  refs.minutes.textContent = '00';
  refs.seconds.textContent = '00';
}
function setData(timer) {
  let timerData = convertMs(timer);
  refs.days.textContent = addLeadingZero(timerData.days);
  refs.hours.textContent = addLeadingZero(timerData.hours);
  refs.minutes.textContent = addLeadingZero(timerData.minutes);
  refs.seconds.textContent = addLeadingZero(timerData.seconds);
}
function convertMs(ms) {
  // Number of milliseconds per unit of time

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
