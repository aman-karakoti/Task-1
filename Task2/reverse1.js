let s = prompt("Enter string");

function reversea(str){
    let last = str.length -1;
    let first =0;
    while(first<=last){
        [str[first], str[last]] = [str[last], str[first]];
        first++;
        last--;
    }  
    
    alert(str);
    
}
reversea(s);