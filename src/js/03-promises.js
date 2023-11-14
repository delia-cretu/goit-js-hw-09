import { Notify } from 'notiflix/build/notiflix-notify-aio';

const form = document.querySelector('.form');
const submitBtn = form.querySelector('.form button');

form.addEventListener('submit', submitForm);

function submitForm(e) {
  e.preventDefault();
  submitBtn.disabled = true;

  const firstDelay = Number(
    document.querySelector("input[name='delay']").value
  );
  const delayStep = Number(document.querySelector("input[name='step']").value);
  const amount = Number(document.querySelector("input[name='amount']").value);

  for (let i = 0; i < amount; i++) {
    const position = i + 1;
    const delay = firstDelay + delayStep * position;

    createPromise(position, delay)
      .then(({ position, delay }) => {
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
  }

  submitBtn.disabled = false;
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}
