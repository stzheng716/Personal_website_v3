/*=============== menu icon navbar ===============*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}


/*=============== scroll sections active link===============*/

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');


window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id')

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            })
        };
    });


    /*===============sticky navbar ===============*/
    let header = document.querySelector('.header');

    header.classList.toggle('sticky', window.scrollY > 100);

    /*=============== remove menu icon navbar when click navbar link(scroll)===============*/
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

/*===============swiper===============*/
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    grabCursor: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

/*=============== dark light mode ===============*/
let darkModeIcon = document.querySelector('#darkMode-icon');

darkModeIcon.onclick = () => {
    darkModeIcon.classList.toggle('bx-sun');
    document.body.classList.toggle('dark-mode');

    document.querySelector('.logo')
};

/*=============== scroll reveal ===============*/
ScrollReveal({
    reset: true,
    distance: '10px',
    duration: 1700,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.skills-container, .portfolio-box, .testimonial-wrapper, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img img', { origin: 'left' });
ScrollReveal().reveal('.home-content h3, .home-content p, .about-content', { origin: 'right' });

/*=============== read more ===============*/

function readMore() {
    const moreText = document.getElementById("more");
    const btnText = document.getElementById("readMoreBtn");

    if (moreText.style.display !== "none") {
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
    } else {
        btnText.innerHTML = "Read less";
        moreText.style.display = "inline";
    }
    console.log("display", moreText)
}

/*=============== show more front ===============*/

function showMore1() {
    let list = document.getElementById("skillsList1");
    let showBtn = document.getElementById("readMoreBtn1");
    
    if (list.style.display === "none") {
        list.style.display = "inline";
        showBtn.innerHTML = "Show less";
    } else {
        list.style.display = "none";
        showBtn.innerHTML = "Show skills";
    }
}

/*=============== show more back ===============*/

function showMore2() {
    let list = document.getElementById("skillsList2");
    let showBtn = document.getElementById("readMoreBtn2");

    if (list.style.display === "none") {
        list.style.display = "inline";
        showBtn.innerHTML = "Show less";
    } else {
        list.style.display = "none";
        showBtn.innerHTML = "Show skills";
    }
}

/*=============== show more team ===============*/

function showMore3() {
    let list = document.getElementById("skillsList3");
    let showBtn = document.getElementById("readMoreBtn3");

    if (list.style.display === "none") {
        list.style.display = "inline";
        showBtn.innerHTML = "Show less";
    } else {
        list.style.display = "none";
        showBtn.innerHTML = "Show skills";
    }
}