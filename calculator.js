let numBtns=document.querySelectorAll('.num');
numBtns.forEach( (nm) =>
   nm.onclick = ()=> console.log(nm.value)
)
let sub;


function add(a,b){ return a+b; }
function subs(a,b) { return a-b; }
function multiply(a,b) { return a*b; }