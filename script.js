let display = document.getElementById('display');
let operation = '';
let operand1 = 0;
let operand2 = null;

function appendNumber(number) {
 display.value = display.value * 10 + number;
}

function performOperation(op) {
 operation = op;
 operand1 = display.value * 1;
 display.value = '';
 operand2 = null;
}

function calculateResult() {
 operand2 = display.value * 1;
 switch (operation) {
    case '+':
      display.value = operand1 + operand2;
      break;
    case '-':
      display.value = operand1 - operand2;
      break;
    case '*':
      display.value = operand1 * operand2;
      break;
    case '/':
      display.value = operand1 / operand2;
      break;
 }
}

function clearDisplay() {
 display.value = '';
}