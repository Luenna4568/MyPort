/* =====================================================
   MOBILE NAVIGATION
===================================================== */

const menuToggle = document.getElementById("menu-toggle");
const navbar = document.getElementById("navbar");

menuToggle.addEventListener("click", () => {

    const isOpen = navbar.classList.toggle("active");

    menuToggle.setAttribute(
        "aria-expanded",
        isOpen
    );

});


/* =====================================================
   CLOSE MENU WHEN LINK IS CLICKED
===================================================== */

const navLinks = document.querySelectorAll(".navbar a");

navLinks.forEach((link) => {

    link.addEventListener("click", () => {

        navbar.classList.remove("active");

        menuToggle.setAttribute(
            "aria-expanded",
            "false"
        );

    });

});


/* =====================================================
   CLOSE MENU WHEN CLICKING OUTSIDE
===================================================== */

document.addEventListener("click", (event) => {

    const clickedInsideMenu =
        navbar.contains(event.target);

    const clickedToggle =
        menuToggle.contains(event.target);

    if (
        !clickedInsideMenu &&
        !clickedToggle
    ) {

        navbar.classList.remove("active");

        menuToggle.setAttribute(
            "aria-expanded",
            "false"
        );

    }

});


/* =====================================================
   PLAY DEMO BUTTON
===================================================== */

const playDemo = document.querySelector(".btn-play");

playDemo.addEventListener("click", (event) => {

    event.preventDefault();

    alert(
        "Welcome to Jadoo Travel! The travel demo will be available soon."
    );

});


/* =====================================================
   HEADER SCROLL EFFECT
===================================================== */

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.position = "sticky";
        header.style.top = "0";
        header.style.paddingTop = "15px";
        header.style.paddingBottom = "15px";
        header.style.background = "rgba(255, 255, 255, 0.95)";
        header.style.backdropFilter = "blur(10px)";
        header.style.boxShadow =
            "0 5px 25px rgba(0, 0, 0, 0.06)";

    } else {

        header.style.position = "relative";
        header.style.paddingTop = "";
        header.style.paddingBottom = "";
        header.style.background = "";
        header.style.backdropFilter = "";
        header.style.boxShadow = "";

    }

});