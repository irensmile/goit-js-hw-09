

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}
const startButton = document.querySelector("[data-start]");
const stopButton = document.querySelector("[data-stop]");

let timerId;
startButton.addEventListener("click", (() => { 
    //document.body.style.background = getRandomHexColor();
    timerId = setInterval(() => {
        document.body.style.background = getRandomHexColor()
    }, 1000)
}));
stopButton.addEventListener("click", (() => {
    clearInterval(timerId);
}));
