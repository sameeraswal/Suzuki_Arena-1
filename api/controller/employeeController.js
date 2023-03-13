require("../db/connection");
const Employee = require("../model/employeeSchema");

exports.getEmployeeDetails = async (req, res) => {
    let status = false;
    const mspin = req.params.mspin;
    try {
        const employeeDetails = await Employee.findOne({ mspin: mspin });
        console.log(employeeDetails, " Employee detals", { mspin: mspin });
        if (employeeDetails) {
            status = true;
            const name = employeeDetails.name;
            const dealership = employeeDetails.dealership;
            return res.status(201).json({
                status: status,
                data: { name, dealership }
            });
        } else {
            return res.status(404).json({
                status: status,
                message: "data not found"
            });
        }
    } catch (error) {
        res.json({
            status: status,
            error: error
        });
    }
};

exports.registerEmployee = async (req, res) => {
    let status = false;

    try {
        const mspin = req.body.mspin;
        const name = req.body.name;
        const dealership = req.body.dealership;
        const registrationNumber = req.body.registrationNumber;

        const checkemployeeExists = await Employee.find({
            mspin: mspin,
            name: name,
            dealership: dealership,
        });
        if (!checkemployeeExists.length) {
            return res.status(404).json({
                status: status,
                message: "employee does not exists with this given employee details"
            });
        } else {
            const employeeDetails = await Employee.find({
                mspin: mspin,
                name: name,
                dealership: dealership,
                registrationNumber: registrationNumber
            });
            console.log(employeeDetails);
            if (employeeDetails.length) {
                return res.json({
                    status: status,
                    message:
                        "employee is already registered with this mspin and registration number",
                });
            } else {
                const regNumberSaved = await Employee.updateOne(
                    { mspin: mspin, name: name, dealership: dealership },
                    { $set: { registrationNumber: registrationNumber } }
                );
                console.log(regNumberSaved);
                if (regNumberSaved) {
                    status = true;
                    return res.status(201).json({
                        status: status,
                        message: "employee registered succesfully"
                    });
                } else {
                    return res.status(400).json({
                        status: status,
                        message: "error during saving registration number"
                    });
                }
            }
        }
    } catch (error) {
        res.status(400).json({
            status: status,
            error: error,
        });
    }
};

exports.checkLogin = async (req, res) => {
    let status = false;
    try {
        const mspin = req.body.mspin;
        const regNumber = req.body.regNumber;
        if (!mspin || !regNumber) {
            return res.status(400).json({
                status: status,
                error: "Please fill all the fields"
            });
        }
        const emloyeeLogin = await Employee.findOne({ mspin: mspin, registrationNumber: regNumber});
        if (emloyeeLogin) {
            const categoryType = emloyeeLogin.category;
            status = true;
            return res.status(201).json({
                status: status,
                category : categoryType,
                message: "Employee logged in succesfully"
            });
        } else {
            return res.status(404).json({
                status: status,
                message: "invalid credientials"
            });
        }
    } catch (error) {
        return res.status(404).json({
            status: status,
            error: error
        });
    }
};
