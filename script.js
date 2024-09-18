/*const allButton =document.querySelector(.btn);
function clickMe(){
     alert('clicking');
 }
for(let i=0; i<allButton.length; i++){
   allButton[i].addEventListener("click", clickMe);
}
 
 
*for(let i=0; i<document.querySelector(".btn").length; i++){
     document.querySelectorAll(".btn")[i].addEventListener("click", function (){
         alert("i got clicked" );
     });
      }*/
      
var numb = document.querySelectorAll(".btn");
  for(let i=0; i<numb.length; i++){
      numb[i].addEventListener("click", function (){
          alert("i clicked");
      });
        }
      
      
      
      
      
      
      
      
      
      