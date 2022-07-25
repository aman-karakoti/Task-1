let Arr = [];
let n = +prompt('Enter size of array');

for(let i = 0; i < n; i++){
    Arr.push(prompt(`Enter ${i+1} element:`));
}

function findLength(arr){
    let count=0;
    for(let i in arr){
        count++;
    }
    return count;
}

alert(findLength(Arr));