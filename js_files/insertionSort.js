async function insertionSortVisualize() {
    const barsContainer = document.getElementById('bars-container');
    const bars = barsContainer.getElementsByClassName('bar');
    const delay = 400; // Adjust the delay as needed
    const define=document.getElementById('defination');

    define.innerHTML=`
    <div class="pseudocode-heading">Insertion Sort Algorithm:</div>
    <div class="psudeocode">
        
          <div class="pseudo-text-content">

          To sort an array of size N in ascending order iterate over the array and compare the 
          current element (key) to its predecessor, if the key element is smaller than its predecessor, 
          compare it to the elements before. Move the greater elements one position up to make space for 
          the swapped element.
          </div>
            
          
           <div class="algorithm-info">
            <div class="time-n-space">
                ○	Time Complexity TC:O(N<sup>2</sup>)
                <br>
                ○	Space Complexity TC:O(1)
             </div>
            <div class="code-editor">
PseudoCode:
                <p class="code-text"> function insertionSort(array):
                for index from 1 to length(array)
                    key = array[index]
                    j = index - 1
                    while j >= 0 and array[j] > key
                        array[j + 1] = array[j]
                        j = j - 1
                    array[j + 1] = key
</p>
             
             </div>
            
           </div>



    </div>

    </div>
    `

    for (let i = 0; i < bars.length; i++) {
       
        let j = i;

        // Highlight the current bar in red
        
        // Delay for visualization
        await new Promise(resolve => setTimeout(resolve, delay));
       
        while (j >0 && parseInt(bars[j-1].style.height) > parseInt(bars[j].style.height)) {
            // Highlight bars being compared in red
            
            var  height1=parseInt(bars[j].style.height);
            var height2=parseInt(bars[j-1].style.height);
            

            

        //swapping
            const temp=bars[j].style.height;
            bars[j].style.backgroundColor='red';
            bars[j-1].style.backgroundColor='red';
            await new Promise(resolve => setTimeout(resolve, delay));
             bars[j].style.height=bars[j-1].style.height;
             bars[j].textContent=height2-50;
             bars[j-1].style.height=temp;
             bars[j-1].textContent=height1-50;

             bars[j].style.backgroundColor='yellow';
             bars[j-1].style.backgroundColor='green';
             j--;

       
    }
}

    // Highlight all bars in green to show they are sorted
    for (const bar of bars) {
        bar.style.backgroundColor = 'yellow';
    }
}


// Add an event listener to the "Insertion Sort" button
const insertionSortButton = document.getElementById('insertionSort');
insertionSortButton.addEventListener('click', insertionSortVisualize);
