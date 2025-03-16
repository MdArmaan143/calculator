let currentInput = "";

function appendValue(value) {
    currentInput += value;
    document.querySelector(".input").value = currentInput;
}

function clearInput() {
    currentInput = "";
    document.querySelector(".input").value = "";
}

function calculateResult() {
    try {
        currentInput = eval(currentInput);
        document.querySelector(".input").value = currentInput;
    } catch (error) {
        document.querySelector(".input").value = "Error";
        currentInput = "";
    }
}
