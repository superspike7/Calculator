const numberBtns = document.querySelectorAll('.number');
const input = document.querySelector('.input');
const clearBtn = document.querySelector('#clear')
const backspaceBtn = document.querySelector('#backspace');
const dotBtn = document.querySelector('.dot');
const output = document.querySelector('.output');
const operatorBtns = document.querySelectorAll('.operator');
const equalsBtn = document.querySelector('#equals');
const sign = document.querySelector('.sign');

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;


// make calculator work
// const addOperation = e => {
//     const a = input.textContent;
//     sign.textContent = '+';
//     if (input.textContent !== null) {
//         input.innerHTML = ""
//         output.textContent += a;
//     }
// }

const addOperation = e => {
    const a = input.textContent;
    const operator = e.target.textContent;
    sign.textContent = operator;
        if (input.textContent !== null) {
        input.innerHTML = ""
        output.textContent += a;
    } 
}
// fix addoparation function to operate without using equals button

const operate = e => {
    const a = output.textContent;
    const b = input.textContent;
    if (sign.textContent === '+') {
        clear();
        output.textContent = add(+a, +b);
    } else if (sign.textContent === '-') {
        clear();
        output.textContent = subtract(+a, +b);
    } else if (sign.textContent === 'x') {
        clear();
        output.textContent = multiply(+a, +b);
    } else if (sign.textContent === '÷') {
        clear();
        output.textContent = divide(+a, +b);
    }
}


const clear = e => {
    input.innerHTML = ""
    output.innerHTML = ""
    sign.innerHTML = ""

};
const backspace = e => {
    if (input.innerHTML === '') {
        console.log('empty')
    } else {
        input.removeChild(input.lastChild)};
    }

const addNum = e => {
    const numVal = e.target.getAttribute('value');
    const num = document.createTextNode(numVal);
    input.appendChild(num);
}

const addDot = e => {
    if (input.innerHTML.indexOf('.') < 1) {
        input.textContent += '.';
    }
}

clearBtn.addEventListener('click', clear);
backspaceBtn.addEventListener('click', backspace);
dotBtn.addEventListener('click', addDot);
numberBtns.forEach(numBtn => {
    numBtn.addEventListener('click', addNum);
});
operatorBtns.forEach(operatorBtn => {
    operatorBtn.addEventListener('click', addOperation)
});
equalsBtn.addEventListener('click', operate);