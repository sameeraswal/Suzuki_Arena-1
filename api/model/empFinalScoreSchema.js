const mongoose = require("mongoose");

const empFinalScoreSchema = new mongoose.Schema({
    mspin: {
        type: String,
        required: true
    },
    registrationNumber: {
        type: String,
        required: true
    },
    name:{
        type:String
    },
    roundScore:[{
        type:Array,
        default:{}
    }],
    finalScore :{
        type : Number
    }
},{timestamps :true}
);

const EmpFinalScore = mongoose.model("EmpFinalScore", empFinalScoreSchema);

module.exports = EmpFinalScore;