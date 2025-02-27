let daynight = document.querySelector(".daynight");
let banner = document.querySelector(".banner");

daynight.addEventListener("click",()=>{
    banner.classList.toggle("night");
})

let typingEffect = new Typed("#typing",{
    strings: [ "Ajay X 007","Web Developer","Web Designer","Coder"],
    typeSpeed: 100,
    backSpeed: 50,
    backDelay:1000,
    loop: true
});

// end