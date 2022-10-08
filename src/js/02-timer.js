import flatpickr from 'flatpickr';
import { convertMs } from './template function/02-convertMs';

import 'flatpickr/dist/flatpickr.min.css';

import Notiflix from 'notiflix';

const refs = {
  startBtn: document.querySelector('[data-start]'),
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
  input: document.querySelector(`#datetime-picker`),
};

refs.startBtn.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < new Date()) {
      refs.startBtn.disabled = true;

      Notiflix.Notify.failure('Please choose a date in the future');
    } else {
      refs.startBtn.disabled = false;
    }
  },
};

const dataPickr = new flatpickr(refs.input, options);

refs.startBtn.addEventListener('click', onStart);

function onStart() {
  const startTime = dataPickr.selectedDates[0];

  setInterval(() => {
    const currentTime = Date.now();
    const diffTime = startTime - currentTime;
    const diffTimeConverted = convertMs(diffTime);

    refs.days.textContent = diffTimeConverted.days;
    refs.hours.textContent = diffTimeConverted.hours;
    refs.minutes.textContent = diffTimeConverted.minutes;
    refs.seconds.textContent = diffTimeConverted.seconds;
  }, 1000);
}
