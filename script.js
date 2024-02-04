const showTime = document.getElementById('showTime');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const resetBtn = document.getElementById('resetBtn');

function stopwatch() {
    let startTime;
    let timerInterval;
    let elapsedTime = 0;

    function start() {
        startTime = new Date().getTime() - elapsedTime;
        timerInterval = setInterval(update, 1000);
    }

    function stop() {
        clearInterval(timerInterval);
        elapsedTime = new Date().getTime() - startTime;
    }

    function reset() {
        clearInterval(timerInterval);
        elapsedTime = 0;
        showTime.innerText = `00 : 00 : 00`;
    }

    function update() {
        const elapsed = new Date().getTime() - startTime;
        const hours = Math.floor((elapsed / (60 * 60 * 1000))).toString().padStart(2, '0');
        const minutes = Math.floor((elapsed % (60 * 60 * 1000)) / (60 * 1000)).toString().padStart(2, '0');
        const seconds = Math.floor((elapsed % (60 * 1000) / 1000)).toString().padStart(2, '0');
        showTime.innerText = `${hours} : ${minutes} : ${seconds}`;
    }

    return { start, stop, reset };
}

showTime.innerText = `00 : 00 : 00`;
const timer = stopwatch();

startBtn.addEventListener('click', () => {
    timer.start();
});

stopBtn.addEventListener('click', () => {
    timer.stop();
});

resetBtn.addEventListener('click', () => {
    timer.reset();
});
