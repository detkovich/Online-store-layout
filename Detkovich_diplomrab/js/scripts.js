function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}
window.onscroll = function() { myFunction() };
var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}


var slideIndex = 1;
showSlides();

function plusSlide() {
    slideIndex = slideIndex + 1;
    showSlides();
}

function minusSlide() {
    slideIndex = slideIndex - 1;
    showSlides();
}

function currentSlide(n) {
    slideIndex = n;
    showSlides()
}


function showSlides() {
    var slides = document.getElementsByClassName('say-it__item');
    var dots = document.getElementsByClassName('say-it__slider-dots_item');

    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    if (slideIndex < 1) {
        slideIndex = slides.length;
    }

    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    for (var i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(' active', '');
    }

    slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].className += ' active';
}
document.querySelector('video').playbackRate = 4;