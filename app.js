const numbersBtn = document.querySelectorAll('.number');
const input = document.querySelector('.input');
const clearBtn = document.querySelector('#clear')
const backspaceBtn = document.querySelector('#backspace');
const dotBtn = document.querySelector('.dot');
const output = document.querySelector('.output');
const addBtn = document.querySelector('#add');
const equalsBtn = document.querySelector('#equals');

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;


// make calculator work
const addNumbers = e => {
    const a = input.textContent;
    input.innerHTML = ""
    output.textContent += a;
}

const operate = e => {
    const a = output.textContent;
    const b = input.textContent;
    output.innerHTML = +a + +b;
    input.innerHTML = ""
}

const clear = e => {
    input.innerHTML = ""
    output.innerHTML = ""};
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
numbersBtn.forEach(function(numBtn){
    numBtn.addEventListener('click', addNum);
})
addBtn.addEventListener('click', addNumbers);
equalsBtn.addEventListener('click', operate);