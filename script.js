document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Thank you for contacting us!');
        form.reset();
    });
});
document.getElementById("about-link").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent default link behavior
    window.location.href = "about.html"; // Replace "about.html" with the actual path to your About page
  });