const phone=document.querySelector(".phone");

window.addEventListener("mousemove",(e)=>{

let x=(window.innerWidth/2-e.clientX)/40;

let y=(window.innerHeight/2-e.clientY)/40;

phone.style.transform=

`translate(${x}px,${y}px)`;

});

const reveal=document.querySelectorAll(

".feature-card,.pricing-card,.template-card,.faq-item,.cta-box"

);

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

reveal.forEach(item=>observer.observe(item));