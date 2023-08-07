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

  for (let position = 1; position <= amount; position += 1) {
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
    delay += step;
  }
  formEl.reset();
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setInterval(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}
