var slideIndex = 1;
showSlides(slideIndex);

var last_time = new Date();

setInterval(function () {
    let nowTime = new Date();
    if (nowTime.getTime() - last_time.getTime() > 4000) {
        last_time = nowTime;
        console.log(1);
        showSlides(slideIndex += 1);
    }
}, 200);

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    let nowTime = new Date();
    last_time = nowTime;
} 