/*******************************************************
 * 1. Countdown Timer
 *******************************************************/
const countdownElement = document.getElementById('countdown');
const weddingDate = new Date('2025-07-17T15:30:00');

function updateCountdown() {
  const now = new Date();
  const timeLeft = weddingDate - now;

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor(
    (timeLeft % (1000 * 60 * 60)) / (1000 * 60)
  );
  const seconds = Math.floor(
    (timeLeft % (1000 * 60)) / 1000
  );

  countdownElement.textContent = 
    `We have ${days} days ${hours} hours ${minutes} minutes and ${seconds} seconds until we're married!`;
}

setInterval(updateCountdown, 1000);

/*******************************************************
 * 2. Hamburger Menu Toggle
 *******************************************************/
function toggleMenu() {
  const nav = document.querySelector('.hamburger-nav');
  nav.classList.toggle('active');
}

// Close menu when a link is clicked
document.querySelectorAll('.hamburger-nav a').forEach(link => {
  link.addEventListener('click', () => {
    document.querySelector('.hamburger-nav').classList.remove('active');
  });
});

// Close menu when clicking outside it
document.addEventListener('click', (e) => {
  const nav = document.querySelector('.hamburger-nav');
  const icon = document.querySelector('.hamburger-icon');

  // Only close if menu is active and click is outside nav & icon
  if (nav.classList.contains('active') &&
      !nav.contains(e.target) &&
      !icon.contains(e.target)) {
    nav.classList.remove('active');
  }
});

/*******************************************************
 * 3. Tab System
 *******************************************************/
function showTab(tabId) {
  // Array of all tab IDs
  const allTabs = ['hotel', 'placesToEat', 'thingsToDo'];

  // Hide each tab by adding the 'hidden' class
  allTabs.forEach(id => {
    document.getElementById(id).classList.add('hidden');
  });

  // Show the requested tab by removing 'hidden'
  document.getElementById(tabId).classList.remove('hidden');
}
