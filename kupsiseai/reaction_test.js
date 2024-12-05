let reactionStartTime;
const reactionMessage = document.getElementById('reaction-message');
const startReactionButton = document.getElementById('start-reaction');
const readyMessage = document.getElementById('ready-message');

startReactionButton.addEventListener('click', () => {
    reactionMessage.textContent = 'Wait for green...';
    readyMessage.style.display = 'none';

    const delay = Math.floor(Math.random() * 3000) + 2000; // 2-5 seconds
    setTimeout(() => {
        readyMessage.style.display = 'block'; // Show the click area
        reactionStartTime = new Date().getTime();
    }, delay);
});

readyMessage.addEventListener('click', () => {
    if (reactionStartTime) {
        const reactionEndTime = new Date().getTime();
        const reactionTime = reactionEndTime - reactionStartTime; // Calculate reaction time
        reactionMessage.textContent = `Your reaction time: ${reactionTime} ms`;
        reactionStartTime = null; // Reset
        readyMessage.style.display = 'none'; // Hide the message
    }
});
