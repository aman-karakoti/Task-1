let x = +prompt("Enter number: ");

let fact = (x)=>{
    let result = 1;
    while(x>0){
        result *= x;
        x--;
    }
    return result;    
}

alert(`factorial : ${fact(x)}`);