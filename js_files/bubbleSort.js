async function bubbleSortVisualize() {
    const barsContainer = document.getElementById('bars-container');
    const bars = barsContainer.getElementsByClassName('bar');
    const delay = 1; // Adjust the delay as needed

    for (let i = 0; i < bars.length - 1; i++) {
        for (let j = 0; j < bars.length - i - 1; j++) {
            // Highlight bars being compared in red
            bars[j].style.backgroundColor = 'red';
            bars[j + 1].style.backgroundColor = 'red';

            // Delay for visualization
            await new Promise(resolve => setTimeout(resolve, delay));

            const height1 = parseInt(bars[j].style.height);
            const height2 = parseInt(bars[j + 1].style.height);

            if (height1 > height2) {
                // Swap elements
                const temp = bars[j].style.height;
                bars[j].style.height = bars[j + 1].style.height;
                bars[j + 1].style.height = temp;
            }

            // Remove red highlight and set green for bars in their correct position
            bars[j].style.backgroundColor = ' ';
            bars[j + 1].style.backgroundColor = ' ';
          

            // Delay for visualization
            await new Promise(resolve => setTimeout(resolve, delay));

            // Remove green highlight
            bars[j].style.backgroundColor = ' ';
            bars[j + 1].style.backgroundColor = 'green';
        }
    }
    //to depict that array is Sorted
    for (let i = 0; i < bars.length - 1; i++) {
        bars[i].style.backgroundColor = 'green';
    }
}

// Add an event listener to the "Bubble Sort" button
const bubbleSortButton = document.getElementById('bubbleSort');
bubbleSortButton.addEventListener('click', bubbleSortVisualize);

