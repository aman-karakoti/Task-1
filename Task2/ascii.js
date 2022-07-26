let c = prompt('Enter characters');

function findASCII(str){
    let i=0;
    while(i<str.length){
        alert(`ASCII value of ${str[i]} is ${str.charCodeAt(i)}`);
        i++;
    }
}
findASCII(c);