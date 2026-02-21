window.addEventListener("scroll",function(){
    const navbar=document.querySelector(".navbar");
    navbar.style.background=window.scrollY>50
    ? "rgba(0,0,0,0.9)"
    : "rgba(0,0,0,0.6)"
});

//Active nav link

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar ul li a");
window.addEventListener("scroll",()=>{
    let current ="";
    sections.forEach(section => {
        const sectionTop = section.offsetTop -120;
        if(window.scrollY>= sectionTop){
            current = section.getAttribute("id");
        }
    });
    navLinks.forEach(link =>{
        link.classList.remove("active");
        if(link.getAttribute("href") === "#"+ current){
            link.classList.add("active");
        }
    });
});