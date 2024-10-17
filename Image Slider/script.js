let slideIndex = 0;

function showSlides() {
  const slides = document.querySelectorAll(".slide");

  slides.forEach((slide) => slide.classList.remove("active"));

  slideIndex++;

  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }

  slides[slideIndex].classList.add("active");
}

function changeSlide(n) {
  const slides = document.querySelectorAll(".slide");

  slides[slideIndex].classList.remove("active");

  slideIndex += n;

  if (slideIndex >= slides.length) {
    slideIndex = 0;
  } else if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  }

  slides[slideIndex].classList.add("active");
}

setInterval(showSlides, 5000);

showSlides();
