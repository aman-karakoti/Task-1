let arr = [];
let n=+prompt("Enter size: ");

for (let i=0; i<n; i++){
    arr.push(+prompt(`Enter ${i+1} element:`));
}

function largestInArray(arr){
    let lrgst=arr[0];
    for(let i=1; i<arr.length;i++){
        if(arr[i]>lrgst){
            lrgst=arr[i];
        }    
    }
    return lrgst;
}

alert(largestInArray(arr));
