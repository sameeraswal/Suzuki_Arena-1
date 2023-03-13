const express = require("express");
const router = express.Router();
const employeeController = require("../controller/employeeController");
const employeeReportController = require("../controller/employeeReportController");
const roundController = require("../controller/roundController");

router.get("/api/v1/mspin/:mspin", employeeController.getEmployeeDetails);
router.post("/api/v1/employee/register", employeeController.registerEmployee);
router.post("/api/v1/login", employeeController.checkLogin);
router.post("/api/v1/roundlists", roundController.getRoundLists);
router.get("/api/v1/quiz/roundname/:roundName", roundController.getRoundDetails);
router.post("/api/v1/round/submitanswer", employeeReportController.submitAnswerOfQuestion);
router.post("/api/v1/round/submitScoreForRound", employeeReportController.submitScoreForRound);
//submit round 2 Card Answer
//router.post("/api/v1/round/submitcardanswer", employeeReportController.submitAnswersOfCardQuestion);
router.post("/api/v1/round/submitcardanswer", employeeReportController.submitAnswerOfCardQuestion);

router.post("/api/v1/quiz/employee/currentscore", employeeReportController.calculateCurrentScoreOfEmpController);
router.post("/api/v1/round/roundscore", employeeReportController.calculateScoreOfOneRoundController); //this should be get or post?

//router.post("/api/v1/finishround", roundController.finishRound); 

router.post("/api/v1/wheelRoundQuestions", roundController.wheelRoundQuestions);

router.get("/api/v1/round/roundscore/mspin/:mspin/roundname/:roundname", employeeReportController.getRoundScore); //this should be get or post?
router.get("/api/v1/quiz/finalscore/mspin/:mspin", employeeReportController.getFinalScoreOfAllRounds);

router.get("/api/v1/quiz/finalscore/leaderboard", employeeReportController.getScoreOfEveryone);

//router.get("/api/v1/quiz/scoreboard", employeeReportController.getScoreBoardRoundLevel); //old
//router.get("/api/v1/quiz/scoreboard/category/:targetCategory", employeeReportController.getScoreBoardRoundLevel);
router.post("/api/v1/quiz/scoreboard/category", employeeReportController.getScoreBoardRoundLevel);
router.post("/api/v1/finishround", roundController.finishRound);


module.exports = router;