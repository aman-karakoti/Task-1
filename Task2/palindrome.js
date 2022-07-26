let s = prompt("Enter string");

function isPalindrome(str){
    let last = str.length -1;
    let first =0;
    while(first<=last){
        if(str[first] == str[last]){
            first++;
            last--;
        }
        else{
            return false;
        }
        
    }  
    return true;
}
alert(isPalindrome(s));
