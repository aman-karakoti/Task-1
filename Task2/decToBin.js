let num=prompt("Enter number");
function decToBin(n){
    let arr = [];
    while(n>0){
        let lsb = n&1;
        arr.push(lsb);
         n = n>>1;
    }
    alert(arr.reverse().join(""));
}
decToBin(num);