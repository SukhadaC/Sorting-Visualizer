// Function to generate random integers in a specified range
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to create and add bars to the bars-container
function createBars() {
    const barsContainer = document.getElementById('bars-container');
    barsContainer.innerHTML = ''; // Clear existing bars
    
    const barCount = 50;
    const barClass = 'bar';

    for (let i = 0; i < barCount; i++) {
        const newBar = document.createElement('div');
        newBar.classList.add(barClass);

        // Generate a random integer between 0 and 100 for the bar's height
        const barHeight = getRandomInt(0, 50);
        newBar.style.height = `${barHeight+50}px`; // Scale the height as a percentage

        barsContainer.appendChild(newBar);
    }
}

// Add an event listener to the "Generate New Bars" button
const newArrayButton = document.getElementById('newArray');
newArrayButton.addEventListener('click', createBars);

// Call createBars to initialize with 100 bars
createBars();
