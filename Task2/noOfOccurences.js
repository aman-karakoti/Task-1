let s = prompt("Enter string");
let x = prompt("Enter character to be searched");
let count =0 ;
let n = s.length;
while(n--){
    if(s.includes(x)==true){
        count+=1;

    } 

}
console.log(count);
