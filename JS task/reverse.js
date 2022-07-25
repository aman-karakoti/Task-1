let Arr = [];
let n = +prompt('Enter size of array');

for(let i = 0; i < n; i++){
    Arr.push(prompt(`Enter ${i+1} element:`));
}

function reverseArray(arr){
    let first = 0;
    let last = n-1;
    while(first<=last){
        [arr[first], arr[last]] = [arr[last], arr[first]];
        first++;
        last--;

    }
    return arr;
}

alert(reverseArray(Arr));