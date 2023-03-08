const mongoose = require("mongoose");

const roundsSchema = new mongoose.Schema({
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
    questions: [{
        default :{}
    }],
    correctAnswers: {}
});

// const roundsSchema = new mongoose.Schema({
//     roundName: {
//         type: String,
//         required: true
//     },
//     questions: [{
//         questionId: {
//             type: Number,
//             required: true
//         },
//         video: {
//             type: String,
//             required: true
//         },
//         question: {
//             type: String,
//             required: true
//         },
//         choices: [{
//             cId: {
//                 type: Number,
//                 required: true
//             },
//             name: {
//                 type: String,
//                 required: true
//             },
//             image: {
//                 type: String,
//                 required: true
//             }
//         }],
//         type: {
//             type: String,
//             required: true
//         },
//         correctAnswer: {
//             type: Number,
//             required: true
//         }
//     }],
//     correctAnswers :{}
// });

const ROUND = mongoose.model("ROUND", roundsSchema);



module.exports = ROUND;