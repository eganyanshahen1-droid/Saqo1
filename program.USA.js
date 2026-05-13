// Scroll animation for gallery images
const galleryImages = document.querySelectorAll(".gallery img");

window.addEventListener("scroll", () => {
galleryImages.forEach(img => {
let position = img.getBoundingClientRect().top;
if(position < window.innerHeight - 100){
img.classList.add("show");
}
});
});
function openModal(){
document.getElementById("modal").style.display="flex";
}

function closeModal(){
document.getElementById("modal").style.display="none";
}
let slides = document.querySelectorAll(".slide");
let ="index" = 0;

function changeSlide(){

slides[index].classList.remove("active");

index++;

if(index >= slides.length){
index = 0;
}

slides[index].classList.add("active");

}

setInterval(changeSlide, 4000);



let index = 0;
let slide = document.querySelector(".slides");

function showSlide(){
slides.style.transform = "translateX(-" + index*100 + "%)";
}

function nextSlide(){
index++;
if(index > 2){
index = 0;
}
showSlide();
}

function prevSlide(){
index--;
if(index < 0){
index = 2;
}
showSlide();
}

function currentSlide(i){
index = i;
showSlide();
}

setInterval(nextSlide,4000);



function openModal(){
document.getElementById("modal").style.display="block";
}

function closeModal(){
document.getElementById("modal").style.display="none";
}





window.addEventListener("load", () => {
    let user = JSON.parse(localStorage.getItem("user"));
    if(user){
        console.log("Already logged in:", user.email);
    }
});



const firebaseConfig = {
  apiKey: "...",
  authDomain: "...",
  projectId: "...",
};
const ADMIN_EMAIL = "gekko.sushi1@gmail.com";







