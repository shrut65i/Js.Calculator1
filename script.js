// Function that display value
function dis(val) {
    document.getElementById("result").value += val;
}

// Function that evaluates the digit and return result
function solve() {
    let x = document.getElementById("result").value;
    let y = math.evaluate(x);
    document.getElementById("result").value = y;
}

// Function that clear the display
function clr() {
    document.getElementById("result").value = "";
}

// Function to delete last character
function deleteLastChar() {
    let value = document.getElementById("result").value;
    document.getElementById("result").value = value.slice(0, -1);
}

// Handle keyboard events
function myFunction(event) {
    if (
        event.key == "0" ||
        event.key == "1" ||
        event.key == "2" ||
        event.key == "3" ||
        event.key == "4" ||
        event.key == "5" ||
        event.key == "6" ||
        event.key == "7" ||
        event.key == "8" ||
        event.key == "9" ||
        event.key == "+" ||
        event.key == "-" ||
        event.key == "*" ||
        event.key == "/" ||
        event.key == "."
    ) {
        document.getElementById("result").value += event.key;
    } else if (event.key == "Enter") {
        solve();
    }
}