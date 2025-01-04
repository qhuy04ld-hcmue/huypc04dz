// script.js

// Function to toggle between dark and light theme
function toggleTheme() {
    const body = document.body;
    const currentTheme = body.classList.contains('dark-mode') ? 'dark' : 'light';
    body.classList.toggle('dark-mode', currentTheme === 'light');
    document.querySelector('.theme-toggle').textContent = currentTheme === 'light' ? '🌞' : '🌙';
  }
  
  // Handle form submission
  function submitForm(event) {
    event.preventDefault(); // Prevent actual form submission
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    // Display response (In real applications, you would send this data to a server)
    const responseDiv = document.getElementById('form-response');
    responseDiv.innerHTML = `
      <p>Thank you, ${name}! We have received your message:</p>
      <blockquote>${message}</blockquote>
      <p>We'll get back to you at ${email} soon.</p>
    `;
  
    // Clear the form
    document.getElementById('contact-form').reset();
  }
  