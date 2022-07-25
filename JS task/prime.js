let x = +prompt("Enter number: ");

let isPrime = (number)=>{
    for(let i = 2; i <= Math.sqrt(number); i++){
        if(number % i == 0){
            return false;
            break;
        }
    }
    return true;
}

console.log(isPrime(x));