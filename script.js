let workDuration = 25 * 60;
let shortBreak = 5 * 60;
let longBreak = 15 * 60;
let timeLeft = workDuration;
let timer = null;
let ticking = false;
let currentMode = 'work';

const alarmSound = document.getElementById('alarmSound');
const tickSound = document.getElementById('tickSound');
const timerDisplay = document.getElementById('timerDisplay');

function updateTimerDisplay() {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  timerDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function startTimer() {
  if (timer) return;

  tickSound.currentTime = 0;
  tickSound.play().catch((e) => console.log('Audio play failed:', e));
  ticking = true;

  timer = setInterval(() => {
    if (timeLeft > 0) {
      timeLeft--;
      updateTimerDisplay();
    } else {
      clearInterval(timer);
      timer = null;
      ticking = false;
      tickSound.pause();
      tickSound.currentTime = 0;
      alarmSound.play();
      alert(`${currentMode === 'work' ? 'Work' : 'Break'} session over!`);
    }
  }, 1000);
}

function stopTimer() {
  if (!timer) return;
  clearInterval(timer);
  timer = null;
  ticking = false;
  tickSound.pause();
  tickSound.currentTime = 0;
}

function resetTimer() {
  clearInterval(timer);
  timer = null;
  ticking = false;
  tickSound.pause();
  tickSound.currentTime = 0;
  timeLeft = currentMode === 'work' ? workDuration : (currentMode === 'shortBreak' ? shortBreak : longBreak);
  updateTimerDisplay();
}

function switchToBreak() {
  clearInterval(timer);
  timer = null;
  ticking = false;
  currentMode = 'shortBreak';
  timeLeft = shortBreak;
  tickSound.pause();
  tickSound.currentTime = 0;
  updateTimerDisplay();
}

function switchToLongBreak() {
  clearInterval(timer);
  timer = null;
  ticking = false;
  currentMode = 'longBreak';
  timeLeft = longBreak;
  tickSound.pause();
  tickSound.currentTime = 0;
  updateTimerDisplay();
}

updateTimerDisplay();
