// set the starting slide for the slideshow
let slideIndex = 1;


// change between neighboring slides
function changeSlide(sIndex) {
  slideIndex += sIndex;
  showSlides(slideIndex);
}


// change the slide into a specific index, shown in the dots below the slideshow
function displayDotSlide(sIndex) {
  slideIndex = sIndex;
  showSlides(slideIndex);
}


// show the initial slide at the designated starting point
function initialSlide() {
  showSlides(slideIndex);
}


// main function to change the slides in the slideshow
function showSlides(sIndex) {
  // search for all slide elements in the document
  const slides = document.getElementsByClassName("slide");
  // search for all slide display dots elements in the document
  const dots = document.getElementsByClassName("slide-dot");

  // if the given index is greater than the total amount of slides, reset it to the first one
  if (sIndex > slides.length) {
    slideIndex = 1;
  }

  // if the given index is smaller than 1 set the index to the total amount of slides
  if (sIndex < 1) {
    slideIndex = slides.length;
  }

  // iterate through the total amount of slides and hide them
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // iterate through the toal amount of display dots and make them inactive
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace("active", "");
  }

  // unhide the slide and activate the display dot at the given index
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}