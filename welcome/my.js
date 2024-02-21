var welcome=require("./welcome");
const prompt=require('prompt-sync')();
var a=prompt("Enter your name : ");
console.log(welcome.welcome(a));