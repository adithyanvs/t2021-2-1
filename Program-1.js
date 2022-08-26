//Problem-1
//code created in javaScript

const display = require("prompt-sync"); //it is a javascript function that creates prompting functions

const prompt = display(); //a function that used to display contents in console

class calculator {
  add(num1, num2) {
    let result = num1 + num2;//Addition Operation
    return result;
  }
  sub(num1, num2) {
    let result = num1 - num2;//Substraction Operation
    return result;
  }
  mul(num1, num2) {
    let result = num1 * num2;//Multiplication Operation
    return result;
  }
  div(num1, num2) {
    let result = num1 / num2;//Division Operation
    return result;
  }
}

var calc = new calculator();
const f1 = parseInt(prompt("Enter the first number"));//Prompt the message and take first number from user.
const f2 = parseInt(prompt("Enter the seocnd number"));//Prompt the message and take second number from user.
const operation = prompt("Select the operation : +,-,*,/");//Prompt the message and take the required operator from user.

if (operation == "+") {
  const result = calc.add(f1, f2);//Addition call
  console.log(result);//Display Result
}
if (operation == "-") {
  const result = calc.sub(f1, f2);//substraction call
  console.log(result);//Display Result
}
if (operation == "*") {
  const result = calc.mul(f1, f2);//Multiplication call
  console.log(result);//Display Result
}
if (operation == "/") {
  const result = calc.div(f1, f2);//Division call
  console.log(result);//Display Result
}
