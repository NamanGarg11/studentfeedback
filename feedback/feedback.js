// Handle form submission
document.getElementById("feedbackForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    
    // Collect form data
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const advice = document.getElementById("advice").value;
    const challenges = document.getElementById("challenges").value;
    const recommendations = document.getElementById("recommendations").value;
    const agree = document.getElementById('agree').checked;
    
    // Create a feedback object
    const feedback = {
        name,
        email,
        advice,
        challenges,
        recommendations
    };
    
    // Get existing feedback list from localStorage, or initialize it as an empty array
    let feedbackList = JSON.parse(localStorage.getItem('feedbackList')) || [];
    
    // Add new feedback to the list
    feedbackList.push(feedback);
    
    // Save updated feedback list to localStorage
    localStorage.setItem('feedbackList', JSON.stringify(feedbackList));
    
    // Show confirmation message
    document.getElementById("feedbackMessage").textContent = "Your feedback has been submitted successfully!";
    
    // Clear form fields
    document.getElementById("feedbackForm").reset();
});
