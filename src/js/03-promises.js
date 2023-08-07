import Notiflix from 'notiflix';

const formEl = document.querySelector(`.form`);
const delayEl = document.querySelector(`input[name="delay"]`);
const stepEl = document.querySelector(`input[name="step"]`);
const amountEl = document.querySelector(`input[name="amount"]`);
const submitBtnEl = document.querySelector(`button[type="submit"]`);
console.dir(Number(amountEl.value));

formEl.addEventListener(`submit`, onSubmit);

function onSubmit(event) {
  event.preventDefault();

  let delay = Number(delayEl.value);
  let step = Number(stepEl.value);
  let amount = Number(amountEl.value);
  let position = 0;

  for (let i = 1; i <= amount; i += 1) {
    position = i;
    delay += step;
    createPromise(position, delay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      });
  }
  formEl.reset();
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}
