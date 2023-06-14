let operator = '';
let firstOperand = '';
let secondOperand = '';
let operatorPressed = false;
let equalsPressed = false;
let v = 0;
let c = '**';
let numBtns = document.querySelectorAll('.num');
let operatorsBtn = document.querySelectorAll('.operator');
let equalsBtn = document.getElementById('equals');
let dotBtn = document.getElementById('dot');
let currentOp = document.querySelector('.currentOp');
let lastOp = document.querySelector('.lastOp');
let DeleteBtn = document.querySelector('.delete');
let clearBtn = document.querySelector('.clear');

DeleteBtn.addEventListener('click',Delete);
clearBtn.addEventListener('click',clear)




function operate(a, b, operator) {
    a = Number(a);
    b = Number(b);
    if (operator === '+') return add(a, b);
    else if (operator === '-') return subs(a, b);
    else if (operator === 'x') return multiply(a, b);
    else if (operator === '÷') return divide(a, b);
    else if (operator === '^') return power(a, b);
}

function resetVars(result) {
    operatorPressed = false;
    equalsPressed = false;
    firstOperand = '' + result;
    secondOperand = '';
}

function calculate(){
    equalsPressed = true;
    let m = operate(firstOperand, secondOperand, operator);
    resetVars(m);
    lastOp.textContent = currentOp.textContent.concat('=');
    currentOp.textContent = m;
}
function addNumbers(nm){
    if (!operatorPressed) {
        firstOperand = firstOperand.concat(nm.textContent);
        if (currentOp.textContent === '0') {
            currentOp.textContent = nm.textContent;
        }
        else currentOp.textContent += nm.textContent;
    }
    if (!equalsPressed && operatorPressed) {
        secondOperand = secondOperand.concat(nm.textContent)
        currentOp.textContent += nm.textContent;
    }
}
function addOperator(op){
    operatorPressed = true;
        if (!currentOp.textContent.includes(op.textContent)) {
            operator = op.textContent;
            currentOp.textContent += op.textContent;
        }
}

function store() {

    equalsBtn.addEventListener('click', calculate)

    operatorsBtn.forEach( function(op){
        op.addEventListener('click',()=> addOperator(op));
    })

    

    numBtns.forEach( function(nm){
        nm.addEventListener('click',()=> addNumbers(nm));
    }

    )




    dotBtn.addEventListener('click', function () {
        console.log(operatorPressed);
        if (!operatorPressed) {
            if (!firstOperand.includes('.')) {
                firstOperand = firstOperand.concat(dotBtn.textContent);
                currentOp.textContent += dotBtn.textContent;
            }

        }
        if (!equalsPressed && operatorPressed) {
            if (!secondOperand.includes('.')) {
                secondOperand = secondOperand.concat(dotBtn.textContent);
                currentOp.textContent += dotBtn.textContent;
            }

        }
    })

}


function Delete(){
    if(currentOp.textContent!=='0'){
        currentOp.textContent=currentOp.textContent.slice(0, -1);
        if (!operatorPressed) {
           
                firstOperand = firstOperand.slice(0, -1);
               
            }

        }
        if (!equalsPressed && operatorPressed) {
            secondOperand = secondOperand.slice(0, -1);


        }

}
function clear(){
    currentOp.textContent='0';
    lastOp.textContent='';
  resetVars('');

}




store();





function add(a, b) { return a + b; }
function subs(a, b) { return a - b; }
function multiply(a, b) { return a * b; }
function divide(a, b) {
    if (b != 0) return a / b;
    else{
        alert('cant divide by zero');
       return 0;
    }
}
function power(a,b){
    return Math.pow(a,b);
}






