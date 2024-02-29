async function selectionSortVisualize() {
    const barsContainer = document.getElementById('bars-container');
    const bars = barsContainer.getElementsByClassName('bar');
    const delay = 500; // Adjust the delay as needed

    const define=document.getElementById('defination');

    define.innerHTML=`
    <div class="pseudocode-heading">SelectionSort Algorithm:</div>
    <div class="psudeocode">
        
          <div class="pseudo-text-content">
          Selection sort is a sorting algorithm that selects the smallest element from an 
          unsorted list in each iteration and places that element at the beginning of the unsorted list.
          </div>
            
          
           <div class="algorithm-info">
            <div class="time-n-space">
                ○	Time Complexity TC:O(N<sup>2</sup>)
                <br>
                ○	Space Complexity TC:O(1)
             </div>
            <div class="code-editor">
PseudoCode:
                <p class="code-text"> selectionSort(array, size):
                repeat (size - 1) times
                set the first unsorted element as the minimum
                    for each of the unsorted elements
                        if element < currentMinimum
                        set element as new minimum
                         swap minimum with first unsorted position
              end selectionSort
</p>
             
             </div>
            
           </div>



    </div>

    </div>
    `
    
    for (let i = 0; i < bars.length - 1; i++) {
        let minIndex = i;
        bars[minIndex].style.backgroundColor = 'red';

        for (let j = i + 1; j < bars.length; j++) {
            await new Promise(resolve => setTimeout(resolve, delay));
            // Highlight bars being compared in red
            bars[j].style.backgroundColor = 'red';
           
            // Delay for visualization
            await new Promise(resolve => setTimeout(resolve, delay));

            let height1 = parseInt(bars[j].style.height);
            let height2 = parseInt(bars[minIndex].style.height);

            if (height1 < height2) {
                minIndex = j;
            }

            // Remove red highlight
            bars[j].style.backgroundColor = '';

        }
        bars[minIndex].style.backgroundColor ='violet';
        let height1 = parseInt(bars[i].style.height);
        let height2 = parseInt(bars[minIndex].style.height);
        // Swap elements
        const temp = bars[i].style.height;
        bars[i].style.height = bars[minIndex].style.height;
        bars[i].textContent=height2-50;
        bars[minIndex].style.height = temp;
        bars[minIndex].textContent=height1-50;

        // Highlight the bar in green after placing it in the correct position
        bars[i].style.backgroundColor = 'green';
        bars[minIndex].style.backgroundColor = '';

        // Delay for visualization
        await new Promise(resolve => setTimeout(resolve, delay));
    }

    // Highlight the last bar in green
    bars[bars.length - 1].style.backgroundColor = 'green';
}

// Add an event listener to the "Selection Sort" button
const selectionSortButton = document.getElementById('selectionSort');
selectionSortButton.addEventListener('click', selectionSortVisualize);
