let timer;
let isRunning = false;
let milliseconds = 0;
let seconds = 0;
let minutes = 0;

function updateDisplay() {
    let ms = milliseconds.toString().padStart(2, "0");
    let sec = seconds.toString().padStart(2, "0");
    let min = minutes.toString().padStart(2, "0");

    document.getElementById("display").innerText =
        `${min}:${sec}:${ms}`;
}

function start() {
    if (!isRunning) {
        isRunning = true;

        timer = setInterval(() => {
            milliseconds++;

            if (milliseconds === 100) {
                milliseconds = 0;
                seconds++;
            }

            if (seconds === 60) {
                seconds = 0;
                minutes++;
            }

            updateDisplay();
        }, 10);
    }
}

function pause() {
    clearInterval(timer);
    isRunning = false;
}

function reset() {
    clearInterval(timer);
    isRunning = false;
    milliseconds = 0;
    seconds = 0;
    minutes = 0;
    updateDisplay();
    document.getElementById("laps").innerHTML = "";
}

function lap() {
    if (isRunning) {
        const lapTime = document.getElementById("display").innerText;
        const li = document.createElement("li");
        li.innerText = lapTime;
        document.getElementById("laps").appendChild(li);
    }
}