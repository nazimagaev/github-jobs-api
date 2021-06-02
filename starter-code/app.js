const jobsAnouncements = [
  {
    title: "Senior Software Engineer",
    coverPhoto: "loop-studios.svg",
    published: "1h ago",
    shift: "Full Time",
    place: "Anywhere",
    companyName: "So Digital Inc.",
  },
  {
    title: "Haskell and PureScript Dev",
    coverPhoto: "insure.svg",
    published: "20h ago",
    shift: "Part Time",
    place: "Columbus",
    companyName: "National Wildlife",
  },
  {
    title: "Senior Software Engineer",
    coverPhoto: "faceit.svg",
    published: "1h ago",
    shift: "Full Time",
    place: "Russia",
    companyName: "So Digital Inc.",
  },
  {
    title: "Senior Software Engineer",
    coverPhoto: "shortly.svg",
    published: "1h ago",
    shift: "Full Time",
    place: "Anywhere",
    companyName: "So Digital Inc.",
  },
  {
    title: "Senior Software Engineer",
    coverPhoto: "myhome.svg",
    published: "1h ago",
    shift: "Full Time",
    place: "Anywhere",
    companyName: "So Digital Inc.",
  }
];

const container = document.querySelector(".container");

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
