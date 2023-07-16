let menuIcons = document.querySelectorAll(".icons-menu");

let parentPages = document.getElementById("parentPages");
parentPages.style.transform = `translateX(-200vw)`;

let locationPages = [
  { name: "setting", location: "0" },
  { name: "profile", location: "100" },
  { name: "home", location: "200" },
  { name: "activity", location: "300" },
  { name: "blog", location: "400" },
];

menuIcons.forEach((element) => {
  element.addEventListener("click", (event) => {
    locationPages.forEach((pages) => {
      if (pages.name == event.target.id) {
        movePage(pages.location);
        menuIcons.forEach((element) => {
          element.classList.remove("active-icon");
        });
        element.classList.add("active-icon");
      }
    });
  });
});

function movePage(locationMove) {
  parentPages.style.transform = `translateX(-${locationMove}vw)`;
}
