let cookieCount = 0;
let cookiesPerClick = 1;
const cookieCountElement = document.getElementById('cookie-count');
const cookieButton = document.getElementById('cookie-button');
const upgrade1Button = document.getElementById('upgrade-1');
const upgrade2Button = document.getElementById('upgrade-2');

// Function to update the cookie count display
function updateDisplay() {
    cookieCountElement.textContent = `Cookies: ${cookieCount}`;
    upgrade1Button.disabled = cookieCount < 10; // Enable upgrade 1 if enough cookies
    upgrade2Button.disabled = cookieCount < 50; // Enable upgrade 2 if enough cookies
}

// Cookie button click event
cookieButton.addEventListener('click', () => {
    cookieCount += cookiesPerClick; // Add cookies based on the current rate
    updateDisplay();
});

// Upgrade 1: Increases cookies per click by 1
upgrade1Button.addEventListener('click', () => {
    if (cookieCount >= 10) {
        cookieCount -= 10; // Deduct cost
        cookiesPerClick += 1; // Increase cookies per click
        updateDisplay();
    }
});

// Upgrade 2: Increases cookies per click by 5
upgrade2Button.addEventListener('click', () => {
    if (cookieCount >= 50) {
        cookieCount -= 50; // Deduct cost
        cookiesPerClick += 5; // Increase cookies per click
        updateDisplay();
    }
});

// Initial display update
updateDisplay();
