window.addEventListener("load", ()=>{  //esto evita que las variables sean globales, también evita llamar 

    var cat1 = document.querySelector(".par-cats__floating--1");

    var handleScroll = (event) => {

        cat1.style.top =  window.scrollY/2 -200 +"px";
        cat1.style.transform = "rotate(" +window.scrollY/5 + "deg)";
        
    }

    handleScroll();

    //esto es lo mismo:
    window.addEventListener("scroll",handleScroll);

    //que 
/*
window.addEventListener("scroll",()=>{

    
 
});
*/


});