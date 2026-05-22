const hamburger = document.getElementById("hamburger");
const navigacija = document.getElementById("navigacija");
function meni(){
    navigacija.classList.toggle("active");
    if(navigacija.classList.contains("active")){
        hamburger.innerHTML= "✕";
    }
    else{
        hamburger.innerHTML = "☰";
    }
}
hamburger.addEventListener("click", (g)=>{
    g.stopPropagation();
    meni();
});
document.querySelectorAll(".navigacija a").forEach(link =>{
    link.addEventListener("click", ()=>{
        navigacija.classList.remove("active");
        hamburger.innerHTML = "☰";
    });
});
document.addEventListener("click", (o)=>{
    if(!navigacija.contains(o.target) && !hamburger.contains(o.target)){
        navigacija.classList.remove("active");
        hamburger.innerHTML = "☰";
    }
});


let slajdovi = document.querySelectorAll(".slajd");
let i = 0;

function showSlide(){
    slajdovi.forEach(slide => {
        slide.classList.remove("active");
    });
    slajdovi[i].classList.add("active");
    i++;
    if(i >= slajdovi.length){
        i = 0;
    }
}
setInterval(showSlide, 4000);


const a = document.querySelectorAll(".skriveno, .skriveno2");

function prikazi() {

    let windowHeight = window.innerHeight;

    a.forEach(el => {

        let top = el.getBoundingClientRect().top;

        if (top < windowHeight - 150) {
            el.classList.add("pokazi");
        } else {
            el.classList.remove("pokazi");
        }

    });

}

window.addEventListener("scroll", prikazi);
window.addEventListener("load", prikazi);
window.addEventListener("resize", prikazi);