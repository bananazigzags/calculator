// basic calculator functions
const add = function (num1, num2) {
    return num1 + num2;
};

const subtract = function (num1, num2) {
    return num1 - num2;
};

const multiply = function (num1, num2) {
    return num1 * num2;
};

const divide = function(num1, num2) {
    if (num2 == 0) {
        return "NOPE";
    }
    return Math.round((num1 / num2) * 10) / 10;
};

// takes an operator and numbers and performs one of the basic functions
const operate = function(operator, num1, num2) {
    switch(operator) {
        case "add":
            return add(num1, num2);
            break;
        case "subtract":
            return subtract(num1, num2);
            break;
        case "multiply":
            return multiply(num1, num2);
            break;
        case "divide":
            return divide(num1, num2);
            break;
    };
};

// displays each number clicked
const numbers = document.querySelectorAll('.numbers');
const display = document.getElementById("display");
numbers.forEach(number => {
    number.addEventListener('click', () => {
        display.textContent += number.id;
    });
});

// clears the screen when C is clicked
document.getElementById("C").addEventListener('click', () => {
    display.textContent = "";
    firstNum = undefined;
    secondNum = undefined;
});

let firstNum;
let secondNum;
let operator;

// when an operator is clicked, saves the first number and operator,
// and clears the display
const commands = document.querySelectorAll(".operators");
commands.forEach((command) => command.addEventListener('click', () => {
    firstNum = parseInt(display.textContent);
    operator = `${command.id}`;
    display.textContent = "";
}));

// when "equals" is clicked, saves the second number, and displays the result
document.getElementById("equal").addEventListener('click', () => {
    secondNum = parseInt(display.textContent);
    let result = operate(operator, firstNum, secondNum);
    display.textContent = result;
    firstNum = result;
});

// displays each number pressed
document.addEventListener('keydown', keyPress);

function keyPress(e) {

    switch(e.keyCode) {
        // C clears the screen
        case 67:
            display.textContent = "";
            firstNum = undefined;
            secondNum = undefined;
            break;
        // numbers
        case 48:
            display.textContent += "0";
            break;
        case 49:
            display.textContent += "1";
            break;
        case 50:
            display.textContent += "2";
            break;
        case 51:
            display.textContent += "3";
            break;
        case 52:
            display.textContent += "4";
            break;
        case 53:
            display.textContent += "5";
            break;
        case 54:
            display.textContent += "6";
            break;
        case 55:
            display.textContent += "7";
            break;
        case 56:
            display.textContent += "8";
            break;
        case 57:
            display.textContent += "9";
            break;
        case 189:
        case 187:
        case 88:
        case 191:
            firstNum = parseInt(display.textContent);
            switch(e.keyCode) {
                case 189:
                    operator = "subtract";
                    break;
                case 187:
                    operator = "add";
                    break;
                case 88:
                    operator = "multiply";
                    break;
                case 191:
                    operator = "divide";
                    break;
            }
            display.textContent = "";
            break;
        case 13:
            secondNum = parseInt(display.textContent);
            let result = operate(operator, firstNum, secondNum);
            display.textContent = result;
            firstNum = result;
            break;
        case 8:
            display.textContent = display.textContent.slice(0, -1);
            break;
    }
};