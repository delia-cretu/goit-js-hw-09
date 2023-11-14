import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

// Create calendar

const dateCountdown = flatpickr('#datetime-picker', {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] <= new Date()) {
      Notify.failure('Please choose a date in the future');
    }
  },
});

// Set timer

const startBtn = document.querySelector('.start-button');
startBtn.disabled = false;
let timerID;

startBtn.addEventListener('click', () => {
  startBtn.disabled = true;
  timerID = setInterval(updateTimer, 1000);
});

function updateTimer() {
  const timeDiff = dateCountdown.selectedDates[0] - new Date();
  if (timeDiff <= 0) {
    clearInterval(timerID);
    return;
  }
  convertMs(timeDiff);
}

const days = document.querySelector('[data-days]');
const hours = document.querySelector('[data-hours]');
const minutes = document.querySelector('[data-minutes]');
const seconds = document.querySelector('[data-seconds]');

function convertMs(timeDiff) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  days.innerHTML = Math.floor(timeDiff / day);
  hours.innerHTML = Math.floor((timeDiff % day) / hour);
  minutes.innerHTML = Math.floor(((timeDiff % day) % hour) / minute);
  seconds.innerHTML = Math.floor((((timeDiff % day) % hour) % minute) / second);
}
