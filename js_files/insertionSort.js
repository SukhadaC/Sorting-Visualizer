async function insertionSortVisualize() {
    const barsContainer = document.getElementById('bars-container');
    const bars = barsContainer.getElementsByClassName('bar');
    const delay = 0.1; // Adjust the delay as needed

    for (let i = 1; i < bars.length; i++) {
        const currentBar = bars[i];
        const currentHeight = parseInt(currentBar.style.height);
        let j = i - 1;

        // Highlight the current bar in red
        currentBar.style.backgroundColor = 'red';

        // Delay for visualization
        await new Promise(resolve => setTimeout(resolve, delay));

        while (j >= 0 && parseInt(bars[j].style.height) > currentHeight) {
            // Highlight bars being compared in red
            bars[j].style.backgroundColor = 'red';
            bars[j + 1].style.backgroundColor = 'red';

            // Delay for visualization
            await new Promise(resolve => setTimeout(resolve, delay));

            // Swap elements
            bars[j + 1].style.height = bars[j].style.height;

            // Remove red highlight
            bars[j].style.backgroundColor = '';

            j--;

            // Highlight the current bar in green after placing it in the correct position
            currentBar.style.backgroundColor = 'green';

            // Delay for visualization
            await new Promise(resolve => setTimeout(resolve, delay));
        }

        // Place the current bar in the correct position
        bars[j + 1].style.height = `${currentHeight}px`;

        // Remove the green highlight
        currentBar.style.backgroundColor = '';
    }

    // Highlight all bars in green to show they are sorted
    for (const bar of bars) {
        bar.style.backgroundColor = 'green';
    }
}

// Add an event listener to the "Insertion Sort" button
const insertionSortButton = document.getElementById('insertionSort');
insertionSortButton.addEventListener('click', insertionSortVisualize);
