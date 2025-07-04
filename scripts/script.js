// script.js

// Mobile menu toggle
const toggleBtn = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

toggleBtn.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Optional: ScrollSpy / smooth scroll logic can go here later
document.querySelector('.btn.green').addEventListener('click', function (e) {
  e.preventDefault();
  document.getElementById('waitlistModal').style.display = 'block';
});

function closeModal() {
  document.getElementById('waitlistModal').style.display = 'none';
}

document.getElementById('waitlistForm').addEventListener('submit', function (e) {
  e.preventDefault();
  // You can send the data to your backend or log for now
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const mobile = document.getElementById('mobile').value;
  console.log('Waitlist Submission:', { name, email, mobile });

  alert("Thanks for joining! We'll be in touch.");
  closeModal();
});

