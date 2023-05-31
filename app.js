document.addEventListener("DOMContentLoaded", function() {
  const slideshows = document.querySelectorAll(".slideshow-container");

  for (let i = 0; i < slideshows.length; i++) {
    showSlides(slideshows[i], 1);
  }

  document.querySelectorAll(".prev").forEach(function(prev) {
    prev.addEventListener("click", function(e) {
      const slideshow = e.target.closest(".slideshow-container")
      plusSlides(slideshow, -1);
    });
  })

  document.querySelectorAll(".next").forEach(function(next) {
    next.addEventListener("click", function(e) {
      const slideshow = e.target.closest(".slideshow-container")
      plusSlides(slideshow, 1);
    });
  })
});

function plusSlides(show, n) {
  let slideIndex = parseInt(show.dataset.slideIndex);
  showSlides(show, slideIndex + n);
}

function showSlides(slideshow, n) {
  let slides = slideshow.querySelectorAll(".mySlides");

  if (n > slides.length) { n = 1 }
  if (n < 1) { n = slides.length }

  slideshow.dataset.slideIndex = n;

  // let dots = document.getElementsByClassName("dot");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[n - 1].style.display = "block";

  // for (let i = 0; i < dots.length; i++) {
  //   dots[i].className = dots[i].className.replace(" active", "");
  // }
  // dots[slideIndex-1].className += " active";
}
