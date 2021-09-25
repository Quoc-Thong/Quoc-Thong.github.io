"use strict";
let a = 0;
let b = 0;
let result = 0;
let operator = "";

function printToScreen(val) {
  let screen = document.getElementById("overlay");
  screen.innerHTML = val;
}

function onClear() {
  a = 0;
  b = 0;
  result = 0;
  operator = "";
  printToScreen(0);
}

function onNumber(el) {
  let value = document.getElementById("overlay").innerHTML;
  let valuePrint =
    value === "0" ? el : value.length === 14 ? value : value + el;
  operator === "" ? (a = valuePrint) : (b = valuePrint);
  printToScreen(valuePrint);
}

function onOperation(el) {
  operator = document.getElementById("overlay").innerHTML;
  operator = el;
  printToScreen("0");
}

function onDot(el) {
  let dot = document.getElementById("overlay").innerHTML;
  let valuePrint = dot.includes(".") ? dot : dot + el;
  printToScreen(valuePrint);
}

function subtract() {
  let value = document.getElementById("overlay").innerHTML;
  // const isMinus = value.includes("-");
  let valuePrint = value.includes("-") ? value.replace("-", "") : "-" + value;
  if (operator === "") {
    a = value.includes("-") ? a : -a;
  } else {
    b = value.includes("-") ? b : -b;
  }
  printToScreen(valuePrint);
}

function onResults() {
  let parseA = parseFloat(a);
  let parseB = parseFloat(b);
  if (result === 0) {
    switch (operator) {
      case "+":
        result = parseA + parseB;
        printToScreen(result);
        break;
      case "-":
        result = parseA - parseB;
        printToScreen(result);
        break;
      case "x":
        result = parseA * parseB;
        printToScreen(result);
        break;
      case "/":
        result = parseA / parseB;
        printToScreen(result);
        break;
    }
  } else if (result !== 0) {
    switch (operator) {
      case "+":
        result += parseB;
        printToScreen(result);
        break;
      case "-":
        result -= parseB;
        printToScreen(result);
        break;
      case "x":
        result *= parseB;
        printToScreen(result);
        break;
      case "/":
        result /= parseB;
        printToScreen(result);
        break;
    }
  }
}
