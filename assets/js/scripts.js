let toggleOpen = document.querySelector("#toggleOpen");
let toggleClose = document.querySelector("#toggleClose");
let menuItems = document.querySelectorAll(".menu-items");

let menuOnMobile = document.querySelector("#menuOnMobile");

toggleOpen.addEventListener("click", () => {
  toggleMenu();
});
toggleClose.addEventListener("click", () => {
  toggleMenu();
});

menuItems.forEach((element) => {
  element.addEventListener("click", () => {
    setTimeout(() => {
      toggleMenu();
    }, 200);
  });
});

function toggleMenu() {
  menuOnMobile.classList.toggle("hidden");
}
