var slideIndex = 1;
var slides = document.getElementsByClassName("mySlides");
showSlide(slideIndex);

// Next/previous controls
function plusSlides(i) {
  showSlide(slideIndex + i);

  slideIndex += i;

  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  else if(slideIndex < 1){
    slideIndex = slides.length;
  }

  console.log(slideIndex);
  //showSlides();
}

function slideshow() {
  var i;

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slideIndex++;

  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  else if(slideIndex < 1){
    slideIndex = slides.length;
  }

  slides[slideIndex-1].style.display = "block";

  setTimeout(slideshow, 7000); // Change image every 7 seconds
}

function showSlide(n) {
  var i;

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  if (n > slides.length) {
    n = 1;
  }
  else if(n < 1){
    n = slides.length;
  }

  slides[n-1].style.display = "block";

  //console.log(n-1);
}


window.onload = slideshow;
