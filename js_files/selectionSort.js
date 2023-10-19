async function selectionSortVisualize() {
    const barsContainer = document.getElementById('bars-container');
    const bars = barsContainer.getElementsByClassName('bar');
    const delay = 1; // Adjust the delay as needed

    for (let i = 0; i < bars.length - 1; i++) {
        let minIndex = i;

        for (let j = i + 1; j < bars.length; j++) {
            // Highlight bars being compared in red
            bars[j].style.backgroundColor = 'red';
            bars[minIndex].style.backgroundColor = 'red';

            // Delay for visualization
            await new Promise(resolve => setTimeout(resolve, delay));

            const height1 = parseInt(bars[j].style.height);
            const height2 = parseInt(bars[minIndex].style.height);

            if (height1 < height2) {
                minIndex = j;
            }

            // Remove red highlight
            bars[j].style.backgroundColor = '';
            bars[minIndex].style.backgroundColor = '';
        }

        // Swap elements
        const temp = bars[i].style.height;
        bars[i].style.height = bars[minIndex].style.height;
        bars[minIndex].style.height = temp;

        // Highlight the bar in green after placing it in the correct position
        bars[i].style.backgroundColor = 'green';

        // Delay for visualization
        await new Promise(resolve => setTimeout(resolve, delay));
    }

    // Highlight the last bar in green
    bars[bars.length - 1].style.backgroundColor = 'green';
}

// Add an event listener to the "Selection Sort" button
const selectionSortButton = document.getElementById('selectionSort');
selectionSortButton.addEventListener('click', selectionSortVisualize);
