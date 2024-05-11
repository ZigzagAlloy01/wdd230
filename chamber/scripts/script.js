const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');
const lastModified = document.querySelector('#last-modified');
const sidebarContent = document.querySelector('#visits');
const now = new Date();
const localStorage = window.localStorage || '';
const lastVisit = localStorage.getItem('lastVisited');
const lastVisitDate = new Date(lastVisit);
const diffInMs = now - lastVisitDate;
const days = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
const visitsDisplay = document.querySelector(".visits");

let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});

function updateLastModified() {
	const now = new Date();
	const stringDate = now.toLocaleString();
	lastModified.textContent = `Last modification: ${stringDate}`;
}

function displayMessage() {
	if (!lastVisit) {
	  sidebarContent.textContent = 'Welcome! Let us know if you have any questions.';
	  return;
	}
	if (days === 0) {
	  sidebarContent.textContent = 'You already visited us today. Back so soon, awesome!';
	} else {
	  const message = days === 1 ? 'You last visited 1 day ago.' : `You last visited ${days} days ago.`;
	  sidebarContent.textContent = message;
	}
  }

function updateVisits() {
	if (numVisits !== 0) {
		visitsDisplay.textContent = numVisits;
	} else {
		visitsDisplay.textContent = `This is your first visit. 🥳 Welcome!`;
	}
	numVisits++;
	localStorage.setItem("numVisits-ls", numVisits);
}

updateLastModified();
localStorage.setItem('lastVisited', new Date());
window.addEventListener('load', displayMessage);
updateVisits();

