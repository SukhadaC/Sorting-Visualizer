
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function merge(bars, start, mid, end) {
    let temp = [];
    let i = start;
    let j = mid + 1;

    while (i <= mid && j <= end) {
        let h1 = parseInt(bars[i].style.height);
        let h2 = parseInt(bars[j].style.height);

        if (h1 > h2) {
            temp.push(h2);
            bars[j].style.backgroundColor = 'red'; // Highlighting the smaller element
            j++;
        } else {
            temp.push(h1);
            bars[i].style.backgroundColor = 'red'; // Highlighting the smaller element
            i++;
        }
        await sleep(200); // Introduce delay for visualization
    }

    while (i <= mid) {
        let h1 = parseInt(bars[i].style.height);
        temp.push(h1);
        bars[i].style.backgroundColor = 'red'; // Highlighting the remaining elements
        i++;
    }

    while (j <= end) {
        let h2 = parseInt(bars[j].style.height);
        temp.push(h2);
        bars[j].style.backgroundColor = 'red'; // Highlighting the remaining elements
        j++;
    }

    await sleep(500); // Introduce delay for visualization

    for (let i = start; i <= end; i++) {
        bars[i].style.backgroundColor = ''; 
        bars[i].style.height = `${temp[i - start]}px`;
        bars[i].textContent = temp[i - start] - 150;
    }
}

async function mergeSort(bars, start, end) {
    if (start >= end)
        return;
    let mid = Math.floor((end + start) / 2);

    await mergeSort(bars, start, mid);
    await mergeSort(bars, mid + 1, end);

    await merge(bars, start, mid, end);

}

async function mergeSortVisualization() {
    const barsContainer = document.getElementById('bars-container');
    const bars = barsContainer.getElementsByClassName('bar');
    const defination=document.getElementById('defination');
    defination.innerHTML=`  <div class="pseudocode-heading">Merge Sort Algorithm:</div>
    <div class="psudeocode">
        <div class="pseudo-text-content">
        Merge sort is a sorting algorithm that follows the "divide and conquer" approach to sort a list of elements. Here's a simple definition:
        <br>
        1. <strong>Divide</strong>: It divides the list into smaller sublists until each sublist contains only one element. This is achieved recursively.
        <br>
        2. <strong>Conquer</strong>: It sorts the individual sublists.
        <br>
        3. <strong>Merge</strong>: It merges the sorted sublists back together to form a single sorted list. During this merging process, it compares elements from both sublists and arranges them in ascending order.
        
        By repeatedly dividing, sorting, and merging the sublists, merge sort efficiently sorts the entire list. It is 
        known for its stability, meaning it preserves the order of equal elements.
            <div class="time-n-space">
                ○ Time Complexity TC:
                <br>
                1. Worst Case: O(NlogN).
                <br>
                2. Avg / Best Case: O(NlogN).
                <br>
                ○ Space Complexity TC: O(N)
                <br>
                where
                <br>
                N=size of array
            </div>
            <div class="code-editor">
            PseudoCode:
            <p class="code-text"> function mergeSort(array):
            MergeSort(A[], start, end):
                 if start >= end 
                      return
                mid = (start+end)/2
                mergeSort(A[], start, mid)
                mergeSort(A[], mid+1, end)
                merge(A[], start, mid, end)
          
            merge(A[],start,mid,end):
                 l=start,r=mid+1
                 temp=[]
                 while(i<=mid&&r<=end):
                    if(A[i]<A[j])
                        temp.add(A[i])
                        i++;
                    else
                        temp.add(A[j])
                        j++;
                
                 while(i<=mid):
                    temp.add(A[i])
                    i++;

                 while(j<=mid):
                    temp.add(A[j])
                    j++
                
                Add all the elements of temp to original array A[]

            </div>
        </div>
    </div>`

    await mergeSort(bars, 0, bars.length - 1);
    
}

const mergeSortButton = document.getElementById('mergeSort');
mergeSortButton.addEventListener('click', mergeSortVisualization);
