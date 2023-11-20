let slideIndex = 1;

function changeSlide(sIndex) {
  slideIndex += sIndex;
  showSlides(slideIndex);
}

function displayDotSlide(sIndex) {
  slideIndex = sIndex;
  showSlides(slideIndex);
}

function initialSlide() {
  showSlides(slideIndex);
}

function showSlides(sIndex) {
  const slides = document.getElementsByClassName("slide");
  const dots = document.getElementsByClassName("slide-dot");

  if (sIndex > slides.length) {
    slideIndex = 1;
  }

  if (sIndex < 1) {
    slideIndex = slides.length;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace("active", "");
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}