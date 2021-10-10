let menu = document.getElementById("main-menu")
let button = document.getElementById("main-menu-btn")

button.addEventListener("click",()=>{
   menu.classList.toggle("active"); 
   if(menu.className.includes("active"))
   {
       button.src = "img/bx-exit.svg";
   }
   else{
       button.src = "img/bx-menu.svg"
   }
})