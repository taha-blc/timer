// Button variables
const startButton = document.querySelector(".start-button"),
  stopButton = document.querySelector(".stop-button"),
  resetButton = document.querySelector(".reset-button");

// Display Variables
const hourDisplay = document.querySelector(".hour"),
  minuteDisplay = document.querySelector(".minute"),
  secondDisplay = document.querySelector(".second"),
  msDisplay = document.querySelector(".millisecond");

// hour variables
let hr = "0" + 0,
  min = "0" + 0,
  sec = "0" + 0,
  ms = "0" + 0,
  startTimer;

startButton.addEventListener("click", start);
stopButton.addEventListener("click", stop);
resetButton.addEventListener("click", reset);

function start() {
  if (!startButton.classList.contains("active")) {
    startTimer = setInterval(() => {
      ms++;
      ms = ms < 10 ? (ms = "0" + ms) : ms;
      //   if (ms < 10) {
      //     ms = "0" + ms;
      //   }else {
      //     ms;
      //   }
      if (ms == 100) {
        sec++;
        sec = sec < 10 ? (sec = "0" + sec) : sec;
        // degisken seçimi = değişken koşulu ? if kısmı : else kısmı;
        ms = "0" + 0;
      }
      if (sec == 60) {
        min++;
        min = min < 10 ? (min = "0" + min) : min;
        sec = "0" + 0;
      }
      if (min == 60) {
        hr++;
        hr = hr < 10 ? (hr = "0" + hr) : hr;
        min = "0" + 0;
      }
      putValue();
    }, 10);
  }
  startButton.classList.add("active");
  resetButton.classList.add("active");
  stopButton.classList.remove("active");
}

function stop() {
  startButton.classList.remove("active");
  resetButton.classList.remove("active");
  stopButton.classList.add("active");

  clearInterval(startTimer);
}

function reset() {
  startButton.classList.remove("active");
  stopButton.classList.remove("active");
  resetButton.classList.add("active");

  hr = "0" + 0;
  min = "0" + 0;
  sec = "0" + 0;
  ms = "0" + 0;
  putValue();
}

function putValue() {
  hourDisplay.innerHTML = hr;
  minuteDisplay.innerHTML = min;
  secondDisplay.innerHTML = sec;
  msDisplay.innerHTML = ms;
}
