var hamburgerRef = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-list");
var links = document.querySelectorAll(".nav-list li");


hamburgerRef.addEventListener('click', ()=>{
    //Animate Links
     navLinks.classList.toggle("open");
     links.forEach(link => {
         link.classList.toggle("fade");
     });
 
     //Hamburger Animation
     hamburgerRef.classList.toggle("toggle");
 });