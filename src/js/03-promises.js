import Notiflix from 'notiflix';

const button = document.querySelector("button");
button.addEventListener("click", onclick);

function onclick(event) {
  event.preventDefault();
  const firstDelay = document.querySelector("[name='delay']").value;
  
  const step = document.querySelector("[name='step']").value;
 
  const amount = document.querySelector("[name='amount']").value;

  let currentDelay = Number(firstDelay);
  for (let i = 0; i < amount; i++) {
    createPromise(i + 1, currentDelay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
    currentDelay += Number(step);
  }
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position: position, delay: delay });
      } else {
        reject({ position: position, delay: delay });
      }
    }, delay);
  });
}
//   if (shouldResolve) {
//     // Fulfill
//     resolve();
//   } else {
//     // Reject
//     reject();
//   }
// }
//const promise = new Promise((resolve, reject) => {
  // Asynchronous operation});
// createPromise(2, 1500)
//   .then(({ position, delay }) => {
//     console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//   })
//   .catch(({ position, delay }) => {
//     //promise.then(onResolve, onReject)
//     console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//   });