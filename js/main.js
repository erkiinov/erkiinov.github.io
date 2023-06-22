const navItems = document.querySelectorAll(".nav-item");
const contactBtn = document.querySelector(".contact_btn");
const scrollToTop = document.querySelector(".scroll_top_btn");

$(document).ready(function () {

    $(window).scroll(function () {


        var height = '50';
        var scrollTop = $(window).scrollTop();

        if (scrollTop >= height - 40) {
            $('.main_nav').addClass('solid-nav');

        } else {
            $('.main_nav').removeClass('solid-nav');
        }

    });
});

document.querySelector("*").addEventListener('contextmenu', s => {
    s.preventDefault()
})

document.querySelector(".nav_toggle").addEventListener("click", event => {
    document.querySelector(".nav_toggle").classList.toggle('open')
    const navMenu = document.querySelector(".menu")

    navMenu.classList.toggle("open_nav")
})

window.onscroll = function () {
    scrollFunction()
}

function scrollFunction() {
    if (scrollToTop != null) {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            scrollToTop.classList.remove("hidden");
        } else {
            scrollToTop.classList.add("hidden");
        }
    }
}

if (scrollToTop != null) {
    scrollToTop.addEventListener("click", event => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    })
}

AOS.init();

const images = document.querySelectorAll('img')
images.forEach(img => {
    img.setAttribute("draggable", 'false')
})

var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 30000000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

function loader() {
    const loading = document.querySelector(".loading")
    if (document.readyState !== "complete") {
        loading.style.display = "flex"
    } else {
        loading.style.display = "none"
    }
}