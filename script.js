"use strict";

document.addEventListener("DOMContentLoaded", function () {
  // Hide loader elements
  var loader = document.querySelector(".loader");
  var preloader = document.getElementById("preloder");

  if (loader) {
    loader.style.display = "none";
    setTimeout(function () {
      if (preloader) {
        preloader.style.display = "none";
      }
    }, 200);
  }

  // Handle learn more button
  var learnMoreButton = document.querySelector(".btn.custom-btn");
  if (learnMoreButton) {
    learnMoreButton.addEventListener("click", function () {
      // Your logic here
    });
  }

  // Handle menu item hover effects
  document.querySelectorAll(".header-section .nav-menu .mainmenu ul li").forEach(function (el) {
    el.addEventListener("mouseenter", function () {
      el.classList.add("active");
    });
    el.addEventListener("mouseleave", function () {
      el.classList.remove("active");
    });
  });

  // Initialize niceSelect for select elements with .show-result-select class
  document.querySelectorAll(".show-result-select").forEach(function (el) {
    // Assuming niceSelect library is still included and needed
    niceSelect(el);
});
});