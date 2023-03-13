require("../db/connection");
const Round = require("../model/roundsSchema");
const EmployeeAnswer = require("../model/employeeAnswers");
const EmpRoundScore = require("../model/empRoundScoreSchema");
const EmpFinalScore = require("../model/empFinalScoreSchema");
const Employee = require("../model/employeeSchema");
const WheelRounds = require("../model/wheelRoundsSchema");
const wheelroundlocks = require("../model/employeeWheelUnlockedRound");

const matchStrings = (a,b)=>{
    if(String(a).toLowerCase()===String(b).toLowerCase()){
        return true;
    }else{
        return false;
    }
}

// submit answer of each round
exports.submitAnswerOfQuestion = async (req, res) => {
    let status = false;
    try {
        const roundName = req.body.roundName;
        const mspin = req.body.mspin;
        let questionId = req.body.questionId;
        let cId = req.body.cId;
        
        const checkemployeeExists = await Employee.findOne({ mspin: mspin });
        if (!checkemployeeExists) {
            return res.status(404).json({
                status: status,
                message: "employee does not exists with this given employee details"
            });
        } else {
            let name = checkemployeeExists.name;
            let registrationNumber = checkemployeeExists.registrationNumber;
            let category = checkemployeeExists.category;
            
            const round = await Round.findOne({ roundName: roundName }, { correctAnswers: 1, _id: 0 });
            if (round) {
                status = true;
                
                let correctAnswers = round.correctAnswers;
                let correctQuestionsAnswers = {}

                correctAnswers.forEach((obj) => {
                    correctQuestionsAnswers[obj.questionId] = obj.cId;
                });
                
                const questions = Object.keys(correctQuestionsAnswers);
                let score = 0;
                
                const checkAnswer = async () => {
                    let employeeAnswer = {};
                    if (!!cId && questions[questionId - 1] == questionId && matchStrings(correctQuestionsAnswers[questionId],cId)) {

                        employeeAnswer["questionId"] = questionId;
                        employeeAnswer["cId"] = cId;
                        employeeAnswer["isCorrect"] = true;
                        score = score + 10;
                        employeeAnswer["score"] = score;
                    } else if (!!cId && questions[questionId - 1] == questionId && matchStrings(correctQuestionsAnswers[questionId],cId)===false) {
                        employeeAnswer["questionId"] = questionId;
                        employeeAnswer["cId"] = cId;
                        employeeAnswer["isCorrect"] = false;
                        employeeAnswer["score"] = score;

                    } else if (!cId && questions[questionId - 1] == questionId && matchStrings(correctQuestionsAnswers[questionId],cId)===false) {
                        employeeAnswer["questionId"] = questionId;
                        employeeAnswer["cId"] = "Question Not attempted";
                        employeeAnswer["isCorrect"] = false;
                        employeeAnswer["score"] = score;

                    } else if (!!cId && questions[questionId - 1] !== questionId && matchStrings(correctQuestionsAnswers[questionId],cId)===false) {
                       return false;
                        
                    }
                    return employeeAnswer;
                }

                const employeeAnsExists = await EmployeeAnswer.find({ mspin: mspin, roundName: roundName, "empAnswers.questionId": questionId });
                if (employeeAnsExists.length) {
                    let checked = await checkAnswer();
                    
                    if(checked === false){
                        return res.status(404).json({
                            message: "data not found"
                        })
                    }

                    const updateQuery = async () => {
                        try {
                            await EmployeeAnswer.updateOne({ mspin: mspin, roundName: roundName, "empAnswers.questionId": questionId }, { "$set": { empAnswers: checked } });
                            res.status(201).json({
                                status: status,
                                message: "updated answer is submitted",
                                Employee_result: {
                                    employeeMspin: mspin,
                                    employeeRegistrationNumber: registrationNumber,
                                    category : category,
                                    roundName,
                                    name,
                                    employeeReport: checked,
                                    correctQuestionsAnswers
                                }
                            });
                            await calculateScoreOfOneRoundHelper(mspin, roundName);
                            await calculateCurrentScoreOfEmpHelper(mspin);
                            return;

                        } catch (error) {
                            res.status(400).json({
                                message: error.message
                            })
                        }
                    }
                    updateQuery();
                } else {
                    
                    let checked = await checkAnswer();
                    const roundReport = new EmployeeAnswer({ mspin, registrationNumber,category:category, name, roundName, empAnswers: checked });
                    const ansSubmitted = await roundReport.save();
                    if (ansSubmitted) {
                        res.status(201).json({
                            status: "success",
                            message: "answer is submitted",
                            Employee_result: {
                                employeeMspin: mspin,
                                employeeRegistrationNumber: registrationNumber,
                                category : category,
                                name,
                                roundName,
                                employeeReport: checked,
                                correctQuestionsAnswers

                            }
                        });
                        await calculateScoreOfOneRoundHelper(mspin, roundName);
                        await calculateCurrentScoreOfEmpHelper(mspin);
                        return ;

                    } else {
                        return res.status(404).json({
                            status: status,
                            message: "error during submition"
                        })
                    }
                }
            } else {
                return res.status(404).json({
                    status: status,
                    message: "data not found 3"
                })
            }

        }
    } catch (error) {
        res.status(404).json({
            message: "data not found 2"
        })
    }
}

//submit wheel round question
exports.submitAnswerOfCardQuestion = async (req, res) => {
    let status = false;
    try {
        //const roundName = req.body.roundName;
        const mspin = req.body.mspin;
        const roundOrder = req.body.roundOrder;
        let questionId = req.body.questionId;
        let cId = req.body.cId;
        
        const checkemployeeExists = await Employee.findOne({ mspin: mspin });
        if (!checkemployeeExists) {
            return res.status(404).json({
                status: status,
                message: "employee does not exists with this given employee details"
            });
        } else {
            let name = checkemployeeExists.name;
            let registrationNumber = checkemployeeExists.registrationNumber;
            let category = checkemployeeExists.category

            const roundNameOfWheel = await WheelRounds.findOne({ roundOrder: roundOrder }).select("roundName");
            if (!roundNameOfWheel) {
                return res.status(404).json({
                    status: status,
                    message: "Data not found"
                });
            } else {
                const roundName = roundNameOfWheel.roundName;
                const round = await WheelRounds.findOne({ roundName: roundName }, { correctAnswers: 1, _id: 0 });
                if (round) {
                    status = true;
                    let correctAnswers = round.correctAnswers;
                    let correctQuestionsAnswers = {};
                    correctAnswers.forEach((obj) => {
                        correctQuestionsAnswers[obj.cardQuestionId] = obj.cId;
                    });
                    
                    const questions = Object.keys(correctQuestionsAnswers);
                    let score = 0;
                    const checkAnswer = async () => {
                        let employeeAnswer = {};
                        if (!!cId && questions[questionId - 1] == questionId && matchStrings(correctQuestionsAnswers[questionId],cId)){

                            employeeAnswer["questionId"] = questionId;
                            employeeAnswer["cId"] = cId;
                            employeeAnswer["isCorrect"] = true;
                            score = score + 10;
                            employeeAnswer["score"] = score;
                        } else if (!!cId && questions[questionId - 1] == questionId && matchStrings(correctQuestionsAnswers[questionId],cId)===false) {
                            employeeAnswer["questionId"] = questionId;
                            employeeAnswer["cId"] = cId;
                            employeeAnswer["isCorrect"] = false;
                            employeeAnswer["score"] = score;

                        } else if (!cId && questions[questionId - 1] == questionId && matchStrings(correctQuestionsAnswers[questionId],cId)===false) {
                            employeeAnswer["questionId"] = questionId;
                            employeeAnswer["cId"] = "Question Not attempted";
                            employeeAnswer["isCorrect"] = false;
                            employeeAnswer["score"] = score;

                        } else if (!!cId && questions[questionId - 1] !== questionId && matchStrings(correctQuestionsAnswers[questionId],cId)===false) {
                            return res.status(404).json({
                                message: "dddata not found"
                            })
                        }
                        
                        return employeeAnswer;
                    }

                    const employeeAnsExists = await EmployeeAnswer.find({ mspin: mspin, roundName: roundName, "empAnswers.questionId": questionId });
                    if (employeeAnsExists.length) {
                        
                        let checked = await checkAnswer();
                       
                        const updateQuery = async () => {
                            try {
                                await EmployeeAnswer.updateOne({ mspin: mspin, roundName: roundName, "empAnswers.questionId": questionId }, { "$set": { empAnswers: checked } });
                                res.status(201).json({
                                    status: status,
                                    message: "updated answer is submitted",
                                    Employee_result: {
                                        employeeMspin: mspin,
                                        employeeRegistrationNumber: registrationNumber,
                                        category : category,
                                        cardQuestionId: questionId,
                                        isLocked: true,
                                        roundName: roundName,
                                        name,
                                        employeeReport: checked,
                                        correctQuestionsAnswers
                                    }
                                });
                                await calculateScoreOfOneRoundHelper(mspin, roundName);
                                await calculateCurrentScoreOfEmpHelper(mspin);
                                return;

                            } catch (error) {
                                res.status(400).json({
                                    message: error.message
                                })
                            }
                        }
                        updateQuery();
                    } else {
                        let checked = await checkAnswer();
                        const roundReport = new EmployeeAnswer({ mspin, registrationNumber,category : category, name, roundName: roundName, empAnswers: checked });
                        
                        const ansSubmitted = await roundReport.save();
                        if (ansSubmitted) {
                            //START mark this card as used
                            const roundLockInfo = await wheelroundlocks.findOne({ mspin: mspin, roundOrder: roundOrder });
                            if (roundLockInfo) {
                                roundLockInfo.disabledQuestions[questionId] = 1;
                                const resultoflock = await wheelroundlocks.updateOne({ mspin: mspin, roundOrder: roundOrder }, { $set: { disabledQuestions: roundLockInfo.disabledQuestions } });
                            } else {
                                let roundLockInfo = {};
                                roundLockInfo['mspin'] = mspin;
                                roundLockInfo['roundOrder'] = roundOrder;
                                roundLockInfo['disabledQuestions'] = {};
                                roundLockInfo['disabledQuestions'][questionId] = 1;
                                let roundLockObj = new wheelroundlocks(roundLockInfo)
                                await roundLockObj.save();
                            }
                            //END mark this card as used

                            res.status(201).json({
                                status: "success",
                                message: "answer is submitted",
                                Employee_result: {
                                    employeeMspin: mspin,
                                    cardQuestionId: questionId,
                                    isLocked: true,
                                    employeeRegistrationNumber: registrationNumber,
                                    category : category,
                                    name,
                                    roundName: roundName,
                                    employeeReport: checked,
                                    correctQuestionsAnswers

                                }
                            });
                            await calculateScoreOfOneRoundHelper(mspin, roundName);
                            await calculateCurrentScoreOfEmpHelper(mspin);
                            return;

                        } else {
                            return res.status(404).json({
                                status: status,
                                message: "error during submition"
                            })

                        }
                    }
                } else {
                    return res.status(404).json({
                        status: status,
                        message: "data not found"
                    })
                }
            }
        }
    } catch (error) {
        res.status(404).json({
            message: "data not found",
            error: error.message
        })
    }
}

// submit score for question. api for enter score manually round
exports.submitScoreForRound = async (req, res) => {
    let status = false;
    try {
        const roundName = req.body.roundName;
        const mspin = req.body.mspin;
        let questionId = req.body.questionId || 1;

        let cId = 1;
        let score = parseInt(req.body.score);
        score = +score || 0;
        const checkemployeeExists = await Employee.findOne({ mspin: mspin });
        if (!checkemployeeExists) {
            return res.status(404).json({
                status: status,
                message: "employee does not exists with this given employee details"
            });
        } else {
            let name = checkemployeeExists.name;
            let registrationNumber = checkemployeeExists.registrationNumber;
            let category = checkemployeeExists.category
            
            const round = await Round.findOne({ roundName: roundName }, { correctAnswers: 1, _id: 0 });

            if (round) {
                let correctQuestionsAnswers = {}
                status = true;
                let checked = {};
                checked["questionId"] = questionId;
                checked["cId"] = cId;
                checked["isCorrect"] = true;
                checked["score"] = score;
                
                const employeeAnsExists = await EmployeeAnswer.find({ mspin: mspin, roundName: roundName, "empAnswers.questionId": questionId });
                if (employeeAnsExists.length) {
                    const updateQuery = async () => {
                        try {
                            await EmployeeAnswer.updateOne({ mspin: mspin, roundName: roundName, "empAnswers.questionId": questionId }, { "$set": { empAnswers: checked } });
                            res.status(201).json({
                                status: status,
                                message: "updated answer is submitted",
                                Employee_result: {
                                    employeeMspin: mspin,
                                    employeeRegistrationNumber: registrationNumber,
                                    category : category,
                                    roundName,
                                    name,
                                    employeeReport: checked,
                                    correctQuestionsAnswers
                                }
                            });
                            await calculateScoreOfOneRoundHelper(mspin, roundName);
                            await calculateCurrentScoreOfEmpHelper(mspin);
                            return;

                        } catch (error) {
                            res.status(400).json({
                                message: error.message
                            })
                        }
                    }
                    updateQuery();
                } else {
                    const roundReport = new EmployeeAnswer({ mspin, registrationNumber,category : category, name, roundName, empAnswers: checked });
                    const ansSubmitted = await roundReport.save();
                    if (ansSubmitted) {
                        res.status(201).json({
                            status: "success",
                            message: "answer is submitted",
                            Employee_result: {
                                employeeMspin: mspin,
                                employeeRegistrationNumber: registrationNumber,
                                category : category,
                                name,
                                roundName,
                                employeeReport: checked,
                                correctQuestionsAnswers
                            }
                        });
                        await calculateScoreOfOneRoundHelper(mspin, roundName);
                        await calculateCurrentScoreOfEmpHelper(mspin);
                        return;

                    } else {
                        return res.status(404).json({
                            status: status,
                            message: "error during submition"
                        })

                    }
                }

            } else {
                return res.status(404).json({
                    status: status,
                    message: "data not found"
                })
            }

        }

    } catch (error) {
        res.status(404).json({
            message: error
        })
    }
}

//calculate and save total score of each round
exports.calculateScoreOfOneRoundController = async (req, res) => {
    const mspin = req.body.mspin;
    const roundName = req.body.roundname;
    let response = await calculateScoreOfOneRoundHelper(mspin, roundName);
    if (response['status'] === true) {
        return res.status(201).json({
            status: response['status'],
            data: response['data']
        })
    } else {
        return res.status(404).json({
            status: response['status'],
            message: response['message']
        })
    }
}

const calculateScoreOfOneRoundHelper = async (mspin, roundName) => {
    let response = [];
    response['status'] = false;
    try {
        const roundAnswerDetail = await EmployeeAnswer.find({ mspin: mspin, roundName: roundName });
        if (!roundAnswerDetail.length) {
            response['message'] = "data not found";
            return response;
        } else {
            
            let name = "";
            let regNumber = "";
            let total = 0;
            let category = "";
            roundAnswerDetail.forEach((empObj) => {
                name = empObj.name;
                regNumber = empObj.registrationNumber;
                category = empObj.category
                let checkAns = empObj.empAnswers.isCorrect;
                if (checkAns == true) {
                    let score = empObj.empAnswers.score;
                    total = total + score;
                }
            })
            
            const checkRoundScoreExists = await EmpRoundScore.find({ mspin: mspin, roundName: roundName }).select("totalScore");
            if (checkRoundScoreExists.length) {

                try {
                    await EmpRoundScore.updateOne({ mspin: mspin, roundName: roundName }, { "$set": { totalScore: total } });
                    response['status'] = true;
                    response['data'] = {
                        mspin,
                        name,
                        registrationNumber: regNumber,
                        category : category,
                        roundName,
                        totalScoreOfThisRound: total
                    }
                    return response;
                } catch (error) {
                    response['message'] = error.message;
                    return response;
                }
            } else {
               
                const roundScore = new EmpRoundScore({ mspin: mspin, name: name, registrationNumber: regNumber,category : category, roundName: roundName, totalScore: total });
                const savedRoundScore = await roundScore.save();
                if (savedRoundScore) {
                    let roundReport = {
                        mspin,
                        name,
                        registrationNumber: regNumber,
                        category : category,
                        roundName,
                        totalScoreOfThisRound: total
                    }
                    
                    response['status'] = true;
                    response['data'] = roundReport;
                } else {
                    response['message'] = "Error in query";
                }
            }
        }
    } catch (error) {
        response['message'] = error.message;
    }
    return response;

}

exports.calculateCurrentScoreOfEmpController = async (req, res) => {
    const mspin = req.body.mspin;
    
    let response = await calculateCurrentScoreOfEmpHelper(mspin);
    
    if (response['status'] === true) {
        return res.status(201).json({
            status: response['status'],
            data: response['data']
        })
    } else {
        return res.status(404).json({
            status: response['status'],
            message: response['message']
        })
    }
}

const calculateCurrentScoreOfEmpHelper = async (mspin) => {
    let response = [];
    response['status'] = false;
    try {
        const checkemployeeExists = await Employee.findOne({ mspin: mspin });
        const employeeAttemptedQuestion = await EmployeeAnswer.find({ mspin: mspin }).select("empAnswers");
        if (!checkemployeeExists) {
            response['message'] = "employee does not exists with this given employee details";
            return response;
        } else if (!employeeAttemptedQuestion.length) {
            response['message'] = "This emp didn't attempted any questions";
            return response;
        } else {
            
            let name = checkemployeeExists.name;
            let registrationNumber = checkemployeeExists.registrationNumber;
            let category = checkemployeeExists.category;
            const calculateFinalScore = async () => {
                let response = [];
                response['status'] = false;
                try {
                    let totalScore = 0;
                    let emp = {};
                    const employeeCorrectAns = await EmployeeAnswer.find({ mspin: mspin }).select("empAnswers");
                    
                    if (employeeCorrectAns.length) {
                        
                        employeeCorrectAns.forEach((empDetails) => {
                            let empScore = empDetails.empAnswers.score;
                            totalScore = totalScore + empScore;
                            emp["finalScore"] = totalScore;
                        });
                    } else {
                        response['message'] = "Data not found for employeeCorrectAns";
                        return response;
                    }
                    response['status'] = true;
                    response['data'] = emp;
                    return response;
                } catch (error) {
                    response['message'] = error.message;
                    return response;

                }
            }
            const checkFinalScoreExists = await EmpFinalScore.find({ mspin: mspin }).select("finalScore registrationNumber");
            if (checkFinalScoreExists.length) {
                let scoreCalcultedRespone = await calculateFinalScore();
                let scoreCalculted;
                if (scoreCalcultedRespone['status'] === true) {
                    scoreCalculted = scoreCalcultedRespone['data'];
                } else {
                    response['message'] = scoreCalcultedRespone['message'];
                    return response;
                }
                
                let finalScore = scoreCalculted.finalScore;
                try {
                    await EmpFinalScore.updateOne({ mspin: mspin }, { "$set": { finalScore: finalScore } });
                    response['status'] = true;
                    response['data'] = {
                        mspin,
                        registrationNumber,
                        category:category,
                        name,
                        finalScore
                    }
                    
                    return response;
                } catch (error) {
                    response['message'] = error.message;
                    return response;
                }
            } else {
                let scoreCalcultedRespone = await calculateFinalScore();
                let scoreCalculted;
                if (scoreCalcultedRespone['status'] === true) {
                    scoreCalculted = scoreCalcultedRespone['data'];
                } else {
                    response['message'] = scoreCalcultedRespone['message'];
                    return response;
                }
                let finalScore = scoreCalculted.finalScore;
                const finalResult = new EmpFinalScore({ mspin: mspin, registrationNumber : registrationNumber,category : category, name : name, finalScore : finalScore })
                
                const savedFinalScore = await finalResult.save();
                
                if (savedFinalScore) {
                    response['status'] = true;
                    response['data'] = {
                        mspin,
                        registrationNumber,
                        category :category,
                        name,
                        finalScore
                    };
                    
                    return response;
                } else {
                    response['message'] = "Error in query";
                    return response;
                }
            }
        }
    } catch (error) {
        response['message'] = error.message;
        return response;

    }
}

exports.getRoundScore = async (req, res) => {
    let status = false;
    try {
        const mspin = req.params.mspin;
        const roundName = req.params.roundname;

        const roundScore = await EmpRoundScore.findOne({ mspin: mspin, roundName: roundName }).select("totalScore registrationNumber");
        if (roundScore) {
            status = true;
            const registrationNumber = roundScore.registrationNumber;
            const tatalScore = roundScore.totalScore;
            return res.status(201).json({
                status: status,
                data: {
                    mspin,
                    roundName,
                    registrationNumber,
                    tatalScore
                }
            })
        } else {
            return res.status(401).json({
                status: status,
                message: "data not found"
            })
        }
    } catch (error) {
        res.status(404).json({
            status: status,
            error: error
        })
    }
}

exports.getFinalScoreOfAllRounds = async (req, res) => {
    let status = false;
    try {
        const mspin = req.params.mspin;
        const totalScore = await EmpFinalScore.findOne({ mspin: mspin }).select("finalScore registrationNumber");
        
        if (totalScore) {
            status = true;
            const registrationNumber = totalScore.registrationNumber;
            const finalScore = totalScore.finalScore;
            return res.status(201).json({
                status: status,
                data: {
                    mspin,
                    registrationNumber,
                    finalScore
                }
            })
        } else {
            return res.status(401).json({
                status: status,
                message: "data not found"
            })
        }
    } catch (error) {
        res.status(404).json({
            status: status,
            error: error
        })
    }
}

// scorerboard  round level
exports.getScoreBoardRoundLevel = async (req, res) => {

    let status = false;
    try {
        const categoryType = req.body.categoryType;
        const roundScoreOfEveryone = await EmpRoundScore.find({}).select("mspin name registrationNumber category roundName totalScore");
        
        if (roundScoreOfEveryone.length) {
            status = true;
            const parentRound = {};
            parentRound['1-A'] = true;
            parentRound['1-B'] = true;
            parentRound['2'] = true;
            parentRound['3'] = true;
            parentRound['4'] = true;
            parentRound['5'] = true;
            parentRound['6'] = true;
            parentRound['7'] = true;
            parentRound['8'] = true;

            const result = roundScoreOfEveryone.reduce((result, currentValue) => {
                let mspin = currentValue.mspin;
                let name = currentValue.name;
                let registrationNumber = currentValue.registrationNumber;
                let category = currentValue.category;
                
                if(category!==categoryType){
                    return result;
                }
                let totalScore = currentValue.totalScore;
                let roundName = currentValue.roundName;
                if (parentRound[roundName] === undefined) {
                    roundName = "2";
                }
                if (result[mspin] === undefined) {
                    result[mspin] = {};
                    result[mspin].mspin = mspin;
                    result[mspin].name = name;
                    result[mspin].registrationNumber = registrationNumber;
                    result[mspin].category = category;
                    result[mspin].totalScoreOfAllRounds = totalScore;
                    result[mspin]['rounds'] = {};
                    result[mspin]['rounds'][roundName] = totalScore;
                } else {
                    result[mspin].totalScoreOfAllRounds += totalScore;
                    if (result[mspin]['rounds'][roundName] === undefined) {
                        result[mspin]['rounds'][roundName] = totalScore;
                    } else {
                        result[mspin]['rounds'][roundName] += totalScore;
                    }
                }
                return result;
            },
                {}
            );

            let scoreBoardReport = [];
            for (let key in result) {
                scoreBoardReport.push(result[key])
            }
            scoreBoardReport.sort(function (a, b) {
                return b['totalScoreOfAllRounds'] - a['totalScoreOfAllRounds'];

            })
            let rank = 0;
            scoreBoardReport.forEach((eachEmpScoreBoardReport) => {
                eachEmpScoreBoardReport['rank'] = ++rank;
            })

            return res.status(201).json({
                status: status,
                data: {
                    scoreBoard: scoreBoardReport
                }
            })
        } else {
            return res.status(401).json({
                status: status,
                message: "data not found"
            })
        }
    } catch (error) {
        res.status(404).json({
            status: status,
            error: error
        })
    }
}


