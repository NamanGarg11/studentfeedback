// Function to show an alert when the "Explore Now" button is clicked
function showAlert() {
    alert('Get ready to explore the world with Yatraverse!');
}

// Toggle the navigation menu on mobile
document.getElementById('hamburger').addEventListener('click', () => {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
});
