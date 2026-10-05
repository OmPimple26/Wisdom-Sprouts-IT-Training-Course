let seconds = 0;
let minutes = 0;
let hours = 0;

let timer = null;
let running = false;

const display = document.getElementById("display");
const startBtn = document.getElementById("startBtn");
const lapBtn = document.getElementById("lapBtn");
const resetBtn = document.getElementById("resetBtn");
const lapList = document.getElementById("lapList");


// Start Stopwatch
startBtn.addEventListener("click", function () {

    if (!running) {

        running = true;

        startBtn.textContent = "Pause";

        timer = setInterval(function () {

            seconds++;

            if (seconds === 60) {
                seconds = 0;
                minutes++;
            }

            if (minutes === 60) {
                minutes = 0;
                hours++;
            }

            updateDisplay();

        }, 1000);

    } else {

        // Pause stopwatch
        running = false;

        startBtn.textContent = "Start";

        clearInterval(timer);
    }
});


// Lap
lapBtn.addEventListener("click", function () {

    if (!running) {
        return;
    }

    const lapTime = display.textContent;

    const li = document.createElement("li");

    li.textContent = "Lap " + (lapList.children.length + 1) + " : " + lapTime;

    lapList.appendChild(li);
});


// Reset
resetBtn.addEventListener("click", function () {

    clearInterval(timer);

    seconds = 0;
    minutes = 0;
    hours = 0;

    running = false;

    startBtn.textContent = "Start";

    updateDisplay();

    lapList.innerHTML = "";
});


// Update Display
function updateDisplay() {

    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;

    display.textContent = h + ":" + m + ":" + s;
}