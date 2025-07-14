let mins = 0;
let secs = 0;
let tens = 0;
let interval;
let isRunning = false;

const minsElement = document.querySelector('.mins');
const secsElement = document.querySelector('.secs');
const tensElement = document.querySelector('.tens');
const startBtn = document.querySelector('.start');
const resetBtn = document.querySelector('.reset');
const lapsBtn = document.querySelector('.lapsbtn');
const lapsList = document.querySelector('.laps');
const clearBtn = document.querySelector('.clearbtn');

function startTimer() {
    tens++;
    if (tens > 99) {
        tens = 0;
        secs++;
    }
    if (secs > 59) {
        secs = 0;
        mins++;
    }

    minsElement.textContent = (mins < 10 ? "0" : "") + mins;
    secsElement.textContent = ":" + (secs < 10 ? "0" : "") + secs;
    tensElement.textContent = ":" + (tens < 10 ? "0" : "") + tens;
}

startBtn.addEventListener('click', () => {
    if (!isRunning) {
        interval = setInterval(startTimer, 10);
        startBtn.textContent = "Pause";
    } else {
        clearInterval(interval);
        startBtn.textContent = "Start";
    }
    isRunning = !isRunning;
});

resetBtn.addEventListener('click', () => {
    clearInterval(interval);
    mins = secs = tens = 0;
    isRunning = false;
    minsElement.textContent = "00";
    secsElement.textContent = ":00";
    tensElement.textContent = ":00";
    startBtn.textContent = "Start";
});

lapsBtn.addEventListener('click', () => {
    if (!isRunning) return;

    const lapItem = document.createElement('li');
    lapItem.classList.add('lap-item');

    const lapNumber = document.createElement('span');
    lapNumber.classList.add('num');
    lapNumber.textContent = `#${lapsList.children.length + 1}`;

    const lapTime = document.createElement('span');
    lapTime.classList.add('time-stamp');
    lapTime.textContent = `${minsElement.textContent}${secsElement.textContent}${tensElement.textContent}`;

    lapItem.appendChild(lapNumber);
    lapItem.appendChild(lapTime);
    lapsList.appendChild(lapItem);
});

clearBtn.addEventListener('click', () => {
    lapsList.innerHTML = "";
});

