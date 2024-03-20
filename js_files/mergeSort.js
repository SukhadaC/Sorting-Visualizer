// let arr=[2,9,4,7,8,5];

// const merge=(arr,start,mid,end)=>
// {
//     let temp=[];
//     let i=start;
//     let j=mid+1;
//     while(i<=mid&&j<=end)
//     {
//         if(arr[i]<arr[j])
//         {
//             temp.push(arr[i]);
//             i++;
//         }
//         else{
//             temp.push(arr[j]);
//             j++;
//         }
//     }
//     while(i<=mid)
//     {
//         temp.push(arr[i]);
//         i++;
//     }
//     while(j<=end)
//     {
//         temp.push(arr[j]);
//         j++;
//     }
//     for(let i=start;i<=end;i++)
//     {
//         arr[i]=temp[i-start];
//     }


// }
// const mergeSort=(arr,start,end)=>{
//         if(start>=end)
//         return;
//     let mid=Math.floor((start+end)/2);
//     mergeSort(arr,start,mid);
//     mergeSort(arr,mid+1,end);
//     merge(arr,start,mid,end);
// }

// console.log(arr);
// mergeSort(arr,0,arr.length-1);
// console.log(arr);