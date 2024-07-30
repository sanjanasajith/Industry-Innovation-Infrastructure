document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Thank you for contacting us!');
        form.reset();
    });
});
var navbar = document.getElementById('top-navbar');
var navbarToggler = document.querySelector('.navbar-toggler');
navbarToggler.addEventListener('click', function () {
  navbar.classList.toggle('show');
});