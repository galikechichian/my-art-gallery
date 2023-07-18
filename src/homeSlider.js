/*Author: Gali Kechichian*/

// The code below is to animate the 
// featuring page

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {showSlides(slideIndex += n)}

function currentSlide(n) {showSlides(slideIndex = n)}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");

    if (n > slides.length) {slideIndex = 1}    
    
    if (n < 1) {slideIndex = slides.length}
    
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("dot-active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " dot-active";
}

// Add the touch event listeners for horizontal scrolling
var slideshowContainer = document.getElementById("slideshow-container");

slideshowContainer.addEventListener("touchstart", handleTouchStart, false);
slideshowContainer.addEventListener("touchmove", handleTouchMove, false);

var xDown = null;
var yDown = null;

function handleTouchStart(event) {
  xDown = event.touches[0].clientX;
  yDown = event.touches[0].clientY;
}

function handleTouchMove(event) {
  if (!xDown || !yDown) return;
  var xUp = event.touches[0].clientX;
  var yUp = event.touches[0].clientY;
  var xDiff = xDown - xUp;
  var yDiff = yDown - yUp;
  if (Math.abs(xDiff) > Math.abs(yDiff)) {
    if (xDiff > 0) {
      // Swipe left, scroll to the next image if available
      plusSlides(1);
    } else {
      // Swipe right, scroll to the previous image if available
      plusSlides(-1);
    }
  }
  xDown = null;
  yDown = null;
}