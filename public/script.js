// script.js
const form = document.getElementById('contact-form');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const formData = new FormData(form);
  const response = await fetch('/api/contact', {
    method: 'POST',
    body: formData,
  });

  const result = await response.json();

  if (response.ok) {
    alert('Form submitted successfully!');
    form.reset();
  } else {
    alert('Error submitting form: ' + result.message);
  }
});