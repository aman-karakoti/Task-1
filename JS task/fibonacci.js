let x = +prompt("Enter number to generate fibonacci series :");

function fibonacci(number) {
    let first = 0;
    let second = 1;
    let Arr = [];
    Arr.push(first);
    Arr.push(second);

    while(number>2){
        let next = first+second;
        first = second;
        second = next;
        Arr.push(next);
        number--;
    }

    alert(Arr.toString());
}

fibonacci(x);
