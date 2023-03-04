const mongoose = require("mongoose");

const employeeAnswers = new mongoose.Schema({
    mspin: {
        type: String,
        required: true
    },
    registrationNumber: {
        type: String,
        required: true
    },
    roundName: {
        type: String,
        required: true
    },
    empAnswers :{
        type : Array,
        default :{}
    }
},{timestamps :true}
);

const EmployeeAnswer = mongoose.model("EmployeeAnswer", employeeAnswers);

module.exports = EmployeeAnswer;