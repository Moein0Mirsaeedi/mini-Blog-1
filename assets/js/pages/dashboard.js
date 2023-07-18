let menuIcons = document.querySelectorAll(".icons-menu");
let sectionPages = document.querySelectorAll(".sectionPages");

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
        sectionPages.forEach((element) => {
          if (element.id == pages.name) {
            sizePage(element);
          }
        });
        document.getElementById("titleSite").innerHTML = `Dashboard | ${pages.name}`;
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
}

function sizePage(size) {
  console.log(size.children[0].clientHeight);
  parentPages.style.height = `${size.children[0].clientHeight + 100}px`;
}
