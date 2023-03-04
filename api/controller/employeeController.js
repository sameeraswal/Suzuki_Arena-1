require("../db/connection");
const Employee = require("../model/employeeSchema");
//const jwt = require("jsonwebtoken");
//const secretKey = "secretKeycccccccccccc"


// exports.verifyToken = async(req,res,next)=>{
//     const token = req.headers.Authorization;
//     const decoded = jwt.verify(token,secretKey);
//     req.decoded = decoded;
//     next();


// }
exports.getEmployeeDetails = async (req, res) => {
    let status = false;
    const mspin = req.params.mspin;
    try {
        const employeeDetails = await Employee.findOne({ mspin: mspin });
        if (employeeDetails) {
            status = true;
            const name = employeeDetails.name;
            const dealership = employeeDetails.dealership;
            res.status(201).json({
                status: status,
                data: { name, dealership }
            })
        } else {
            res.status(400).json({
                status: status,
                message: "data not found"
            })
        }
    } catch (error) {
        res.json({
            status: status,
            error: error
        })
    }
}

exports.checkLogin = async (req, res) => {
    let status = false;
    const { mspin, regNumber } = req.body;
    if (!mspin || !regNumber) {
        return res.status(400).json({
            status: status,
            error: "please fill all the fields"
        })
    }
    try {
        const emloyeeLogin = await Employee.findOne({ mspin: mspin, registrationNumber: regNumber });
        if (emloyeeLogin) {
            status = true;
            //const token = jwt.sign({ mspin, regNumber }, secretKey);
            res.status(201).json({
                status: status,
                message: "Employee logged in succesfully"
            })
        } else {
            res.status(400).json({
                status: status,
                message: "invalid credientials"
            })
        }
    } catch (error) {
        res.json({
            status: status,
            error: error
        });
    }
}