const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const buttonText = button.textContent.trim(); // Trim any whitespace

        if (buttonText === "C") {
            // Clear display
            display.textContent = "";
        } else if (buttonText === "<") {
            // Backspace
            display.textContent = display.textContent.slice(0, -1);
        } else if (buttonText === "=") {
            // Evaluate expression
            try {
                display.textContent = eval(display.textContent);
            } catch (error) {
                display.textContent = "Error";
            }
        } else {
            // Append button text to display
            if (buttonText === "÷") {
                display.textContent += "/";
            } else if (buttonText === "×") {
                display.textContent += "*";
            } else {
                display.textContent += buttonText;
            }
        }
    });
});
