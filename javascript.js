const OPERATIONS = [
function add(a,b){return a+b;},
function subtract(a,b){return a-b;},
function multiply(a,b){return a*b;},
function divide(a,b){return a/b;}
]

let numOne="";
let numTwo="";
let operator = 0;
let numberSwitcher = true;

function operate (one,two,operation){
    return OPERATIONS[operation](one,two);
}


function changeDisplay(text){
    const displayText =  document.querySelector("#displayText");
    displayText.textContent= displayText.textContent+text;
}

function numberDisplay(number){
 if(numberSwitcher === true){
    changeDisplay(number);
    numOne= numOne+number;
 }
 else if( numberSwitcher === false){
    changeDisplay(number);
    numTwo= numTwo+ number;
 }
}
let numberBtn = document.querySelectorAll(".number");
let numberBtnArray = [...numberBtn];
let numberBtnArrayMap = numberBtnArray.map((number) => number.addEventListener("click",function(){
    numberDisplay(number.textContent);
}));
