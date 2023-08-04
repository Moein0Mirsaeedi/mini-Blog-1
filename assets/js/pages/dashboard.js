let menuIcons = document.querySelectorAll(".icons-menu");
let sectionPages = document.querySelectorAll(".sectionPages");

let parentPages = document.getElementById("parentPages");
parentPages.style.transform = `translateX(-300vw)`;
parentPages.style.height = `870px`;

let locationPages = [
  { name: "setting", location: "0",},
  { name: "profile", location: "100",},
  { name: "home", location: "200",},
  { name: "activity", location: "300",},
  { name: "blog", location: "400",},
];

menuIcons.forEach((element) => {
  element.addEventListener("click", (event) => {
    locationPages.forEach((pages) => {
      if (pages.name == event.target.id) {
        document.getElementById("titleSite").innerHTML = `Dashboard | ${pages.name}`;
        movePage(pages);
        menuIcons.forEach((element) => {
          element.classList.remove("active-icon");
        });
        element.classList.add("active-icon");

        sectionPages.forEach((element) => {
          if (element.id == pages.name) {
            sizePage(element);
          }
        });
      }
    });
  });
});

function movePage(locationMove) {
  parentPages.style.transform = `translateX(-${locationMove.location}vw)`;
}

function sizePage(size) {
  parentPages.style.height = `${size.children[0].clientHeight + 100}px`;
}

var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Hong Kong', 'Macau', 'Japan', 'Switzerland', 'Spain', 'Singapore'],
        datasets: [{
            label: 'Life expectancy',
            data: [78.308, 80.188, 84.118, 65.706, 82.5, 83.468],
            backgroundColor: [
                'rgba(216, 27, 96, 0.6)',
                'rgba(3, 169, 244, 0.6)',
                'rgba(255, 152, 0, 0.6)',
                'rgba(29, 233, 182, 0.6)',
                'rgba(156, 39, 176, 0.6)',
                'rgba(84, 110, 122, 0.6)'
            ],
            borderColor: [
                'rgba(216, 27, 96, 1)',
                'rgba(3, 169, 244, 1)',
                'rgba(255, 152, 0, 1)',
                'rgba(29, 233, 182, 1)',
                'rgba(156, 39, 176, 1)',
                'rgba(84, 110, 122, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        legend: {
            display: false
        },
        title: {
            display: true,
            text: 'Life Expectancy by Country',
            position: 'top',
            fontSize: 16,
            padding: 20
        },
        scales: {
            yAxes: [{
                ticks: {
                    min: 60
                }
            }]
        }
    }
});