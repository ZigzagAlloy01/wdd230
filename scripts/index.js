const modeButton = document.querySelector("#mode");
const main = document.querySelector("main");
const h1 = document.querySelector("h1");
const lastModified = document.querySelector('#last-modified');
const darkMode = document.querySelectorAll(".card-activities ul, .card-information ul, .card-activities a, .card-information a");
const visitsDisplay = document.querySelector(".visits");

let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

modeButton.addEventListener('click', function() {
	if (modeButton.textContent.includes("🕶️")) {
		main.style.background = "#000000";
		main.style.color = "#ffffff";
		h1.style.background = "#000000";
		h1.style.color = "#ffffff";
		darkMode.forEach(element => {
			element.style.color = "#ffffff";
		});
		modeButton.textContent = "🔆";
	} else {
		main.style.background = "#ffffff";
		main.style.color = "#000000";
		h1.style.background = "#ffffff";
		h1.style.color = "#000000";
		darkMode.forEach(element => {
			element.style.color = "#000000";
		});
		modeButton.textContent = "🕶️";
	}
});

function updateLastModified() {
	const now = new Date();
	const stringDate = now.toLocaleString();
	lastModified.textContent = `Last modification: ${stringDate}`;
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
updateVisits();