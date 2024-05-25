const url = './data/members.json';
const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const cards = document.querySelector('#cards');

async function getCompaniesData() {
  const response = await fetch(url);
  const data = await response.json();
  /*console.table(data);*/
  displayCompanies(data.companies);
}

const displayCompanies = (companies) => {
  companies.forEach((company) => {
    let card = document.createElement('section');
    card.classList.add('company-card');
    let name = document.createElement('h2');
    name.textContent = `${company.name}`;
    name.classList.add('company-name');
    let address = document.createElement('p');
    address.textContent = `${company.address}`;
    address.classList.add('company-address');
    let phone = document.createElement('p');
    phone.textContent = `${company.phonenumber}`;
    phone.classList.add('company-phone');
    let website = document.createElement('a');
    website.textContent = `${company.website}`;
    website.setAttribute('href', company.website);
    website.classList.add('company-website');
    let portrait = document.createElement('img');
    portrait.setAttribute('src', company.imageurl);
    portrait.setAttribute('alt', `${company.name} CEO Portrait`);
    portrait.setAttribute('loading', 'lazy');
    portrait.setAttribute('width', '160');
    portrait.setAttribute('height', '210');
    portrait.classList.add('company-portrait');
    let membershiplevel = document.createElement('p');
    membershiplevel.textContent = `${company.membershiplevel}`;
    let other = document.createElement('div');
    other.classList.add('company-other');
    let founded = document.createElement('p');
    founded.textContent = `Founded: ${company.other.founded}`;
    let employee = document.createElement('p');
    employee.textContent = `Employee Size: ${company.other.employeeSize}`;
    let industry = document.createElement('p');
    industry.textContent = `Industry: ${company.other.industry}`;
    let specialization = document.createElement('p');
    specialization.textContent = `Specialization: ${company.other.specialization}`;
    card.appendChild(name);
    card.appendChild(address);
    card.appendChild(phone);
    card.appendChild(portrait);
    card.appendChild(website);
    card.appendChild(membershiplevel);
    other.appendChild(founded);
    other.appendChild(employee);
    other.appendChild(industry);
    other.appendChild(specialization);
    card.appendChild(other);
    cards.appendChild(card);
  });
}

gridbutton.addEventListener("click", () => {
  cards.classList.add("grid");
  cards.classList.remove("list");
});

listbutton.addEventListener("click", () => {
  cards.classList.add("list");
  cards.classList.remove("grid");
});

getCompaniesData();