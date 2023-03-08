const mongoose = require("mongoose");

const roundunlockedschema = new mongoose.Schema({
    mspin: {
        type: String,
        required: true
    },
    registrationNumber: {
        type: String
        
    },
    name: {
        type: String,
        required: true
    },
    disabled: {type:[String]},

    unlocked:{
        type:String
    }
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

const Roundunlocked = mongoose.model("Roundunlocked", roundunlockedschema);



module.exports = Roundunlocked;