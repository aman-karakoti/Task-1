let x = prompt("Enter number: ");


function squareRoot(number){
    for(let i = 2; i <= number/2; i++){
        if(i*i == number){
            return i;
        }    
        else if(i*i < number){
            continue;
        }
        else if(i*i > number){
            second=i;
            first=i-1;
            break;
        }

    }
    alert(first);
    alert(second);
    mid=(first+second)/2;
    while(mid*mid != number ){
        if(mid*mid > number){
            second=mid;
            mid=(first+mid)/2;
        }
        else if(mid*mid < number){
            first = mid;
            mid = (second+mid)/2;
        }
        console.log(mid);
    }
    return mid;
}

console.log(squareRoot(x));






