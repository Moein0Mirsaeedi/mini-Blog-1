let menuIcons = document.querySelectorAll(".icons-menu");

let parentPages = document.getElementById("parentPages");
parentPages.style.transform = `translateX(-200vw)`;
parentPages.style.height = `870px`;

let locationPages = [
  { name: "setting", location: "0", height: "" },
  { name: "profile", location: "100", height: "" },
  { name: "home", location: "200", height: "870" },
  { name: "activity", location: "300", height: "" },
  { name: "blog", location: "400", height: "" },
];

menuIcons.forEach((element) => {
  element.addEventListener("click", (event) => {
    locationPages.forEach((pages) => {
      if (pages.name == event.target.id) {
        movePage(pages);
        menuIcons.forEach((element) => {
          element.classList.remove("active-icon");
        });
        element.classList.add("active-icon");
      }
    });
  });
});

function movePage(locationMove) {
  parentPages.style.transform = `translateX(-${locationMove.location}vw)`;
  parentPages.style.height = `${locationMove.height}px`;
}
