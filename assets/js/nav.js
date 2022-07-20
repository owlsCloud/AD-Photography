const primaryNav = document.querySelector(".primary-nav");
const navToggle = document.querySelector(".mobile-nav-toggle");
const navButtons = document.querySelectorAll("[data-nav]");

const changePage = (target) => {
  currPage = document.querySelector("[data-current-pg]");
  newPage = document.querySelector(`#${target}`);

  newPage.setAttribute("data-current-pg", true);
  currPage.setAttribute("data-current-pg", false);
};

navButtons.forEach((button) => {
  button.addEventListener("click", () => {
    changePage(button.dataset.nav);
  });
});

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
