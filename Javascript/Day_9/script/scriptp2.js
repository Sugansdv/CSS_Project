
let seconds = 0;
let interval = null;

function updateDisplay() {
  document.getElementById('timer').textContent = seconds + "s";
}

function startTimer() {
  if (interval === null) {
    interval = setInterval(() => {
      seconds++;
      updateDisplay();
    }, 1000);
  }
}

function stopTimer() {
  clearInterval(interval);
  interval = null;
}

function resetTimer() {
  stopTimer();
  seconds = 0;
  updateDisplay();
}