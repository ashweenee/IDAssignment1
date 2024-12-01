document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contact-form');

  form.addEventListener('submit', (event) => {
      event.preventDefault();

      const nameInput = document.getElementById('name');
      const emailInput = document.getElementById('email');
      const subjectInput = document.getElementById('subject');
      const messageInput = document.getElementById('message');

      // Perform form validation
      if (!nameInput.value || !emailInput.value || !subjectInput.value || !messageInput.value) {
          alert('All fields are required!');
          return;
      }

      // Logging form data for debugging
      console.log('Name:', nameInput.value);
      console.log('Email:', emailInput.value);
      console.log('Subject:', subjectInput.value);
      console.log('Message:', messageInput.value);

      // Reset the form
      form.reset();

      // Optionally, add a success message or any additional logic after submission
      alert('Your message has been sent!');
  });
});
