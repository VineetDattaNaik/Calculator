let buttons=document.querySelectorAll(".button");
let equals=document.getElementById("equal");
let clear=document.getElementById("clr");
let results= document.getElementById("result");

function clearScreen() {
    results.value = "";
   
}

function display(value) {
         results.value += value;

          }


          
buttons.forEach((button)=>{
         button.addEventListener("click",()=>{
           
            display(button.value);
                    
                 })
             })

equals.addEventListener("click",()=>{
       calculate();
})

function calculate(){
    var total = results.value;
    var ans= eval(total);
     results.value =ans;
 }
 clear.addEventListener("click",()=>{
      clearScreen();
 })
 




























