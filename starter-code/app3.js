const jobsAnouncements = [
  {
    title: "Senior Software Engineer",
    coverPhoto: "Group1.svg",
    published: "1h ago",
    shift: "Full Time",
    place: "Anywhere",
    companyName: "So Digital Inc.",
  },
  {
    title: "Haskell and PureScript Dev",
    coverPhoto: "Group2.svg",
    published: "20h ago",
    shift: "Part Time",
    place: "Columbus",
    companyName: "National Wildlife",
  },
  {
    title: "Senior Software Engineer",
    coverPhoto: "Group3.svg",
    published: "1h ago",
    shift: "Full Time",
    place: "Russia",
    companyName: "So Digital Inc.",
  },
  {
    title: "Senior Software Engineer",
    coverPhoto: "Group4.svg",
    published: "1h ago",
    shift: "Full Time",
    place: "Anywhere",
    companyName: "So Digital Inc.",
  },
  {
    title: "Senior Software Engineer",
    coverPhoto: "Group5.svg",
    published: "1h ago",
    shift: "Full Time",
    place: "Anywhere",
    companyName: "So Digital Inc.",
  },
  {
    title: "Senior Software Engineer",
    coverPhoto: "Group6.svg",
    published: "1h ago",
    shift: "Full Time",
    place: "Anywhere",
    companyName: "So Digital Inc.",
  },
  {
    title: "Senior Software Engineer",
    coverPhoto: "Group7.svg",
    published: "1h ago",
    shift: "Full Time",
    place: "Anywhere",
    companyName: "So Digital Inc.",
  },
  {
    title: "Senior Software Engineer",
    coverPhoto: "Group8.svg",
    published: "1h ago",
    shift: "Full Time",
    place: "Anywhere",
    companyName: "So Digital Inc.",
  },
  {
    title: "Senior Software Engineer",
    coverPhoto: "Group9.svg",
    published: "1h ago",
    shift: "Full Time",
    place: "Anywhere",
    companyName: "So Digital Inc.",
  },
  {
    title: "Senior Software Engineer",
    coverPhoto: "Group10.svg",
    published: "1h ago",
    shift: "Full Time",
    place: "Anywhere",
    companyName: "So Digital Inc.",
  },
  {
    title: "Senior Software Engineer",
    coverPhoto: "Group11.svg",
    published: "1h ago",
    shift: "Full Time",
    place: "Anywhere",
    companyName: "So Digital Inc.",
  },
  {
    title: "Senior Software Engineer",
    coverPhoto: "Group12.svg",
    published: "1h ago",
    shift: "Full Time",
    place: "Anywhere",
    companyName: "So Digital Inc.",
  },
];

const container = document.querySelector(".job-container");

jobsAnouncements.forEach((item) => {
  const { title, coverPhoto, published, shift, place, companyName } = item;

  const jobscardHtml = `<div class="jobs-card">
  <div class="jobs-card__photo">
      <img src="./assets/desktop/${coverPhoto}" alt="loop-studios">
  </div>
  <div class="jobs-card__description">
      <div class="jobs-card__description-top">
   <span class="job-card__published">${published}</span>
   <span class="job-card__shift">${shift}</span>
      </div>
      <p class="job-card__title">${title}</p>
      <div class="jobs-card__description-bottom">${companyName}</div>
  </div>
  <div class="jobs-card__locations">
      <span class="job-card__location">${place}</span>
  </div>
  </div>
`;

  container.insertAdjacentHTML("beforeend", jobscardHtml);
});

// const toggle = document.querySelector(".navbar__toggle");
// const header = document.querySelector(".header");
// const card = document.querySelector(".jobs-card");

// toggle.addEventListener("change", () => {
//   document.body.classList.toggle("dark")
// });

// toggle.addEventListener('click', () => {
//  header.classList.add('dark')
// })

const toggleSwitch = document.querySelector(".navbar__toggle");
const body = document.querySelector("body");
const header = document.querySelector(".header");
const card = document.querySelector(".jobs-card");
const shift = document.querySelector(".shift");

// card.forEach(function(item){
//   item.darkMode();
// });

function darkMode() {
  body.style.background = "#121721";
  header.style.background = "#19202D";
  card.style.background = "#19202D";
  shift.style.color = "#fff";
}

function lightMode() {
  body.style.background = "#f2f2f2";
  header.style.background = "#ffffff";
  card.style.background = "#ffffff";
  shift.style.color = "#19202D";
}

function switchTheme(event) {
  if (event.target.checked) {
    darkMode();
  } else {
    lightMode();
  }
}

toggleSwitch.addEventListener("change", switchTheme);

// const container = document.querySelector(".job-container");

// jobsAnouncements.forEach((item) => {
//   const { title, coverPhoto, published, shift, place, companyName } = item;

//   const jobsCard = document.createElement("div");
//   jobsCard.classList.add("jobs-card");

//   const jobsCardPhoto = document.createElement("div");
//   jobsCardPhoto.classList.add("jobs-card__photo");

//   const jobsImage = document.createElement("img");
//   jobsImage.setAttribute("src", "./assets/desktop/Group1.svg");

//   jobsCardPhoto.append(jobsImage);

//   const jobDescription = document.createElement("div");
//   jobDescription.classList.add("jobs-card__description");

//   const jobDescriptionTop = document.createElement("div");
//   jobDescriptionTop.classList.add("jobs-card__description-top");
//   const jobCardPublished = document.createElement("span");
//   jobCardPublished.classList.add("job-card__published");
//   jobCardPublished.textContent = "5h ago";
//   const jobCardShift = document.createElement("span");
//   jobCardShift.classList.add("job-card__shift");
//   jobCardShift.textContent = "Full Time";

//   jobDescriptionTop.append(jobCardPublished, jobCardShift);

//   const jobCardTitle = document.createElement("p");
//   jobCardTitle.classList.add("job-card__title");
//   jobCardTitle.textContent = "Senior Frontend Developer";

//   const jobDescriptionBottom = document.createElement("div");
//   jobDescriptionBottom.classList.add("jobs-card__description-bottom");
//   jobDescriptionBottom.textContent = "So Digital Inc.";

//   jobDescription.append(jobDescriptionTop, jobCardTitle, jobDescriptionBottom);

//   const jobLocations = document.createElement("div");
//   jobLocations.classList.add("jobs-card__locations");

//   const jobLocation = document.createElement("div");
//   jobLocation.classList.add("job-card__location");
//   jobLocation.textContent = "Anywhere";

//   jobLocations.append(jobLocation);

//   jobsCard.append(jobsCardPhoto, jobDescription, jobLocations);

//   container.append(jobsCard);

//   container.insertAdjacentHTML("beforeend", container);
// });
