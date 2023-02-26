const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
    mspin: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    dealership: {
        type: String,
        required: true
    },
    registrationNumber: {
        type: String,
        required: true,
    }
});

const Employee = mongoose.model("EMPLOYEE", employeeSchema);

module.exports = Employee;