const flatpickr = require('flatpickr');
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    if (selectedDates[0] <= Date.now()) {
      window.alert('Please choose a date in the future');
    }
  },
};

flatpickr('#datetime-picker', options);
