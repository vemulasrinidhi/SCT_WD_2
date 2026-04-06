
let display = document.getElementById("display");


let buttons = document.querySelectorAll("button");


buttons.forEach(button => {
  button.addEventListener("click", () => {
    handleInput(button.innerText);
  });
});


function handleInput(value) {
  if (value === "C") {
    clearDisplay();
  } 
  else if (value === "=") {
    calculate();
  } 
  else {
    appendValue(value);
  }
}

// Append values
function appendValue(value) {
  if (display.innerText === "0") {
    display.innerText = value;
  } else {
    display.innerText += value;
  }
}

// Clear display
function clearDisplay() {
  display.innerText = "0";
}

// Calculate result
function calculate() {
  try {
    let expression = display.innerText
      .replace(/×/g, "*")
      .replace(/÷/g, "/");

    display.innerText = eval(expression);
  } catch (error) {
    display.innerText = "Error";
  }
}

// Keyboard support
document.addEventListener("keydown", function (e) {
  if (!isNaN(e.key) || ['+', '-', '*', '/', '.'].includes(e.key)) {
    appendValue(e.key);
  } 
  else if (e.key === "Enter") {
    calculate();
  } 
  else if (e.key === "Backspace") {
    display.innerText = display.innerText.slice(0, -1) || "0";
  } 
  else if (e.key.toLowerCase() === "c") {
    clearDisplay();
  }
});