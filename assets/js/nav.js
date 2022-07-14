const primaryNav = document.querySelector(".primary-nav");
const navToggle = document.querySelector(".mobile-nav-toggle");
const pages = ["portfolio", "about", "winds", "social", "contact"];
const navButtons = document.querySelectorAll("[data-nav]");

navButtons.forEach((button) => {
  button.addEventListener("click", () => {
    changePage(button.dataset.nav);
  });
});

const changePage = (target) => {};

//responsive-----------------------------------------------
navToggle.addEventListener("click", () => {
  const visible = primaryNav.getAttribute("data-visible");

  if (visible === "false") {
    primaryNav.setAttribute("data-visible", true);
    navToggle.setAttribute("aria-expanded", true);
  } else {
    primaryNav.setAttribute("data-visible", false);
    navToggle.setAttribute("aria-expanded", false);
  }
});
