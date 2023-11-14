// Start button

const startBtn = document.querySelector('.button--start');
const stopBtn = document.querySelector('.button--stop');
let timerId = null;
stopBtn.disabled = false;

startBtn.addEventListener('click', () => {
  timerId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
  startBtn.disabled = true;
  stopBtn.disabled = false;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// Disable start button when theme is running

// Stop button

stopBtn.addEventListener('click', () => {
  clearInterval(timerId);
  startBtn.removeEventListener;
  startBtn.disabled = false;
  stopBtn.disabled = true;
});
