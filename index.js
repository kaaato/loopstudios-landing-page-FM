"use strict"

const buttonToOpen = document.querySelector(".button--open");
const buttonToClose = document.querySelector(".button--close");
const nav = document.querySelector(".menu--header");

buttonToOpen.addEventListener("click", manageMobileMenu);

function manageMobileMenu() {
  openMenu();
  setUpForClose();

  function openMenu() {
    buttonToOpen.setAttribute("aria-expanded", "true");
    nav.classList.toggle("menu--mobile-active");
    buttonToClose.focus();
  }

  function setUpForClose() {
    buttonToClose.addEventListener("click", closeMenu);
    window.addEventListener("keydown", closeMenuByEscape);
    window.addEventListener("resize", closeMenu);
  }

  function closeMenu() {
    buttonToOpen.setAttribute("aria-expanded", "false");
    nav.classList.toggle("menu--mobile-active");
    buttonToClose.removeEventListener("click", closeMenu);
    window.removeEventListener("keydown", closeMenuByEscape);
    window.removeEventListener("resize", closeMenu);
  }

  function closeMenuByEscape(event) {
    if (event.key === "Escape") {
      closeMenu();
    }
  }
}
