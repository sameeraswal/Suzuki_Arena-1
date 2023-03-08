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
    console.log(employeeDetails, " Employee detals", { mspin: mspin });
    if (employeeDetails) {
      status = true;
      const name = employeeDetails.name;
      const dealership = employeeDetails.dealership;
      return res.status(201).json({
        status: status,
        data: { name, dealership },
      });
    } else {
      return res.status(404).json({
        status: status,
        message: "data not found",
      });
    }
  } catch (error) {
    res.json({
      status: status,
      error: error,
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
        message: "employee does not exists with this given employee details",
      });
    } else {
      const employeeDetails = await Employee.find({
        mspin: mspin,
        name: name,
        dealership: dealership,
        registrationNumber: registrationNumber,
      });
      console.log(employeeDetails);
      if (employeeDetails.length) {
        return res.json({
          status: status,
          message:
            "employee is already registered with this mspin and registration number",
        });
        // status = true;
        // const name = employeeDetails.name;
        // const dealership = employeeDetails.dealership;
        // res.status(201).json({
        //     status: status,
        //     data: { name, dealership }
        // })
      } else {
        const regNumberSaved = await Employee.updateOne(
          { mspin: mspin, name: name, dealership: dealership },
          { $set: { registrationNumber: registrationNumber } }
        );
        //const regNumber = new Employee({ registrationNumber: registrationNumber });
        // const regNumberSaved = await regNumber.save();
        console.log(regNumberSaved);
        if (regNumberSaved) {
          status = true;
          return res.status(201).json({
            status: status,
            message: "employee registered succesfully",
          });
        } else {
          return res.status(400).json({
            status: status,
            message: "error during saving registration number",
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
    const { mspin, regNumber } = req.body;
    if (!mspin || !regNumber) {
      return res.status(400).json({
        status: status,
        error: "please fill all the fields",
      });
    }
    const emloyeeLogin = await Employee.findOne({
      mspin: mspin,
      registrationNumber: regNumber,
    });
    console.log(emloyeeLogin);
    if (emloyeeLogin) {
      status = true;
      //const token = jwt.sign({ mspin, regNumber }, secretKey);
      res.status(201).json({
        status: status,
        message: "Employee logged in succesfully",
      });
    } else {
      res.status(404).json({
        status: status,
        message: "invalid credientials",
      });
    }
  } catch (error) {
    res.status(404).json({
      status: status,
      error: error,
    });
  }
};
