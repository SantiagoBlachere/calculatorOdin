function sum(a,b) {
    return a + b
}
function subtract(a,b) {
    return a - b
}
function multiply(a,b) {
    return a * b
}
function divide(a,b) {
    return a / b
}

function operate(operator, firstNumber, secondNumber) {
    if (operator === "*") {
        multiply(firstNumber,secondNumber)
    } else if (operator === "+"){
        sum(firstNumber, secondNumber)
    } else if (operator === "-"){
        subtract (firstNumber, secondNumber)
    } else if (operator === "/") {
        divide(firstNumber, secondNumber)
    }
};

const calculatorContainer = document.querySelector("#calculatorContainer");


const sumButton = document.createElement("button");
sumButton.innerText = "+";
sumButton.classList.add("operator")
const subtractButton = document.createElement("button");
subtractButton.innerText ="-";
subtractButton.classList.add("operator")
const multiplyButton = document.createElement("button");
multiplyButton.innerText = "*";
multiplyButton.classList.add("operator")
const divideButton = document.createElement("button");
divideButton.innerText ="/";
divideButton.classList.add("operator")
const clearButton = document.createElement("button");
clearButton.innerText ="CLEAR";
clearButton.classList.add("clear")
const equalButton = document.createElement("button");
equalButton.innerText ="=";
equalButton.classList.add("equal")
const display = document.createElement("div");


calculatorContainer.appendChild(sumButton)
calculatorContainer.appendChild(subtractButton)
calculatorContainer.appendChild(multiplyButton)
calculatorContainer.appendChild(divideButton)
calculatorContainer.appendChild(clearButton)
calculatorContainer.appendChild(equalButton)
calculatorContainer.appendChild(display)
for (let index = 0; index < 10; index++) {
    const numberCalculator = document.createElement("button");
    numberCalculator.classList.add("number")
    numberCalculator.innerText = `${index}`;
    calculatorContainer.appendChild(numberCalculator);
    
    
};

const buttons = document.querySelectorAll(".operator, .number");

const operatorButtons = document.querySelectorAll('.operator');
const initialValue = 0;
let firstNumberB = 0;
let secondNumberB = 0;
let firstNumber = [];
let secondNumber = [];
let operatorChosen = ""
let operatorChosenBoolean = false;
let initialResult = 0;
let result;
let resultExists = false;
buttons.forEach ( (button) => {
    button.addEventListener("click", (e) => {
        
        if (!isNaN(parseFloat(e.target.innerText)) && !operatorChosenBoolean && firstNumber.length < 10) {
         firstNumber.push(e.target.innerText);
         if (!resultExists) { 
            display.innerText += firstNumber[firstNumber.length - 1];
        }
         
         
         
        } else if (e.target.classList.contains("operator") && !operatorChosenBoolean && firstNumber.length > 0){
            operatorChosen = e.target.innerText
            operatorChosenBoolean = true
            if (resultExists = true) {
            display.innerText += operatorChosen;
            }
            
        } else if (!isNaN(parseFloat(e.target.innerText)) && operatorChosenBoolean && secondNumber.length < 10) {
            secondNumber.push(e.target.innerText);
            display.innerText += secondNumber[secondNumber.length -1];
            
            
        }
        
        if(secondNumber.length > 0) {
        firstNumberB = firstNumber.reduce( (acc, current) => acc + current, 0);
        secondNumberB = secondNumber.reduce( (acc, current) => acc + current, 0);
        
        secondNumberB = Number(secondNumberB);
        firstNumberB = Number(firstNumberB);
        
        
        }
    })
})

equalButton.addEventListener("click", () => {
    
    console.log(firstNumberB, secondNumberB)
    if (operatorChosenBoolean && resultExists) {
        
        if (operatorChosen === "+") {
            
            result = sum(firstNumberB, secondNumberB).toFixed2(7);
            
        } else if (operatorChosen === "-") {
            result = subtract(firstNumberB, secondNumberB).toFixed(7);
        } else if (operatorChosen ==="/") {
            result = divide(firstNumberB, secondNumberB).toFixed(7);
        } else if (operatorChosen === "*") {
            result = multiply(firstNumberB, secondNumberB).toFixed(7);
        }
        console.log(result)
        if (result ===  Infinity) {
            
            alert("Dont divide by 0, dummie");
            operatorChosenBoolean = false;
            firstNumber[0] = 0;
            secondNumber = [];
            
            console.log(firstNumber, secondNumber)
            display.innerText = firstNumber[0];
        } else {
            operatorChosenBoolean = false;
            resultExists = true
            firstNumber[0] = result
            secondNumber = [];
            display.innerText = `${result}`
        }
        
    }
    
    
})
clearButton.addEventListener("click", () => {
    display.innerText = "";
    firstNumberB = 0;
    secondNumberB = 0;
    firstNumber = [];
    secondNumber = [];
    operatorChosen = ""
    operatorChosenBoolean = false;
    result = 0;
    resultExists = false;

})





