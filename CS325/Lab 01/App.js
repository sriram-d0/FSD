var prompt = require('prompt-sync')();
var age = prompt('How old are you? ');
if (age < 18) {
    console.log('You are a minor.');
} else {
    console.log('You are an adult.');
}
