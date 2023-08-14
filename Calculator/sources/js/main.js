// Function to append value to display
function appendToDisplay(value) {
    document.getElementById("display").value += value;
}

// Function to clear display
function clearDisplay() {
    document.getElementById("display").value = "";
}

// Function to calculate expression
function calculate(){
    const display = document.getElementById("display");
    const expression = display.value; // Get expression from display

    try{
        const result = eval(expression); // Evaluate expression
        display.value = result; // Display result
    } catch (e) {
        display.value = "Error";
    }
}