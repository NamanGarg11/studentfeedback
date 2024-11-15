document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const advice = document.getElementById('advice').value;
    const challenges = document.getElementById('challenges').value;
    const recommendations = document.getElementById('recommendations').value;
    const agree = document.getElementById('agree').checked;

    let message = '';

    if (!name || !email || !advice || !challenges || !recommendations || !agree) {
        message = 'Please fill in all fields and agree to the terms.';
        document.getElementById('feedbackMessage').textContent = message;
        return;
    }

    message = 'Thank you for your feedback! Your input will help the juniors.';
    document.getElementById('feedbackMessage').style.color = '#28a745';
    document.getElementById('feedbackMessage').textContent = message;

    // Simulate form submission (this can be replaced with an actual backend API call)
    setTimeout(function() {
        alert('Feedback submitted successfully!');
        document.getElementById('feedbackForm').reset();
        document.getElementById('feedbackMessage').textContent = '';
    }, 1500);
});
