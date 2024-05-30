const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');
const lastModified = document.querySelector('#last-modified');

function updateLastModified() {
	const now = new Date();
	const stringDate = now.toLocaleString();
	lastModified.textContent = `Last modification: ${stringDate}`;
}

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});

updateLastModified();