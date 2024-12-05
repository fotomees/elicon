let score = 0;
const target = document.getElementById('target');
const targetArea = document.getElementById('target-area');
const scoreElement = document.getElementById('score');
const timerElement = document.getElementById('timer');
let timeLeft = 15; // Set timer to 15 seconds
let timerInterval;
const startButton = document.getElementById('start-game');

startButton.addEventListener('click', () => {
    score = 0; // Reset score
    timeLeft = 15; // Reset time to 15 seconds
    scoreElement.textContent = `Score: ${score}`;
    scoreElement.style.display = 'block';
    timerElement.style.display = 'block';
    targetArea.style.display = 'block';

    moveTarget(); // Move target to initial position
    startTimer(); // Start the timer
});

function moveTarget() {
    const x = Math.random() * (targetArea.clientWidth - target.clientWidth);
    const y = Math.random() * (targetArea.clientHeight - target.clientHeight);
    target.style.left = `${x}px`;
    target.style.top = `${y}px`;
}

targetArea.addEventListener('click', (event) => {
    const targetRect = target.getBoundingClientRect();
    const clickX = event.clientX;
    const clickY = event.clientY;

    if (
        clickX >= targetRect.left &&
        clickX <= targetRect.right &&
        clickY >= targetRect.top &&
        clickY <= targetRect.bottom
    ) {
        score++;
        scoreElement.textContent = `Score: ${score}`;
        moveTarget();
    }
});

// Start the timer
function startTimer() {
    timerElement.textContent = `Time Left: ${timeLeft}s`;
    timerInterval = setInterval(() => {
        timeLeft--;
        timerElement.textContent = `Time Left: ${timeLeft}s`;
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            targetArea.style.pointerEvents = 'none'; // Disable clicking
            alert(`Time's up! Your final score is: ${score}`);
            resetGame(); // Reset game after time's up
        }
    }, 1000);
}

function resetGame() {
    targetArea.style.display = 'none';
    scoreElement.style.display = 'none';
    timerElement.style.display = 'none';
    startButton.style.display = 'block'; // Show the start button again
}

// Initial setup
resetGame();
