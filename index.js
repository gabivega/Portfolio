import {canvas} from "./matrix-bkg.js";

// ===== GET HTML ELEMENTS BY ID =====
// ===== NAVBAR LINKS =====
let home = document.getElementById("home");
let about = document.getElementById("about");
let portfolio = document.getElementById("portfolio");
let contact = document.getElementById("contact");
let ukFlag = document.getElementById("uk-flag");
let brFlag = document.getElementById("br-flag");
let navbarLinksContainer = document.querySelector(".links-container")

// ===== BUTTONS ID =====
let aboutBtn = document.getElementById("about-btn");
let portfolioBtn = document.getElementById("portfolio-btn");
let submitBtn = document.getElementById("submit-btn");

// ===== RESPONSIVE NAVBAR LINKS TOGGLE =====
let titleSection = document.querySelector(".title-section-left");
let hamburger = document.querySelector(".hamburguer");
hamburger.addEventListener("click", function () {
    navbarLinksContainer.classList.toggle("active");
    titleSection.classList.toggle("navbarOpen")
})




// ===== PORTFOLIO INFO TEXT =====
let portfolioText= document.getElementsByClassName("portfolio-text");
let infoBtns = document.getElementsByClassName("button-portfolio");

console.log(portfolioText);
console.log(infoBtns);

for(let i=0; i<infoBtns.length; i++) {
    infoBtns[i].addEventListener("click", ()=> (portfolioText[i].classList.toggle("show")))
}

