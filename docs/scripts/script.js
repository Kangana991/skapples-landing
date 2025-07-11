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

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const mobile = document.getElementById('mobile').value;

  fetch('http://localhost:8000/submit', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({ name, email, mobile })
  })
  .then(response => response.json())
  .then(data => {
    alert("Thanks for joining! We'll be in touch.");
    closeModal();
  })
  .catch(error => {
    console.error('Error:', error);
    alert("Something went wrong. Please try again.");
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById('waitlistForm');
  form.addEventListener('submit', async function (e) {
    e.preventDefault();

    const formData = new FormData(form);
    try {
      const response = await fetch('http://localhost:8000/submit', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();
      alert(result.message || 'Form submitted successfully!');
      form.reset(); // clear the form
      closeModal(); // close the modal if you want
    } catch (error) {
      alert('Something went wrong. Please try again later.');
      console.error(error);
    }
  });
});
function openModal() {
  document.getElementById('waitlistModal').style.display = 'block';
}

function closeModal() {
  document.getElementById('waitlistModal').style.display = 'none';
}


