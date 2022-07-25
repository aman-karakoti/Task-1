let  x = prompt('Enter number:');

function isPrime(number){
    for(let i = 2; i <= Math.sqrt(number); i++){
        if(number % i == 0){
            return false;
            break;
        }
    }
    return true;
}

function prime(number){
    let arr = [];
    for(let i = 2; i <= number; i++){
        if(isPrime(i)){
            arr.push(i);
        }
    }
    alert(arr.join(','));
}

prime(x);
