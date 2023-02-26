const express = require("express");
const router = express.Router();
const employeeController = require("../controller/employee")
const roundController = require("../controller/round")

router.get("/api/v1/mspin/:mspin", employeeController.getEmployeeDetails)
router.post("/api/v1/login", employeeController.checkLogin)
router.get("/api/v1/roundlists", roundController.getRoundLists)
router.get("/api/v1/roundname/:roundName", roundController.getRoundDetails)

module.exports = router;