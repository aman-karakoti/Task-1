let input = prompt("Please enter string");

function findLength(str){
    let count = 0;
    for(let i in str){
        count++;
    }
    return count;
}

alert(findLength(input));
