const numbersBtn = document.querySelectorAll('.number');
const input = document.querySelector('.input');
const clearBtn = document.querySelector('#clear')

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

const operate = (operator) => {
    if (operator === '+') {
        return add(a,b);
    } else if (operator === '-') {
        return subtract(a,b)
    }
}
// make calculator work

const clear = e => input.innerHTML = "";

const addNum = e => {
    const numVal = e.target.getAttribute('value');
    const num = document.createTextNode(numVal)
    input.appendChild(num);
}

clearBtn.addEventListener('click', clear);
numbersBtn.forEach(function(numBtn){
    numBtn.addEventListener('click', addNum);
})