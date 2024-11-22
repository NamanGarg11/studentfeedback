document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const agree = document.getElementById('agree').checked;

    let message = '';

    if (!name || !email || !password || !confirmPassword || !agree) {
        message = 'Please fill in all fields and agree to the terms.';
        document.getElementById('feedbackMessage').textContent = message;
        return;
    }

    if (password !== confirmPassword) {
        message = 'Passwords do not match.';
        document.getElementById('feedbackMessage').textContent = message;
        return;
    }

    message = 'Registration successful!';
    document.getElementById('feedbackMessage').style.color = '#28a745';
    document.getElementById('feedbackMessage').textContent = message;

    // Simulate form submission
    setTimeout(function() {
        alert('Form submitted!');
        document.getElementById('registrationForm').reset();
        document.getElementById('feedbackMessage').textContent = '';
    }, 1500);
});
