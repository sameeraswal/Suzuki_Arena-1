require("../db/connection");
const Employee = require("../model/employeeSchema");
const express = require("express");
const router = express.Router();

router.get("/", (req,res)=>{
    res.send("suzuki app from router");
});

//check login
// router.post("/api/login", (req,res) => {
//     const mspin = req.body.mspin;
//     const regNumber = req.body.regNumber;

//     //console.log(req.body)
//     res.json({mspin,regNumber})
//     //console.log("he")

// });
router.post("/api/login", async(req,res)=>{
    console.log(req.body);
    let status = false;
    //const {email, password} = req.body;
    const {mspin, regNumber} = req.body;
    if(!mspin || !regNumber){
        return res.status(400).json({
            status:status,
            error: "please fill all the fields"})
    }
    try{
        const userLogin = await Employee.findOne({ mspin:mspin , registrationNumber:regNumber});
        console.log(userLogin)

        if(userLogin){
            status = true;
            res.status(201).json({
                status:status,
                message : "Employee log in succesfully"})
                // let token = await userLogin.generateAuthToken();
                // console.log(token);
                //res.status(201).json({message : "user log in succesfully"})
            

        }else{
            res.status(400).json({
                status:status,
                message : "invalid crediential"})

        }
        //res.status().json({message : "user log in succesfully"});
        
        // console.log("pasworddd"+password)
        // console.log(userLogin.password)
    }catch(error){
        res.json({
            status:status,
            error : error});
    }
});

router.get("api/round/:roundNumber", async(req,res) => {
    const roundNumber = req.params.roundNumber;
    try{
       const round = await Employee.find({roundNumber : roundNumber})

    }catch(e){
        res.json({error : error})

    }


})

module.exports = router;