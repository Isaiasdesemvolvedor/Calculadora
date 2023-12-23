var display = document.querySelector("#display").value
document.getElementById("display").style.fontSize="50px"
let buttons = document.querySelectorAll(".button")
let key = document.getElementById("texto");
let body = document.querySelector("body")
body.addEventListener("click",()=>{})
document.getElementById("display").style.textAlign="right"
let operadores = document.querySelectorAll(".special")
let number = document.querySelectorAll(".number")
body.addEventListener("keydown", filtroTeclas)

function filtroTeclas(events) {
   console.log(events.key)
   switch (events.key) {
      case "0":
         
         document.getElementById("display").focus()
         chave = true
         break;
      case "1":
      
         document.getElementById("display").focus()
         chave = true
         break;

      case "2":
         document.getElementById("display").focus()
         chave = true
         break;

      case "3":
         document.getElementById("display").focus()
         chave = true
         break;

      case "4":
         document.getElementById("display").focus()
         chave = true
         break;

      case "5":
         document.getElementById("display").focus()
         chave = true
         break;

      case "6":
         document.getElementById("display").focus()
         chave = true
         break;

      case "7":
         document.getElementById("display").focus()
         chave = true
         break;

      case "8":
         document.getElementById("display").focus()
         chave = true
         break;

      case "9":
         document.getElementById("display").focus()
         chave = true
         break;

         case "+":
          soma()
         chave = false
          break;

      case "-":
         diminui()
         chave = false
         break;

      case "/":
         dividi()
         chave = false
         break;

      case "*":
         multiplica()
         chave = false
         break;

      case ",":
         virgula()
         chave = false
         break;

      case ".":
         virgula()
         chave = false
         break;

      case "Backspace":
        apaga1()
        chave = false
         break;

      case "Enter":
         calcula()
         chave = true
         break;

   }

   return (events.key >= 0 && events.key <= 9)
}
var chave = false
function pega(a) {
   chave = false
   if (!chave) {
      document.getElementById("display").style.textAlign="right"
      let b = document.getElementById("display").value;
      document.getElementById("display").value = b + a
      document.getElementById("display").focus()
      chave = true
   }
}
 
function soma() {
   if (chave){
      let c = document.querySelector("#display").value
      document.getElementById("display").focus()
      document.getElementById("display").value =`${c}+`
      chave = false
      console.log(chave)

   }
}

function diminui() {
   if (chave){
      let b = document.getElementById("display").value;
      document.getElementById("display").value = `${b}-`
      chave = false
      console.log(chave)
   }
}

function dividi() {
   if (chave) {
      let b = document.getElementById("display").value;
      document.getElementById("display").value = `${b}/`
      document.getElementById("display").focus()
      chave = false
   
   }
}

function multiplica() {
   if (chave) {
      let b = document.getElementById("display").value;
      document.getElementById("display").value = `${b}*`
      document.getElementById("display").focus()
      chave = false
   }
}

function apaga1() {
   chave = true
   if (chave){
      let b = document.getElementById("display").value;
      document.getElementById("display").value = b.substring(0, b.length - 1)
      document.getElementById("display").focus()
      console.log(chave)
   }
}

function limpar(){
   document.getElementById("display").value = "";
   document.getElementById("display").focus()
}

function virgula() {
   if (chave){
      let b = document.getElementById("display").value;
      document.getElementById("display").value = b +  "."
      chave = false
   }
}

function calcula() {
   try {
      chave = true
      let b = document.getElementById("display").value;
      document.getElementById("display").style.fontSize="50px"
      document.getElementById("display").value = eval(b)
      console.log(chave)
      

      if (eval(b) == "Infinity") {
         document.getElementById("display").style.fontSize = "50px"
         document.getElementById("display").value = "Infinito"
         document.getElementById("display").focus()
         setTimeout(() => {
            limpar()
         }, 1000)
      };

      if (b == '') {
         document.getElementById("display").style.fontSize = "50px"
         document.getElementById("display").value = "Digite algo"
         setTimeout(() => {
            limpar()
         }, 1000)
         document.getElementById("display").focus()
      }
   } catch {
   
      document.getElementById("display").style.textAlign="center"
      document.getElementById("display").style.fontSize="35px"
      document.getElementById("display").value = "Expressão irregular"
      document.getElementById("display").focus()
      setTimeout(() => {
         document.getElementById("display").style.textAlign="right"
         document.getElementById("display").style.fontSize="50px"
         limpar()
      }, 1000)
   }

}