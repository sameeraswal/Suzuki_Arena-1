const mongoose = require("mongoose");

const wheelRoundsSchema = new mongoose.Schema({
    roundName: {
        type: String,
        required: true
    },
    roundOrder: {
        type: Number
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

const Wheelround = mongoose.model("Wheelround", wheelRoundsSchema);
module.exports = Wheelround;