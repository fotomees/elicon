// Cookie Clicker
let cookieCount = 0;
const cookieCountElement = document.getElementById('cookie-count');
const cookieButton = document.getElementById('cookie-button');

cookieButton.addEventListener('click', () => {
    cookieCount += 1; // Add one cookie
    cookieCountElement.textContent = `Cookies: ${cookieCount}`;
});

// Reaction Speed Test
let reactionStartTime;
const reactionMessage = document.getElementById('reaction-message');
const startReactionButton = document.getElementById('start-reaction');

startReactionButton.addEventListener('click', () => {
    reactionMessage.textContent = 'Wait for green...';
    const delay = Math.floor(Math.random() * 3000) + 2000; // 2-5 seconds
    setTimeout(() => {
        reactionMessage.textContent = 'Click!';
        reactionStartTime = new Date().getTime();
    }, delay);
});

reactionMessage.addEventListener('click', () => {
    if (reactionStartTime) {
        const reactionTime = new Date().getTime() - reactionStartTime;
        reactionMessage.textContent = `Your reaction time: ${reactionTime} ms`;
        reactionStartTime = null; // Reset
    }
});

// Mouse Target Practice
let score = 0;
const target = document.getElementById('target');
const targetArea = document.getElementById('target-area');
const scoreElement = document.getElementById('score');

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

// Initial target position
moveTarget();
