let oprand = 0;
let opcode = '';
let factNum = 0;
let flag = false;

const input = document.querySelector('input');

/**
 * Event Listener for numbers button and decimal point button
 */
const num = document.querySelectorAll('.num');
num.forEach((ele) => {
  ele.addEventListener('click', () => {
    input.value += ele.textContent;
  });
});

/**
 * Event Listeners for trigonometry and AC(all clear) buttons
 */
const trigolog = document.querySelectorAll('.trigolog');
trigolog.forEach((button) => {
  button.addEventListener('click', () => {
    switch (button.textContent) {
      case 'sin':
        input.value = '' + Math.sin(Number(input.value));
        break;
      case 'cos':
        input.value = '' + Math.cos(Number(input.value));
        break;
      case 'tan':
        input.value = '' + Math.tan(Number(input.value));
        break;
      case 'cot':
        input.value = '' + 1 / Math.tan(Number(input.value));
        break;
      case 'sec':
        input.value = '' + 1 / Math.cos(Number(input.value));
        break;
      case 'csc':
        input.value = '' + 1 / Math.sin(Number(input.value));
        break;
      case 'log':
        input.value = '' + 1 / Math.log10(Number(input.value));
        break;
      case 'ln':
        input.value = '' + 1 / Math.log(Number(input.value));
        break;
      case 'e':
        input.value = '' + Math.E;
        break;
      case 'AC':
        opcode = 0;
        oprand = '';
        input.value = '';
        break;
    }
  });
});

/**
 * Event listeners for pictured buttons such delete,square root and PI
 */
const del = document.querySelector('.del');
del.addEventListener('click', () => {
  input.value = input.value.substring(0, input.value.length - 1);
});

const pi = document.querySelector('.pi');
pi.addEventListener('click', () => {
  input.value = '' + Math.PI;
});

const sqrt = document.querySelector('.sqrt');
sqrt.addEventListener('click', () => {
  input.value = Math.sqrt(Number(input.value)).toLocaleString();
});

/**
 * Event listeners to store first operand of arithmatic operations
 */
const arithmatic = document.querySelectorAll('.arithmatic');
arithmatic.forEach((button) => {
  button.addEventListener('click', () => {
    oprand = Number(input.value);
    opcode = button.textContent;
    input.value = '';
  });
});

/**
 * Event listeners to do the arithmatic operations
 */
const equal = document.querySelector('.equal');
equal.addEventListener('click', () => {
  switch (opcode) {
    case '+':
      input.value = (oprand + Number(input.value)).toLocaleString();
      break;
    case '-':
      input.value = (oprand - Number(input.value)).toLocaleString();
      break;
    case 'x':
      input.value = (oprand * Number(input.value)).toLocaleString();
      break;
    case '/':
      input.value = (oprand / Number(input.value)).toLocaleString();
      break;
    case 'mod':
      input.value = (oprand % Number(input.value)).toLocaleString();
      break;
    case 'x^y':
      input.value = Math.pow(oprand, Number(input.value)).toLocaleString();
      break;
  }
});

/**
 * Event listeners for operation with single argument
 */
const singleOprand = document.querySelectorAll('.singleOprand');
singleOprand.forEach((button) => {
  button.addEventListener('click', () => {
    switch (button.textContent) {
      case '1/x':
        input.value = '' + 1 / Number(input.value);
        break;
      case '|x|':
        input.value = Math.abs(Number(input.value)).toLocaleString();
        break;
      case '10^x':
        input.value = Math.pow(10, Number(input.value)).toLocaleString();
        break;
      case 'x!':
        factNum = Number(input.value);
        input.value = factor(factNum).toLocaleString();
        break;
    }
  });
});

function factor(num) {
  if (num === 1) {
    return 1;
  }
  return num * factor(num - 1);
}

/**
 * Event listener for Other function button
 */
const otherFunc = document.querySelector('.calculator-other-function');
const toggle = document.querySelector('.toggle');
otherFunc.addEventListener('click', () => {
  if (flag) {
    flag = false;
    toggle.classList.remove('toggleOn');
    toggle.classList.add('toggleOff');
  } else {
    flag = true;
    toggle.classList.remove('toggleOff');
    toggle.classList.add('toggleOn');
  }
});

/**
 * Event listeners for other functions such floor, ceiling and etc.
 */
const otherFunction = document.querySelectorAll('.otherFunc');
otherFunction.forEach((button) => {
  button.addEventListener('click', () => {
    switch (button.textContent) {
      case 'floor':
        input.value = Math.floor(Number(input.value)).toLocaleString();
        break;
      case 'ceiling':
        input.value = Math.ceil(Number(input.value)).toLocaleString();
        break;
      case 'asin':
        input.value = Math.asin(Number(input.value)).toLocaleString();
        break;
      case 'acos':
        input.value = Math.acos(Number(input.value)).toLocaleString();
        break;
      case 'atan':
        input.value = Math.atan(Number(input.value)).toLocaleString();
        break;
    }
  });
});
