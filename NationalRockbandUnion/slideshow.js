/*****************************************************
*  title: slideshow.js                               *
*  date: November 9th, 2020                          *
*  author: Jeremy Hong                               * 
*  description: Script of this fading slideshow      *
*                                                    * 
******************************************************/

// 슬라이드 쇼 구현부
let slideIndex = 1;
let n = slideIndex;

showSlides(slideIndex);

function plusSlides(n){
  showSlides(slideIndex += n);
}

function currentSlide(n){
  showSlides(slideIndex = n);
}

function showSlides(n){
  let i;
  let slides =
    document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");

  if (n > slides.length) { slideIndex = 1}

  if (n < 1){
      slideIndex = slides.length;
  }

  for (i=0; i<slides.length; i++){
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
}
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}