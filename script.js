document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent actual submission
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name && email && message) {
        alert(`Thanks for contacting me, ${name}!`);
        // Here you can also add code to send form data via an API or backend service
        this.reset(); // Reset form after submission
    } else {
        alert("Please fill in all fields.");
    }
});
