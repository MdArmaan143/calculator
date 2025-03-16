let currentInput = ""; 

function appendNumber(value) {
    currentInput += value;
    document.querySelector(".input").value = currentInput;
}

function clearInput() {
    currentInput = "";
    document.querySelector(".input").value = currentInput;
}

function calculateResult() {
    try {
        let result = eval(currentInput);
        currentInput = result.toString();
        document.querySelector(".input").value = currentInput;
    } catch {
        document.querySelector(".input").value = "Error";
        currentInput = "";
    }
}

// 🌠 Function to create falling stars dynamically
function createFallingStars() {
    setInterval(() => {
        let star = document.createElement("div");
        star.classList.add("falling-star");
        document.body.appendChild(star);

        let startPosX = Math.random() * window.innerWidth;
        star.style.left = `${startPosX}px`;
        star.style.animationDuration = `${Math.random() * 3 + 2}s`;

        setTimeout(() => {
            star.remove();
        }, 5000);
    }, 400);
}

// 🚀 Start the falling stars effect
createFallingStars();
