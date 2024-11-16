document.addEventListener('DOMContentLoaded', function() {
    let display = document.getElementById('display');
    let currentOperation = null;
    let firstOperand = null;

    function appendNumber(number) {
        display.value += number;
    }

    function setOperation(operation) {
        if (display.value === '') return;
        firstOperand = parseFloat(display.value);
        currentOperation = operation;
        display.value = '';
    }

    function calculateResult() {
        if (currentOperation === null || display.value === '') return;
        let secondOperand = parseFloat(display.value);
        let result;
        switch (currentOperation) {
            case '+':
                result = firstOperand + secondOperand;
                break;
            case '-':
                result = firstOperand - secondOperand;
                break;
            case '*':
                result = firstOperand * secondOperand;
                break;
            case '/':
                result = firstOperand / secondOperand;
                break;
            default:
                return;
        }
        display.value = result;
        currentOperation = null;
        firstOperand = null;
    }

    function clearDisplay() {
        display.value = '';
        currentOperation = null;
        firstOperand = null;
    }

    document.querySelectorAll('.button').forEach(button => {
        button.addEventListener('click', function() {
            const value = this.innerText;
            if (!isNaN(value)) {
                appendNumber(value);
            } else if (value === 'C') {
                clearDisplay();
            } else if (value === '=') {
                calculateResult();
            } else {
                setOperation(value);
            }
        });
    });
});
