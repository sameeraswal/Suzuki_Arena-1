const express = require("express");
const router = express.Router();
//const jwt = require("jsonwebtoken")
const employeeController = require("../controller/employeeController");
const employeeReportController = require("../controller/employeeReportController");
const roundController = require("../controller/roundController");



//router.post("/api/v1/addround", roundController.addRound) 
router.get("/api/v1/mspin/:mspin", employeeController.getEmployeeDetails);
router.post("/api/v1/employee/register", employeeController.registerEmployee);
router.post("/api/v1/login", employeeController.checkLogin);
router.post("/api/v1/roundlists", roundController.getRoundLists);
router.get("/api/v1/roundname/:roundName", roundController.getRoundDetails);
router.post("/api/v1/round/submitanswer", employeeReportController.submitAnswerOfQuestion);
//submit round 2 Card Answer
router.post("/api/v1/round/submitcardanswer", employeeReportController.submitAnswerOfCardQuestion);

router.post("/api/v1/quiz/employee/currentscore", employeeReportController.calculateCurrentScoreOfEmp);

router.post("/api/v1/round/roundscore", employeeReportController.calculateScoreOfOneRound); //this should be get or post?



router.get("/api/v1/round/roundscore/mspin/:mspin/roundname/:roundname", employeeReportController.getRoundScore); //this should be get or post?
router.get("/api/v1/quiz/finalscore/mspin/:mspin", employeeReportController.getFinalScoreOfAllRounds);

router.get("/api/v1/round/roundname/:roundName/wheeltitles", roundController.getWheelTitles);
router.get("/api/v1/round/roundname/:roundName/wheel/:wheelQuestionId/cardstitles", roundController.getCardsTitles);

router.get("/api/v1/quiz/finalscore/leaderboard", employeeReportController.getScoreOfEveryone);


//router.get("/api/v1/quiz/mspin/:mspin/finalscore", employeeReportController.getFinalScore); //this should be get or post?
//router.post("/api/v1/round/saveEachAnswer", employeeReportController.saveEachAnswer)
//router.post("/api/v2/round/submitOneAnswer", employeeReportController.submitOneAnswer)


module.exports = router;