let toggleOpen = document.querySelector("#toggleOpen");
let menuOnMobile = document.querySelector("#menuOnMobile");
let toggleClose = document.querySelector("#toggleClose");
let menuItem = document.querySelectorAll(".menu-items");

toggleOpen.addEventListener("click", () => {
  toggleBtnAction();
});
toggleClose.addEventListener("click", () => {
  toggleBtnAction();
});

menuItem.forEach((Element) => {
  Element.addEventListener("click", () => {
    toggleBtnAction();
  });
});

function toggleBtnAction() {
  menuOnMobile.classList.toggle("hidden");
}
