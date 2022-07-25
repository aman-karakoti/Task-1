let a = prompt("Enter length of first side:");
let b = prompt("Enter length of second side:");
let c = prompt("Enter length of third side:");

function findArea(x,y,z){
    let s = (x+y+z)/2;
    let Area = Math.sqrt(s*(s-x)*(s-y)*(s-z));
    return Area;
}

alert(findArea(x,y,z));