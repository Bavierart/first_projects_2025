
const display = document.getElementById("display")

function appendToDisplay(input) {
    //number input
    display.value == "0" ? display.value = input : display.value += input
}

function bttnClear() {
    display.value = "0"
}

let currentOperation = null
let firstTerm = 0

function mathOperationPlus(){
    firstTerm = Number(display.value)
    display.value = "0"
    currentOperation = "sum"
}
function mathOperationMinus(){
    firstTerm = Number(display.value)
    display.value = "0"
    currentOperation = "minus"
}
function mathOperationTimes(){
    firstTerm = Number(display.value)
    display.value = "0"
    currentOperation = "times"
}
function mathOperationOver(){
    firstTerm = Number(display.value)
    display.value = "0"
    currentOperation = "over"
}

function bttnEquals() {
    if (currentOperation == "sum") {
        firstTerm += Number(display.value)
        display.value = String(firstTerm)
    }
    if (currentOperation == "minus") {
        firstTerm -= Number(display.value)
        display.value = String(firstTerm)
    }
    if (currentOperation == "times") {
        firstTerm *= Number(display.value)
        display.value = String(firstTerm)
    }
    if (currentOperation == "over") {
        firstTerm /= Number(display.value)
        display.value = String(firstTerm)
    }

}