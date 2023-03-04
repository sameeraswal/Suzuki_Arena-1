const express = require("express");
const router = express.Router();
//const jwt = require("jsonwebtoken")
const employeeController = require("../controller/employeeController")
const employeeReportController = require("../controller/employeeReportController")
const roundController = require("../controller/roundController")


//router.post("/api/v1/addround", roundController.addRound)
router.get("/api/v1/mspin/:mspin", employeeController.getEmployeeDetails)
router.post("/api/v1/login", employeeController.checkLogin)
router.get("/api/v1/roundlists", roundController.getRoundLists)
router.get("/api/v1/roundname/:roundName", roundController.getRoundDetails)
router.post("/api/v1/round/submitAnswer", employeeReportController.submitAnswer)
//router.post("/api/v1/round/saveEachAnswer", employeeReportController.saveEachAnswer)
router.post("/api/v2/round/submitOneAnswer", employeeReportController.submitOneAnswer)


module.exports = router;