//Problem-3
//code created in javaScript

const display = require("prompt-sync"); //it is a javascript function that creates prompting functions

const prompt = display(); //a function that used to display contents in console

let count = 0; //initial count

let range = parseInt(prompt("Enter the Range")); //display a message "Enter the Range" and store a range value which user entered

if (range % 2 == 0) {
  range -= 1; //if range value is even than make it as odd by substracting 1
}

for (i = 1; 1 <= 1000; i++) {
  if (i % 2 != 0) {
    console.log(i);//display odd value
    count = count + 1;//increment count value by one
  }
  if (count == range) //check whether count value reached to the range value ,which is entered by user
  break;
}
