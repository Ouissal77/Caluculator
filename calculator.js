let operator = '';
let firstOperand = '';
let secondOperand = '';
let operatorPressed = false;
let equalsPressed = false;
let clickedOnce=false;
let operators=['^','+','-','x','÷'];

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
window.addEventListener('keydown',keyListener);


equalsBtn.addEventListener('click', calculate)

operatorsBtn.forEach( function(op){
    op.addEventListener('click',()=> addOperator(op.textContent));})

numBtns.forEach( function(nm){
    nm.addEventListener('click',()=> addNumbers(nm.textContent));})

dotBtn.addEventListener('click', addDot)



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
    console.log('ff -- '+firstOperand)
    console.log('sec--  '+secondOperand +'op = '+ operatorPressed)
    if(!equalsPressed){
        equalsPressed = true;
        lastOp.textContent = currentOp.textContent.concat(' =');
        let m = operate(firstOperand, secondOperand, operator);
        m= Math.round(m * 1000) / 1000
        resetVars(m);
        currentOp.textContent = m;
        //clickedOnce=true;
    }
   
    
}

function addNumbers(nm){
    if (!operatorPressed) {
       
        firstOperand = firstOperand.concat(nm);
        if (currentOp.textContent === '0') {
            currentOp.textContent = nm;
        }
        else currentOp.textContent += nm;
    }
    if (!equalsPressed && operatorPressed) {
        secondOperand = secondOperand.concat(nm)
        currentOp.textContent += nm ;
    }
}
let prev='';
function addOperator(op){
   
    let lastElem = currentOp.textContent.charAt(currentOp.textContent.length-1);
    let lastResult='';
    
    if(!operators.includes(lastElem)){
        operator = op;
        currentOp.textContent += op;
        
    }
    else{
        operator = op;
        currentOp.textContent=currentOp.textContent.slice(0,-1);
        currentOp.textContent += op;
       
    }
    operatorPressed = true;
    if(firstOperand!='' && secondOperand!=''){
        console.log('oprt is '+ prev)
        lastResult=operate(firstOperand,secondOperand,prev);
        resetVars(lastResult);
        operatorPressed=true;
        console.log('ff  '+firstOperand)
        console.log('sec  '+secondOperand +'op = '+ operatorPressed)
    }
    else{
        prev=operator;
    }
    
        
}

function addDot(){
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

function keyListener(e){
   
   if(e.key>=0 && e.key<=9) addNumbers(e.key)
  
   console.log(e.key)
   if(operators.includes(e.key) || e.key==='/' || e.key==='*'){
    if(e.key==='/' )  addOperator('÷')
    else if (e.key==='*') addOperator('x')
    else addOperator(e.key)
   
   }
   if(e.key==='.') addDot();
   if(e.key==='=' || e.key==='Enter') calculate();
   if(e.key==='Backspace') Delete();
   if(e.key==='Escape') clear();
   
}






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










