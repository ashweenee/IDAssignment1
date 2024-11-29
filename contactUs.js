const form = document.getElementById('contact-form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');

  // Perform form validation and submission logic here
  console.log('Name:', nameInput.value);
  console.log('Email:', emailInput.value);
  console.log('Message:', messageInput.value);

  // Reset the form
  form.reset();
});