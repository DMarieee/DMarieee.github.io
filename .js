// Select the menu icon and navbar
const menuIcon = document.getElementById('menu-icon');
const navbar = document.getElementById('navbar');

// Add an event listener to the menu icon to toggle the navbar's visibility
menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('active'); // Toggle the 'active' class on the navbar
});
