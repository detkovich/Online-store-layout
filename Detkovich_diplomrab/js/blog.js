function openNav() {
    document.getElementById("myNav").style.width = "100%";
}


function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}

function openTab(tabName) {
    var i, x;
    x = document.getElementsByClassName("blog__containerTab");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    document.getElementById(tabName).style.display = "block";
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
document.querySelector('video').playbackRate = 4;