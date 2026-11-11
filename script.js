// MOBILE NAVIGATION
const menuButton = document.getElementById("menu-btn");
const navbar = document.getElementById("navbar");

menuButton.addEventListener("click", function () {
  navbar.classList.toggle("active");
});

// CLOSE MENU AFTER CLICKING A LINK
const navLinks = document.querySelectorAll("#navbar a");
navLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    navbar.classList.remove("active");
  });
});

// COPYRIGHT YEAR
const yearElement = document.getElementById("year");
yearElement.textContent = new Date().getFullYear();
