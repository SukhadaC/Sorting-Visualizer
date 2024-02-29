async function bubbleSortVisualize() {
    const barsContainer = document.getElementById('bars-container');
    const bars = barsContainer.getElementsByClassName('bar');
    const delay = 200; // Adjust the delay as needed
const define=document.getElementById('defination');

    define.innerHTML=`
    <div class="pseudocode-heading">Bubble Sort Algorithm:</div>
    <div class="psudeocode">
        
          <div class="pseudo-text-content">

            Bubble Sort is a simple sorting algorithm that repeatedly steps 
            through the list, compares adjacent elements, and swaps them if they are in the wrong order.
             The pass through the list is repeated until the list is sorted. It is named for the way smaller or
              larger elements "bubble" to the top of the list.
           
          </div>
            
          
           <div class="algorithm-info">
            <div class="time-n-space">
                ○	Time Complexity TC:O(N<sup>2</sup>)
                <br>
                ○	Space Complexity TC:O(1)
             </div>
            <div class="code-editor">
PseudoCode:
                <p class="code-text"> procedure bubbleSort(A: list of sortable items)
                 n = length(A)
                 repeat
                     swapped = false
                     for i = 1 to n-1 inclusive do
                         if A[i] > A[i+1] then
                             swap A[i] and A[i+1]
                             swapped = true
                         end if
                     end for
                 until not swapped
             end procedure
</p>
             
             </div>
            
           </div>



    </div>

    </div>
    `
    await new Promise(resolve => setTimeout(resolve, delay));
    
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
                bars[j].textContent=height2-50;
                bars[j + 1].style.height = temp;
                bars[j+1].textContent=height1-50;
            }

            // Remove red highlight and set green for bars in their correct position
            // bars[j].style.backgroundColor = 'lightgreen';
            // bars[j + 1].style.backgroundColor = 'lightgreen';
          

            // Delay for visualization
            await new Promise(resolve => setTimeout(resolve, delay));

            // Remove green highlight
            bars[j].style.backgroundColor = '';
            bars[j + 1].style.backgroundColor = '';
        }
    }
    //to depict that array is Sorted
    for (let i = 0; i < bars.length; i++) {
        bars[i].style.backgroundColor = 'lightgreen';
    }
}

// Add an event listener to the "Bubble Sort" button
const bubbleSortButton = document.getElementById('bubbleSort');

bubbleSortButton.addEventListener('click', bubbleSortVisualize);

