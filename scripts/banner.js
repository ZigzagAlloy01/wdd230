const banner = document.getElementById('banner');
const closeButton = document.getElementById('closeButton');

function showBanner() {
  const today = new Date();
  const day = today.getDay();

  if (day === 1 || day === 2 || day === 3) {
    banner.classList.add('show');
  } else {
    banner.classList.remove('show');
  }
}

closeButton.addEventListener('click', () => {
  banner.classList.remove('show');
});

showBanner();
setInterval(showBanner, 3600000);