const menuIcon = document.querySelector(".menu-icon");
const navLinks = document.querySelector("#navlinks");
const form=document.querySelector("form")

menuIcon.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

  window.addEventListener("load", function () {
    window.location.hash = "#home";
  });