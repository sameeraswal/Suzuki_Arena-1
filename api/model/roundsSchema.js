const mongoose = require("mongoose");

const roundsSchema = new mongoose.Schema({
    roundName: {
        type: String,
        required: true
    },
    questions: [{
        id: {
            type: Number,
            required: true
        },
        video: {
            type: String,
            required: true
        },
        question: {
            type: String,
            required: true
        },
        choices: [{
            cId: {
                type: Number,
                required: true
            },
            name: {
                type: String,
                required: true
            },
            image: {
                type: String,
                required: true
            }
        }],
        type: {
            type: String,
            required: true
        },
        correctAnswer: {
            type: Number,
            required: true
        }
    }]
});

const ROUND = mongoose.model("ROUND", roundsSchema);

module.exports = ROUND;