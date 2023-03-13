const mongoose = require("mongoose");

const roundsSchema = new mongoose.Schema({
    roundName: {
        type: String,
        required: true
    },
    roundOrder:{
        type:Number
    },
    route : {
        type:String
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

const ROUND = mongoose.model("ROUND", roundsSchema);
module.exports = ROUND;