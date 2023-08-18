let display = document.querySelector("#display")
let buttons = document.querySelectorAll(".button")


function pega(a){
let b = document.getElementById("display").innerHTML;
document.getElementById("display").innerHTML= b + a
}
function soma(){
 let b = document.getElementById("display").innerHTML;
 document.getElementById("display").innerHTML= `${b}+`
}
 function diminui(){
 let b = document.getElementById("display").innerHTML; 
 document.getElementById("display").innerHTML= `${b}-`
    }
function dividi(){
let b = document.getElementById("display").innerHTML;
 document.getElementById("display").innerHTML= `${b}/`
  }
function multiplica(){
 let b = document.getElementById("display").innerHTML;
   document.getElementById("display").innerHTML= `${b}*`
 }
function apaga1(){
 let b = document.getElementById("display").innerHTML;
   document.getElementById("display").innerHTML= b.substring(0,b.length-1)
}

function limpar(){
    
    document.getElementById("display").innerHTML= ""
}

function calcula(){
 try{  
 let b = document.getElementById("display").innerHTML;
document.getElementById("display").innerHTML= eval(b)
if(b == ""){
    document.getElementById("display").innerHTML= "Digite algo"
setTimeout(()=>{
limpar()
},1000)
}
}
 catch{
    document.getElementById("display").style.lineHeight="47px"
    document.getElementById("display").style.fontSize="32px"
 document.getElementById("display").innerHTML= "Expressão irregular" 
 setTimeout(()=>{
    limpar()
    },1000)
 }}
 

                   
                    
    




