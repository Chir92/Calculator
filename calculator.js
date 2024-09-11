let num1 = 8;
let num2 = 2;
document.getElementById("num1-el").textContent = num1;
document.getElementById("num2-el").textContent = num2;
let sumel = document.getElementById("sum-el");


function add() {
    addition = num1 + num2;
    sumel.textContent = "Sum:" + addition
    //console.log("Added Number:",addition)

}

function sub() {
    substraction = num1 - num2;
    sumel.textContent = "Sum:" + substraction;
    //console.log("Substracted Number:",substraction)
}

function multi() {
    multiply = num1 * num2;
    sumel.textContent = "Sum:" + multiply;
    //console.log("Multiplied Number:", multiply)
}

function div() {
    divide = num1 / num2;
    sumel.textContent = "Sum:" + divide;
    //console.log("Divided Number:", divide)
}

