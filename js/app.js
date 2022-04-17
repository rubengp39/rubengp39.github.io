const header = document.querySelector("header");

// STICKY NAVBAR

function stickyNavbar() {
    header.classList.toggle("scrolled", window.pageYOffset > 0);
}

stickyNavbar();

window.addEventListener("scroll", stickyNavbar);

// Scroll Reveal

let sr = ScrollReveal({
    duration: 2000,
    distance: "90px",
});

sr.reveal(".showcase-info", { delay: 300 });
sr.reveal(".showcase-image", {
    origin: "top",
    delay: 300
});