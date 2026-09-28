// Phone menu: opens and closes when the menu button is tapped.

const toggle = document.getElementById("menu-toggle");
const menu = document.getElementById("nav-menu");

function closeMenu() {
  menu.classList.remove("open");
  toggle.setAttribute("aria-expanded", "false");
  toggle.setAttribute("aria-label", "Open menu");
}

toggle.addEventListener("click", function () {
  const isOpen = menu.classList.toggle("open");
  toggle.setAttribute("aria-expanded", isOpen);
  toggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
});

// Close the menu after a link is tapped
menu.querySelectorAll("a").forEach(function (link) {
  link.addEventListener("click", closeMenu);
});