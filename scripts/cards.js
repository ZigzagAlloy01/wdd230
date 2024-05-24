const url = './data/links.json';
let cardActivities = document.querySelector('.card-activities');

async function getCourseData() {
  const response = await fetch(url);
  const data = await response.json();
  data.weeks.forEach((week) => {
    const weekSection = document.createElement('section');
    weekSection.classList.add('week');

    const weekTitle = document.createElement('h2');
    weekTitle.textContent = week.week;
    weekSection.appendChild(weekTitle);

    const linksList = document.createElement('ul');
    linksList.classList.add('links-list');

    week.links.forEach((link) => {
      const linkItem = document.createElement('li');
      const linkTitle = document.createElement('a');
      linkTitle.href = link.url;
      linkTitle.textContent = link.title;

      if (link.url === "") {
        linkTitle.classList.add('inactive');
      }
      linkItem.appendChild(linkTitle);
      linksList.appendChild(linkItem);
    });
    weekSection.appendChild(linksList);
    cardActivities.appendChild(weekSection);
  });
}

getCourseData();