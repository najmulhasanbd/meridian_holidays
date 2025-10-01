"use strict";

document.addEventListener("DOMContentLoaded", function () {
    const tl = gsap.timeline({ defaults: { duration: 1, ease: "power3.out" } });

    tl.from(".topheader", { opacity: 0, y: -50 });
    tl.from(".top-header-left a", { x: -50, opacity: 0, stagger: 0.2 }, "-=0.5");
    tl.from(".top-header-right .social-icon", { x: 50, opacity: 0, stagger: 0.2, scale: 0.5, ease: "back.out(1.7)" }, "-=0.5");

    const socialIcons = document.querySelectorAll(".top-header-right .social-icon");
    socialIcons.forEach(icon => {
        icon.addEventListener("mouseenter", () => {
            gsap.to(icon, { scale: 1.3, rotate: 10, duration: 0.4, ease: "elastic.out(1,0.4)" });
        });
        icon.addEventListener("mouseleave", () => {
            gsap.to(icon, { scale: 1, rotate: 0, duration: 0.3, ease: "power1.out" });
        });
    });
});


// navbar
document.addEventListener("DOMContentLoaded", function () {
    const tl = gsap.timeline({ defaults: { duration: 0.8, ease: "power3.out" } });

    tl.from(".navbar-collapse ul li", { opacity: 0, y: 20, stagger: 0.2 });

    const menuItems = document.querySelectorAll(".navbar-collapse ul li a");
    menuItems.forEach(item => {
        item.addEventListener("mouseenter", () => {
            gsap.to(item, { y: -5, scale: 1.05, duration: 0.3, ease: "power3.out" });
        });
        item.addEventListener("mouseleave", () => {
            gsap.to(item, { y: 0, scale: 1, duration: 0.2, ease: "power3.out" });
        });
    });
});

//swiper
document.addEventListener("DOMContentLoaded", function () {
    const progressCircle = document.querySelector(".autoplay-progress circle");
    const progressContent = document.querySelector(".autoplay-progress span");

    const swiper = new Swiper(".mySwiper", {
        loop: true,
        centeredSlides: true,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        speed: 1500,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        on: {
            init: function () {
                const activeSlide = document.querySelector(".swiper-slide-active img");
                // subtle zoom-in
                gsap.fromTo(
                    activeSlide,
                    { scale: 1, transformOrigin: "center center" },
                    { scale: 1.05, duration: 4, ease: "power2.out" }
                );
            },
            slideChangeTransitionStart: function () {
                const previousSlides = document.querySelectorAll(".swiper-slide img");
                previousSlides.forEach(img => gsap.set(img, { scale: 1 }));

                const activeSlide = document.querySelector(".swiper-slide-active img");
                gsap.fromTo(
                    activeSlide,
                    { scale: 1, transformOrigin: "center center" },
                    { scale: 1.05, duration: 4, ease: "power2.out" }
                );
            },
            autoplayTimeLeft(s, time, progress) {
                const dashoffset = 125.6 * (1 - progress);
                progressCircle.style.strokeDashoffset = dashoffset;
                progressContent.textContent = `${Math.ceil(time / 1000)}s`;
            },
        },
    });
});

// promotion
document.addEventListener("DOMContentLoaded", function () {
    const promoSwiper = new Swiper(".promoSwiper", {
        loop: true,
        spaceBetween: 10,
        slidesPerView: 4,
        breakpoints: {
            320: { slidesPerView: 1, spaceBetween: 5 },
            768: { slidesPerView: 2, spaceBetween: 8 },
            992: { slidesPerView: 3, spaceBetween: 10 },
            1199: { slidesPerView: 4, spaceBetween: 10 },
        },
        navigation: {
            nextEl: ".promo-swiper-button-next",
            prevEl: ".promo-swiper-button-prev",
        },
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
    });

    // Hover animation for desktop
    if (window.innerWidth >= 992) {
        const promoSlides = document.querySelectorAll(".promo-single-promotion");
        promoSlides.forEach(slide => {
            const img = slide.querySelector("img");

            slide.addEventListener("mouseenter", () => {
                gsap.to(img, {
                    scale: 1.08,
                    boxShadow: "0px 20px 40px rgba(0,0,0,0.35), 0px -20px 40px rgba(0,0,0,0.2)",
                    transformOrigin: "center center",
                    duration: 0.5,
                    ease: "power3.out"
                });
            });

            slide.addEventListener("mouseleave", () => {
                gsap.to(img, {
                    scale: 1,
                    boxShadow: "0px 0px 0px rgba(0,0,0,0)",
                    duration: 0.3,
                    ease: "power3.out"
                });
            });
        });
    }
});

//breadcrumb
document.addEventListener("DOMContentLoaded", function () {
    const title = document.querySelector(".breadcrumb-content h1");
    const breadcrumb = document.querySelector(".breadcrumb-content .breadcrumb");

    gsap.from(title, { y: 50, opacity: 0, duration: 1, ease: "power3.out" });
    gsap.from(breadcrumb, { y: 50, opacity: 0, duration: 1, delay: 0.3, ease: "power3.out" });
});

//contact
document.addEventListener("DOMContentLoaded", function () {
    // Form fade-in from left
    gsap.from(".contact-form", {
        scrollTrigger: {
            trigger: ".contact-form",
            start: "top 80%",
        },
        opacity: 0,
        x: -50,
        duration: 1,
        ease: "power3.out"
    });


});

//about
document.addEventListener("DOMContentLoaded", function () {
    const teamCards = document.querySelectorAll(".team-card");
    teamCards.forEach(card => {
        const overlay = card.querySelector(".team-overlay");
        card.addEventListener("mouseenter", () => {
            gsap.to(overlay, { y: 0, opacity: 1, duration: 0.5, ease: "power3.out" });
        });
        card.addEventListener("mouseleave", () => {
            gsap.to(overlay, { y: "100%", opacity: 0, duration: 0.5, ease: "power3.in" });
        });
    });
});
// GSAP animation
document.addEventListener("DOMContentLoaded", function () {
    gsap.from(".about-title", {
        opacity: 0,
        y: -30,
        duration: 1,
        ease: "power3.out"
    });

    gsap.from(".about-text", {
        scrollTrigger: {
            trigger: ".about-section",
            start: "top 80%"
        },
        opacity: 0,
        y: 30,
        duration: 1,
        ease: "power3.out",
        stagger: 0.3
    });


    gsap.from(".about-image-wrapper img", {
        scrollTrigger: {
            trigger: ".about-section",
            start: "top 80%"
        },
        opacity: 0,
        x: -50,
        duration: 1,
        ease: "power3.out"
    });
});

document.addEventListener("DOMContentLoaded", function () {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".mv-card", {
        scrollTrigger: {
            trigger: ".about-mv-section",
            start: "top 80%",
            toggleActions: "play none none none"
        },
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.3,
        ease: "power3.out"
    });
});

//gallery
gsap.from(".gsap-item", {
    scrollTrigger: {
        trigger: ".gallery",
        start: "top 80%",
    },
    opacity: 0,
    y: 50,
    scale: 0.9,
    duration: 1,
    stagger: 0.2
});

//blog details
document.addEventListener("DOMContentLoaded", function () {
    gsap.from(".blog-details-title", { y: -50, opacity: 0, duration: 1, ease: "power3.out" });
    gsap.from(".blog-details-meta span", { x: -50, opacity: 0, duration: 1, ease: "power3.out", stagger: 0.2 });
    gsap.from(".blog-details-content p", { y: 50, opacity: 0, duration: 1, ease: "power3.out", stagger: 0.3 });
    gsap.from(".btn", { scale: 0, opacity: 0, duration: 0.8, stagger: 0.2, ease: "back.out(1.7)" });
});

// package
if (typeof gsap !== 'undefined') {
    const cards = document.querySelectorAll('.package-card');

    cards.forEach(card => {
        const img = card.querySelector('.package-img');
        const title = card.querySelector('.overlay h4');
        const badges = card.querySelectorAll('.overlay .flex span');

        card.addEventListener('mouseenter', () => {
            // Image slightly scale
            gsap.to(img, { scale: 1.1, duration: 0.5, ease: "power2.out" });
            // Title pop
            gsap.to(title, { y: -5, scale: 1.05, duration: 0.4, ease: "power2.out" });
            // Badges fade & move up
            gsap.to(badges, { y: 0, opacity: 1, stagger: 0.1, duration: 0.4, ease: "power2.out" });
        });

        card.addEventListener('mouseleave', () => {
            gsap.to(img, { scale: 1, duration: 0.5, ease: "power2.out" });
            gsap.to(title, { y: 0, scale: 1, duration: 0.4, ease: "power2.out" });
            gsap.to(badges, { y: 10, opacity: 0.9, stagger: 0.1, duration: 0.4, ease: "power2.out" });
        });
    });
}


// owner message
document.addEventListener("DOMContentLoaded", () => {
    gsap.from(".owner-image", {
        y: 50,
        opacity: 0,
        duration: 1.5,
        ease: "power3.out"
    });
    gsap.from(".owner-text", {
        x: 50,
        opacity: 0,
        duration: 1.5,
        delay: 0.3,
        ease: "power3.out"
    });
});

//blog
document.querySelectorAll('.blog-card').forEach(card => {
    const image = card.querySelector('.blog-image img');
    const footer = card.querySelector('.blog-footer');

    card.addEventListener('mouseenter', () => {
        gsap.to(card, { scale: 1.03, boxShadow: "0 10px 25px rgba(0,0,0,0.3)", duration: 0.5 });
        gsap.to(image, { scale: 1.07, duration: 0.5 });
        gsap.to(footer, { y: -5, duration: 0.5 });
    });

    card.addEventListener('mouseleave', () => {
        gsap.to(card, { scale: 1, boxShadow: "0 4px 12px rgba(0,0,0,0.15)", duration: 0.5 });
        gsap.to(image, { scale: 1, duration: 0.5 });
        gsap.to(footer, { y: 0, duration: 0.5 });
    });
});





// footer
gsap.from(".contact-card", {
    opacity: 0,
    y: 50,
    duration: 1,
    stagger: 0.3
});

gsap.from(".affiliation-logo, .bank-logo", {
    opacity: 0,
    scale: 0.5,
    duration: 0.5,
    stagger: 0.1,
    delay: 1
});

gsap.from(".social-icons a", {
    opacity: 0,
    y: 20,
    duration: 0.6,
    stagger: 0.2,
    delay: 1.5
});


//logo
// Ensure GSAP is loaded
if (typeof gsap !== 'undefined') {
    const logo = document.querySelector('.navbar-brand .logo');

    // Mouse enter event
    logo.addEventListener('mouseenter', () => {
        gsap.to(logo, {
            scale: 1.1,
            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
            duration: 0.3,
            ease: 'power1.out'
        });
    });

    // Mouse leave event
    logo.addEventListener('mouseleave', () => {
        gsap.to(logo, {
            scale: 1,
            boxShadow: 'none',
            duration: 0.3,
            ease: 'power1.in'
        });
    });
}

// Ensure GSAP is loaded
if (typeof gsap !== 'undefined') {
    const title = document.querySelector('.section-title h3');

    // Initial state
    gsap.set(title, { opacity: 0, y: 50 });

    // Animation on page load
    gsap.to(title, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out',
        delay: 0.5
    });
}


//scroll

// scrollup
$.scrollUp({
  scrollName: 'scrollUp', // Element ID
  topDistance: '300', // Distance from top before showing element (px)
  topSpeed: 300, // Speed back to top (ms)
  animation: 'fade', // Fade, slide, none
  animationInSpeed: 200, // Animation in speed (ms)
  animationOutSpeed: 200, // Animation out speed (ms)
  scrollText: '<i class="fab fa-facebook-f"></i>', // Text for element
  activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
});

//countr
   gsap.from(".country-card", {
        duration: 1,
        y: 50,
        opacity: 0,
        stagger: 0.2,
        ease: "power3.out"
    });

    //countr pack
      gsap.registerPlugin(ScrollTrigger);

  gsap.utils.toArray(".animate-card").forEach(card => {
    gsap.from(card, {
      scrollTrigger: {
        trigger: card,
        start: "top 90%",
      },
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power2.out"
    });
  });