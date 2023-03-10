const mongoose = require("mongoose");

const wheelRounds = new mongoose.Schema({
    roundName: {
        type: String,
        required: true
    },
    roundOrder:{
        type:Number
    },
    isRoundLocked: {
        type: Boolean
    },
    isDisabled: {
        type: Boolean
    },
    questions: {},
    correctAnswers: {}
});

const WHEEL_ROUND = mongoose.model("WHEEL_ROUND", wheelRounds);



module.exports = WHEEL_ROUND;