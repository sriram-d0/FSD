var calci=require('./calculator');
const prompt=require('prompt-sync')();
let a=parseInt(prompt("Enter 1st Number : "));
let b=parseInt(prompt("Enter 2nd Number "));
console.log("Addition of "+a+","+b+" is "+calci.add(a,b));
console.log("Subtraction of "+a+","+b+" is "+calci.sub(a,b));
console.log("Multiplication of "+a+","+b+" is "+calci.mul(a,b));
console.log("Division of "+a+","+b+" is "+calci.div(a,b));