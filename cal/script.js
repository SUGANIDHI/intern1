let display = document.getElementById('display');
let currentInput = '';

function appendNumber(number) {
    if (currentInput === '' && number === '.') {
        currentInput = '0.';
    } else {
        currentInput += number;
    }
    display.innerText = currentInput;
}

function appendOperator(operator) {
    if (currentInput !== '' && !isNaN(currentInput[currentInput.length - 1])) {
        currentInput += operator;
        display.innerText = currentInput;
    }
}

function clearDisplay() {
    currentInput = '';
    display.innerText = '0';
}

function deleteLast() {
    currentInput = currentInput.slice(0, -1);
    display.innerText = currentInput || '0';
}

function calculateResult() {
    try {
        currentInput = eval(currentInput).toString();
        display.innerText = currentInput;
    } catch {
        display.innerText = 'Error';
        currentInput = '';
    }
}
