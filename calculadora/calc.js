function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function calculateResult() {
    let result = eval(document.getElementById('display').value);
    document.getElementById('display').value = result;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculateResult() {
    let expression = document.getElementById('display').value;

    expression = expression.replace(/%/g, '/100');

    let result = eval(expression);
    document.getElementById('display').value = result;
}
