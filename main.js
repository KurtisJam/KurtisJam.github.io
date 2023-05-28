const primaryHeader = document.querySelector(".header");
const primaryNav = primaryHeader.querySelector(".nav-list");

function openMenu() {
  primaryNav.classList.add("show-menu");
}

function closeMenu() {
  primaryNav.classList.remove("show-menu");
}

function setDarkMode(e) {
  if (e.classList.contains("fa-moon")) {
    e.classList.replace("fa-moon", "fa-sun");
    document.body.classList.add("dark-mode");
  } else {
    e.classList.replace("fa-sun", "fa-moon");
    document.body.classList.remove("dark-mode");
  }
}
