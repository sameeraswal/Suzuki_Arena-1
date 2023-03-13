const mongoose = require("mongoose");

const empRoundScoreSchema = new mongoose.Schema({
    mspin: {
        type: String,
        required: true
    },
    name:{
        type:String
    },
    registrationNumber: {
        type: String,
        required: true
    },
    category :{
        type:String
    },
    roundName: {
        type: String,
        required: true
    },
    totalScore :{
        type:Number
    }
},{timestamps :true}
);

const EmpRoundScore = mongoose.model("EmpRoundScore", empRoundScoreSchema);

module.exports = EmpRoundScore;