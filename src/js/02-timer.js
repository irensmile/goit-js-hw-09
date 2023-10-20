import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const button = document.querySelector("[data-start]");
let selectedDate;
const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        const now = new Date();
         
        selectedDate = selectedDates[0];
        if (selectedDate <= now) {
            window.alert("Please choose a date in the future");
            button.setAttribute("disabled", "");
        }
        else{
            button.removeAttribute("disabled");
        }
      console.log(selectedDates[0]);
    },
  };

const fp = flatpickr("#datetime-picker", options);

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

button.addEventListener("click", (() => {
    setInterval(() => {
        const now = new Date();
        const diffMs = selectedDate - now;
        if (diffMs >= 0) {
            let diff = convertMs(diffMs);
            document.querySelector("[data-days]").textContent = diff.days;
            document.querySelector("[data-hours]").textContent = diff.hours;
            document.querySelector("[data-minutes]").textContent = diff.minutes;
            document.querySelector("[data-seconds]").textContent = diff.seconds;
        }
    }, 1000);
    
}));