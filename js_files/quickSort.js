const delay = 500;

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function swap(arr, a, b) {
    await sleep(2000);
    let h1 = parseInt(arr[a].style.height);
    let h2 = parseInt(arr[b].style.height);
    arr[b].style.backgroundColor = 'red';
    arr[a].style.backgroundColor = 'red';
    let temp = arr[a].style.height;
    arr[a].style.height = arr[b].style.height;
    arr[a].textContent = h2 - 150;
    arr[b].style.height = temp;
    arr[b].textContent = h1 - 150;
    await sleep(200);
    arr[b].style.backgroundColor = '';
    arr[a].style.backgroundColor = '';
}

async function partition(arr, start, end) {
    let pivotIndex = start;
    let pivotValue = end;
    arr[pivotValue].style.backgroundColor = 'white';

    for (let i = start; i < end; i++) {
        let h1 = parseInt(arr[i].style.height);
        let h2 = parseInt(arr[pivotValue].style.height);
        if (h1 < h2) {
            await swap(arr, i, pivotIndex);
            pivotIndex++;
        }
    }

    await swap(arr, pivotIndex, pivotValue);
    arr[pivotValue].style.backgroundColor = '';

    return pivotIndex;
}

async function quickSort(arr, start, end) {
    if (start >= end)
        return;

    let index = await partition(arr, start, end);
    await quickSort(arr, start, index - 1);
    await quickSort(arr, index + 1, end);
}

async function quickSortVisualization() {
    const barsContainer = document.getElementById('bars-container');
    const bars = barsContainer.getElementsByClassName('bar');

    const define = document.getElementById('defination');
    define.innerHTML = `
        <div class="pseudocode-heading">Quick Sort Algorithm:</div>
        <div class="psudeocode">
            <div class="pseudo-text-content">
                QuickSort is a sorting algorithm based on the Divide and Conquer algorithm that 
                picks an element as a pivot and partitions the given array around the picked pivot by placing 
                the pivot in its correct position in the sorted array, where elements on the left side of the pivot are 
                always less than the pivot and elements on the right side are always greater than the pivot.
            </div>
            <div class="algorithm-info">
                <div class="time-n-space">
                    ○ Time Complexity TC:
                    <br>
                    1. Worst Case: O(N<sup>2</sup>).
                    <br>
                    2. Avg / Best Case: O(NlogN).
                    <br>
                    ○ Space Complexity TC: O(1)
                    <br>
                where
                <br>
                N=size of array
                </div>
                <div class="code-editor">
                PseudoCode:
                <p class="code-text"> function insertionSort(array):
                quickSort(array, start, )
                if (start >= end)
                    return
                  pivotIndex =partition(array,start, end)
                  quickSort(array, start, pivotIndex - 1)
                  quickSort(array, pivotIndex, end)
              
              partition(array, start, end)
                set end as pivotIndex
                storeIndex =start - 1
                for i =start + 1 to end
                if element[i] < pivotElement
                  swap element[i] and element[storeIndex]
                  storeIndex++
                swap pivotElement and element[storeIndex+1]
              return storeIndex + 1
                </div>
            </div>
        </div>`;

    await sleep(500);
    await quickSort(bars, 0, bars.length - 1);
}

const quickSortButton = document.getElementById('quickSort');
quickSortButton.addEventListener('click', quickSortVisualization);
