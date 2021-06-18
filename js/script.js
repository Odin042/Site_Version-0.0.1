function openMenu() {
   var x = document.getElementById("navegation");
   
   if(x.className === "navegation") {
       x.className += " menujs";
       document.getElementById("iconMenu").innerHTML = "&Cross;";
   }
   else {
       x.className = "navegation";
       document.getElementById("iconMenu").innerHTML = "&#9776;";
   }
    
}