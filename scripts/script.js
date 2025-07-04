// script.js

// Mobile menu toggle
const toggleBtn = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

toggleBtn.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Optional: ScrollSpy / smooth scroll logic can go here later
