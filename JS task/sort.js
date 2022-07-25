let arr = [];
let n=+prompt("Enter size: ");

for (let i=0; i<n; i++){
    arr.push(+prompt(`Enter ${i+1} element:`));
}

function sort(arr){
    for (let i = 0; i < n-1; i++){
        for (let j = 0; j < n-i-1; j++){
            if (arr[j] > arr[j+1])
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
        }
    }
    return arr;
}

sort(arr);

alert(arr.join(','));

