window.onscroll = function() {
    scroll = document.documentElement.scrollTop;
    header = document.getElementById("header");

    if (scroll > 20) {
        header.classList.add("nav_mod");
    } else if (scroll < 20) {
        header.classList.remove("nav_mod");
    }
}

document.getElementById("btn_menu").addEventListener("click", mostrar_menu);

menu = document.getElementById("header");
nav = document.getElementById("nav");

function mostrar_menu() {

    menu.classList.toggle('move_content');
    nav.classList.toggle('move_nav');
}

window.addEventListener("resize", function() {
    if (window.innerWidth > 880) {
        menu.classList.remove('move_content');
        nav.classList.remove('move_nav');
    }
})
let sliderInner = document.querySelector(".slider--inner");
let sliderInner2 = document.querySelector(".slider--inner2");

let images = sliderInner.querySelectorAll("img");
let images2 = sliderInner2.querySelectorAll("img");

let index = 1;

setInterval(function() {
    let percentage = index * -100;
    sliderInner.style.transform = "translateX(" + percentage + "%)";
    index++;
    if (index > (images.length - 1)) {
        index = 0
    }
}, 3000);

setInterval(function() {
    let percentage = index * -100;
    sliderInner2.style.transform = "translateX(" + percentage + "%)";
    index++;
    if (index > (images.length - 1)) {
        index = 0
    }
}, 3000);