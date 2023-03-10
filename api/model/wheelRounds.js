const mongoose = require("mongoose");

const wheelRounds = new mongoose.Schema({
    roundName: {
        type: String,
        required: true
    },
    roundOrder:{
        type:Number
    },
    questions: {},
    correctAnswers: {}
});

const WHEEL_ROUND = mongoose.model("wheelrounds", wheelRounds);



module.exports = WHEEL_ROUND;