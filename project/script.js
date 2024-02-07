const h1 = document.querySelector('h1');
const startButton = document.getElementById('StartButton');
let isCountingUp = true; // Flag to indicate if counting up or down

function updateCount(count) {
    h1.textContent = count;
}

function startCountdown() {
    let count = isCountingUp ? 1 : 10; // Initialize count based on direction
    const intervalId = setInterval(() => {
        updateCount(count);
        if (isCountingUp) {
            count++;
        } else {
            count--;
        }
        if ((isCountingUp && count === 11) || (!isCountingUp && count === 0)) {
            clearInterval(intervalId);
            isCountingUp = !isCountingUp; // Toggle direction
        }
    }, 1000);
}

startButton.addEventListener('click', startCountdown);
