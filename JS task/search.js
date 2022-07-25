let arr = [];
let n=+prompt("Enter size: ");

for (let i=0; i<n; i++){
    arr.push(+prompt(`Enter ${i+1} element:`));
}
let number = +prompt(" enter number to be searched: ");
function searchElement(arr,element){
    for (let i=0; i<n; i++) {
        if(arr[i]==element) 
            return true;
    
    }
    return false;
}

alert(searchElement(arr,number));