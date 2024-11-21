// Function to display all feedback
function displayFeedback(feedbackList) {
    const feedbackListContainer = document.getElementById("feedbackList");
    feedbackListContainer.innerHTML = ""; // Clear previous feedback
    
    if (feedbackList.length === 0) {
        document.getElementById("noFeedbackMessage").style.display = "block";
    } else {
        document.getElementById("noFeedbackMessage").style.display = "none";
        feedbackList.forEach(feedback => {
            const feedbackItem = document.createElement("div");
            feedbackItem.classList.add("feedback-item");
            
            feedbackItem.innerHTML = `
                <p><strong>Name:</strong> ${feedback.name}</p>
                <p><strong>Email:</strong> ${feedback.email}</p>
                <p><strong>Senior Advice:</strong> ${feedback.advice}</p>
                <p><strong>Biggest Challenge:</strong> ${feedback.challenges}</p>
                <p><strong>Recommendations:</strong> ${feedback.recommendations}</p>
            `;
            
            feedbackListContainer.appendChild(feedbackItem);
        });
    }
}

// Function to search feedback based on input
function searchFeedback() {
    const query = document.getElementById("searchInput").value.toLowerCase();
    const feedbackList = JSON.parse(localStorage.getItem('feedbackList')) || [];

    const filteredFeedback = feedbackList.filter(feedback => {
        return (
            feedback.name.toLowerCase().includes(query) ||
            feedback.email.toLowerCase().includes(query) ||
            feedback.advice.toLowerCase().includes(query) ||
            feedback.challenges.toLowerCase().includes(query) ||
            feedback.recommendations.toLowerCase().includes(query)
        );
    });

    displayFeedback(filteredFeedback);
}

// Load feedback from localStorage when the page loads
window.onload = function() {
    const feedbackList = JSON.parse(localStorage.getItem('feedbackList')) || [];
    displayFeedback(feedbackList);
};
