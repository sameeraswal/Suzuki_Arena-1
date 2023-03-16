const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
    mspin: {
        type: String
    },
    name: {
        type: String
    },
    dealership: {
        type: String
    },
    registrationNumber: {
        type: String,
        required: true
    },
    region: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    }
});

const Employee = mongoose.model("Employee", employeeSchema);

module.exports = Employee;