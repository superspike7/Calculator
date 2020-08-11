//query selectors
const numberBtns = document.querySelectorAll('.number');
const input = document.querySelector('.input');
const clearBtn = document.querySelector('#clear')
const backspaceBtn = document.querySelector('#backspace');
const dotBtn = document.querySelector('.dot');
const output = document.querySelector('.output');
const operatorBtns = document.querySelectorAll('.operator');
const equalsBtn = document.querySelector('#equals');
const sign = document.querySelector('.sign');



// functions
const addOperation = e => {
    const a = input.textContent;
    const b = output.textContent;
    const operator = e.target.textContent;
    const c = sign.textContent;
    input.innerHTML = "";
    output.textContent += a;
        if (sign.textContent !== "") {
           clear();
           output.textContent = mathOperation[c](b, a);
    } 
    sign.textContent = operator;
}

const checkDecimals = () => {
    const result = output.textContent;
    if (+result % 1 !== 0) {
       output.textContent = Math.round(+result).toFixed(2)
       console.log(result)
    }
}


const operate = e => {
    const a = output.textContent;
    const b = input.textContent;
    const c = sign.textContent;
    clear();
    output.textContent = mathOperation[c](a, b);
    checkDecimals();

}

const mathOperation = {
    '+': (a, b) => +a + +b,
    '-': (a, b) => +a - +b,
    'x': (a, b) => +a * +b,
    '÷': (a, b) => +a / +b,
}


const clear = e => {
    input.innerHTML = "";
    output.innerHTML = "";
    sign.innerHTML = "";

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


// fix keyboard support

const numKey = e => {
    const keyPressed = e.key.match(/[0-9]/);
    const num = document.createTextNode(keyPressed);
    if (num !== null) {
        input.appendChild(num);
    } else {
        return
    }
    
}

const addDot = e => {
    if (input.innerHTML.indexOf('.') < 1) {
        input.textContent += '.';
    }
}



// event listeners
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
//keyboard support
window.addEventListener('keydown', numKey);
