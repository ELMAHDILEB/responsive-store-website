
// Get the wrapper element
const wrapper = document.querySelector('.wrapper');

// Get the slides
const slides = Array.from(document.querySelectorAll('.slide'));

// Set the initial slide index
let currentSlide = 0;

// Function to go to the next slide
function goToNextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    updateSlidePosition();
}

// Function to update the slide position
function updateSlidePosition() {
    const slideWidth = slides[0].offsetWidth;
    const translateX = -currentSlide * slideWidth;
    wrapper.style.transform = `translateX(${translateX}px)`;
}

// Add event listener to the button or any other element that triggers the slide change
document.addEventListener('DOMContentLoaded', () => {
    setInterval(goToNextSlide, 3000);
});


// Responsive
function openNav(){
    const linksDiv =document.querySelector("nav");
    linksDiv.style.transform = "translateY(0px)";
}
function closeNav(){
    const linksDiv =document.querySelector("nav");
    linksDiv.style.transform = "translateY(-110%)";
}


// ADD TO CART

let carts = document.querySelectorAll(".add-cart");

for (let i = 0; i < carts.length; i++) {
    carts[i].addEventListener("click", () => {
        cartNumbers();
    });
}

function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem("cartNumbers");
    if (productNumbers) {
        document.querySelector(".cart span").textContent = productNumbers;
    }
}

function cartNumbers() {
    let productNumbers = localStorage.getItem("cartNumbers");
    productNumbers = parseInt(productNumbers);
    if (productNumbers) {
        localStorage.setItem("cartNumbers", productNumbers + 1);
        document.querySelector(".cart span").textContent = productNumbers + 1;
    } else {
        localStorage.setItem("cartNumbers", 1);
        document.querySelector(".cart span").textContent = 1;
    }
}

onLoadCartNumbers();

// CONVERT IAMGES
const images = document.querySelector('.imga');


function changePicture(image){
    images.src = image;
}

// INCREMENT AND DECREMENT COUNTER
// Get references to the HTML elements
const incrementButton = document.getElementById('increment');
const decrementButton = document.getElementById('decrement');
const counterDisplay = document.getElementById('counter');

// Set initial counter value
let counter = 0;

// Function to increment the counter


