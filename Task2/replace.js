let str=prompt("enter string");
let s = prompt("Enter the character to be replaced");
let r = prompt("Enter the replacing character ");
const regex =  new RegExp(s,'gi');
let newStr = str.replace(regex , r);
alert(newStr);