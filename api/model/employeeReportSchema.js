const mongoose = require("mongoose");

const employeeReportSchema = new mongoose.Schema({
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
    score: {
        type: String,
        required: true,
    },
    total: {
        type: String,
        required: true,
    }
},{timestamps :true}
);

const Report = mongoose.model("Report", employeeReportSchema);

module.exports = Report;