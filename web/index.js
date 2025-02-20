let display = document.getElementById("display");
function appendValue(value) {
    display.value += value;
}
function Clear() {
    display.value = "";
}
function calc() {
    let display = document.getElementById("display");
    try {
        display.value = eval(display.value);
    }
    catch (error) {
        display.value = "error";
    }
}