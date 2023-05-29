let hCount = document.querySelector('.hour-count').innerHTML;
let mCount = document.querySelector('.minute-count').innerHTML;
let sCount = document.querySelector('.second-count').innerHTML;
const startBtn = document.querySelector('.start-watch');
const stopBtn = document.querySelector('.stop-watch');
const resetBtn = document.querySelector('.reset-watch');
let timer;

startBtn.addEventListener('click', () => {stopWatch('start')});
stopBtn.addEventListener('click', () => {stopWatch('stop')});
resetBtn.addEventListener('click', () => {stopWatch('reset')});

function stopWatch(option) {
  if (option === 'start') {
    if (!timer) {
      timer = setInterval(tickTock, 1000);
    }
  } else if (option === 'stop') {
    clearInterval(timer);
    timer = null;
  } else if (option === 'reset') {
    clearInterval(timer);
    hCount = 0;
    mCount = 0;
    sCount = 0;
    document.querySelector('.hour-count').innerHTML = 0;
    document.querySelector('.minute-count').innerHTML = 0;
    document.querySelector('.second-count').innerHTML = 0;
  }
};

function tickTock() {
  if (sCount < 60 && mCount < 60) {
    sCount++;
  } else if (sCount === 60 && mCount <60) {
    sCount = 00;
    mCount++;
  } else if (sCount < 60 && mCount === 60) {
    hCount++;
    mCount = 00;
  }
  document.querySelector('.hour-count').innerHTML = hCount;
  document.querySelector('.minute-count').innerHTML = mCount;
  document.querySelector('.second-count').innerHTML = sCount;
}

// Should've put HTML sec/min/hour fetches into separate variables and call to them by %variableName%.innerHTML instead of querySelector every time;
