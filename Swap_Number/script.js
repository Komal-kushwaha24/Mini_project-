let num1 = document.querySelector("#num1");
let num2 = document.querySelector("#num2");
let temp;

let swap= document.querySelector("#swap");
swap.addEventListener("click",()=>{
    let n1 = num1.value;
    let n2 = num2.value;
       temp=n1;
       n1=n2;
       n2=temp;
       num1.value = n1;
       num2.value = n2;
})
let clear = document.querySelector("#clear");
clear.addEventListener("click",()=>{
    num1.value = null;
    num2.value = null;
})