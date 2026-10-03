// Portfolio loaded message
document.addEventListener("DOMContentLoaded", function () {
    console.log("Welcome to Tanu Sri's Portfolio!");
});

// Smooth navigation
const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        console.log("Navigating to " + link.textContent);
    });
});
