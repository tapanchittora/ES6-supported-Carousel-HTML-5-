
// IE 11 doesn't support ES6 Arrow Function
// const saffornCarousel = (slide , dots) => {
const saffornCarousel = function(slide , dots){  
const getAllSlides = document.querySelectorAll(slide);

//Dynamic Dot Create
let myDotPanel = document.querySelector(".dotsPanel");
myDotPanel.innerHTML = "<span class='dotSlider active' onclick='latestSlide("+ 0 +")'></span>"
for( let i = 1; i < getAllSlides.length; i++){
  myDotPanel.innerHTML += "<span class='dotSlider' onclick='latestSlide("+ i +")'></span>"
}
const getAllDots = document.querySelectorAll(dots);

//set slide count
let currSlidePanel = 0;

//Index for Next slide
//const nextSlidePanel = () => {
const nextSlidePanel = function(){  
  changeSlide(currSlidePanel + 1);
};

//Index for Previous slide
//const prevSlidePanel = () => {
const prevSlidePanel = function(){  
  changeSlide(currSlidePanel - 1);
  getAllSlides[currSlidePanel].classList.add("prevClass");
};

//Arrow controls event
const nextButton = document.querySelector(".sliderControls .fa-angle-right");
const prevButton = document.querySelector(".sliderControls .fa-angle-left");

//click event that passes to changeSlide function
nextButton.addEventListener("click", nextSlidePanel, false);
prevButton.addEventListener("click", prevSlidePanel, false);

//Change Slide Function to View latest Slide
// changeSlide = clicked => {
changeSlide = function(value) {

  //Removing Dots from classname
  let slideClass = slide.replace(/\./g, "");
  let dotsClass = dots.replace(/\./g, "");

  //Reset Class names
  for( let i = 0; i < getAllSlides.length; i++){
      getAllSlides[i].className = slideClass;
      getAllDots[i].className = dotsClass;
  }
  
  //checks remainder of link to select current slide
  currSlidePanel = (value + getAllSlides.length) % getAllSlides.length;
  
  //adds css class to show current slide
  getAllSlides[currSlidePanel].className = slideClass + " show";
  getAllDots[currSlidePanel].className += " active";
}
}

//handle Dots for current slide Click 
//const latestSlide = (n) => {
const latestSlide = function(n){changeSlide(currSlidePanel = n);}