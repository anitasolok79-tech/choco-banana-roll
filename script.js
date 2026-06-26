window.addEventListener("scroll", function(){

let header = document.querySelector("header");

if(window.scrollY > 50){
header.style.background = "#222";
}
else{
header.style.background = "rgba(0,0,0,0.3)";
}

});