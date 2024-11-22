const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    advice: {
        type: String,
        required: true,
    },
    challenges: {
        type: String,
        required: true,
    },
    recommendations: {
        type: String,
        required: true,
    },
});

const Feedback = mongoose.model('Feedback', feedbackSchema);

module.exports = Feedback;
