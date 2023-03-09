require("../db/connection");
const Round = require("../model/roundsSchema");
//const Report = require("../model/employeeReportSchema");
//const Report = require("../model/employeeReportSchema");
const EmployeeAnswer = require("../model/employeeAnswers");
//const EmpRoundScore = require("../model/empRoundScoreSchema");
const EmpRoundScore = require("../model/empRoundScoreSchema");

const EmpFinalScore = require("../model/empFinalScoreSchema");
const Employee = require("../model/employeeSchema")

// submit answer of each round
exports.submitAnswerOfQuestion = async (req, res) => {
    let status = false;
    try {
        const roundName = req.body.roundName;
        const mspin = req.body.mspin;

        calculateScoreOfOneRoundHelper()

        // const registrationNumber = req.body.registrationNumber;
        // const name = req.body.name;

        let questionId = req.body.questionId;
        let cId = req.body.cId;
        console.log(roundName);
        const checkemployeeExists = await Employee.findOne({ mspin: mspin });
        if (!checkemployeeExists) {
            return res.status(404).json({
                status: status,
                message: "employee does not exists with this given employee details"
            });
        } else {
            let name = checkemployeeExists.name;
            let registrationNumber = checkemployeeExists.registrationNumber;
            //const round = await Round.find({ roundName: roundName }, { correctAnswers: 1, _id: 0 });
            const round = await Round.findOne({ roundName: roundName }, { correctAnswers: 1, _id: 0 });

            if (round) {
                status = true;
                console.log(round.correctAnswers)
                let correctAnswers = round.correctAnswers;
                let correctQuestionsAnswers = {}

                correctAnswers.forEach((obj) => {
                    correctQuestionsAnswers[obj.questionId] = obj.cId;
                });
                console.log(correctQuestionsAnswers)
                const questions = Object.keys(correctQuestionsAnswers);
                console.log("questionssss")
                console.log(questions)
                //     // const total = questions.length;
                let score = 0;
                // let employeeAnswer = {};
                const checkAnswer = async () => {
                    let employeeAnswer = {};
                    if (!!cId && questions[questionId - 1] == questionId && correctQuestionsAnswers[questionId] == cId) {

                        employeeAnswer["questionId"] = questionId;
                        employeeAnswer["cId"] = cId;
                        employeeAnswer["isCorrect"] = true;
                        score = score + 10;
                        employeeAnswer["score"] = score;
                    } else if (!!cId && questions[questionId - 1] == questionId && correctQuestionsAnswers[questionId] !== cId) {
                        employeeAnswer["questionId"] = questionId;
                        employeeAnswer["cId"] = cId;
                        employeeAnswer["isCorrect"] = false;
                        employeeAnswer["score"] = score;

                    } else if (!cId && questions[questionId - 1] == questionId && correctQuestionsAnswers[questionId] !== cId) {
                        employeeAnswer["questionId"] = questionId;
                        employeeAnswer["cId"] = "Question Not attempted";
                        employeeAnswer["isCorrect"] = false;
                        employeeAnswer["score"] = score;

                    } else if (!!cId && questions[questionId - 1] !== questionId && correctQuestionsAnswers[questionId] !== cId) {
                        res.status(404).json({
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
                                message: "answer is submitted",
                                Employee_result: {
                                    employeeMspin: mspin,
                                    employeeRegistrationNumber: registrationNumber,
                                    roundName,
                                    name,
                                    employeeReport: checked,
                                    correctQuestionsAnswers
                                }
                            });

                        } catch (error) {
                            res.status(400).json({
                                message: error.message
                            })
                        }
                    }
                    updateQuery();
                } else {
                    console.log("not exits. save the answer")
                    let checked = await checkAnswer();
                    const roundReport = new EmployeeAnswer({ mspin, registrationNumber, name, roundName, empAnswers: checked });
                    const ansSubmitted = await roundReport.save();
                    if (ansSubmitted) {
                        res.status(201).json({
                            status: "success",
                            message: "answer is submitted",
                            Employee_result: {
                                employeeMspin: mspin,
                                employeeRegistrationNumber: registrationNumber,
                                name,
                                roundName,
                                employeeReport: checked,
                                correctQuestionsAnswers

                            }
                        });

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
            message: "data not found"
        })
    }
}

//submit answer of round 2
exports.submitAnswerOfCardQuestion = async (req, res) => {
    let status = false;
    try {
        const roundName = req.body.roundName;
        const mspin = req.body.mspin;
        //Calling these APIs to update score and leaderboard
        await calculateScoreOfOneRoundHelper(mspin,roundName);
        await calculateCurrentScoreOfEmpHelper(mspin);

        let cardQuestionId = req.body.cardQuestionId;
        let wheelQuestionId = req.body.wheelQuestionId;
        let userAnswer = req.body.userAnswer;
        console.log(roundName);
        const checkemployeeExists = await Employee.findOne({ mspin: mspin });
        if (!checkemployeeExists) {
            return res.status(404).json({
                status: status,
                message: "employee does not exists with this given employee details"
            });
        } else {

            let name = checkemployeeExists.name;
            let registrationNumber = checkemployeeExists.registrationNumber;

            //const round = await Round.find({ roundName: roundName }, { correctAnswers: 1, _id: 0 });
            const round = await Round.findOne({ roundName: roundName }, { correctAnswers: 1, _id: 0 });
            if (!round) {
                return res.status(404).json({
                    status: status,
                    message: "this round is not exists"
                });
            } else {
                //const round = await Round.findOne({ roundName: roundName ,"correctAnswers.wheelQuestionId":wheelQuestionId }).select("correctAnswers");
                console.log(round)

                let correctAnswer = round.correctAnswers;
                console.log("======================================")
                console.log(correctAnswer)
                let correctQuestionsAnswers = {}
                let questionsArray = correctAnswer.map((obj) => {
                    let wheelid = obj.wheelQuestionId
                    console.log("wheelidddddddd", wheelid)
                    if (wheelQuestionId == wheelid) {
                        let qarray = obj.questions;
                        let cardsremains = obj.cardsRemaining;
                        correctQuestionsAnswers["qarrays"] = qarray;
                        correctQuestionsAnswers["cardsRemaining"] = cardsremains;
                        //console.log("qarrarrrrrrrrrrrrry",qarray) 
                        //return qarray;

                    }
                })
                console.log("questionsArray", questionsArray);


                console.log("lllllllllllllll")
                console.log(correctQuestionsAnswers)
                console.log("cccccccccccccc", correctQuestionsAnswers.qarrays)
                let arrayOfCardsAns = correctQuestionsAnswers.qarrays;
                let cardsRemaining = correctQuestionsAnswers.cardsRemaining;
                console.log("arrayOfCardsAns=============", arrayOfCardsAns);

                let dbcid = 0;
                arrayOfCardsAns.forEach((cardobj) => {
                    console.log("from bodyidddddddddddddddd", cardQuestionId)
                    console.log("from db body idddddddddd", cardobj.cardQuestionId)
                    if (cardQuestionId == cardobj.cardQuestionId) {
                        console.log("insideeeeee from db body idddddddddd", cardobj.cardQuestionId)
                        dbcid = cardobj.cId;
                        //console.log("outside",dbcid)

                        // if(userAnswer == dbcid){
                        //     console.log("userAnswerrrrrrrrrrrrr",userAnswer)
                        //     console.log("ddddddddddddddd",dbcid)
                        //     console.log("user ans is correct")
                        // }else{
                        //     console.log("ans is incorrect")
                        // }
                    }

                })
                let score = 0;
                let employeeAnswer = {};
                if (userAnswer == dbcid) {
                    console.log("userAnswerrrrrrrrrrrrr", userAnswer)
                    console.log("ddddddddddddddd", dbcid)
                    console.log("user ans is correct")
                    score = score + 10;
                    cardsRemaining = --cardsRemaining;
                    employeeAnswer["wheelQuestionId"] = wheelQuestionId;
                    employeeAnswer["cardQuestionId"] = cardQuestionId;
                    employeeAnswer["userAnswer"] = userAnswer;
                    employeeAnswer["cardsRemaining"] = cardsRemaining;
                    employeeAnswer["isCorrect"] = true;
                    //employeeAnswer["cardsRemaining"] = true;
                    //score = score + 10;
                    employeeAnswer["score"] = score;
                    res.status(201).json({
                        data: employeeAnswer
                    })
                } else {
                    console.log("ans is incorrect")
                    employeeAnswer["wheelQuestionId"] = wheelQuestionId;
                    employeeAnswer["cardQuestionId"] = cardQuestionId;
                    employeeAnswer["userAnswer"] = userAnswer;
                    employeeAnswer["cardsRemaining"] = cardsRemaining;
                    employeeAnswer["isCorrect"] = false;
                    employeeAnswer["score"] = score;
                    res.status(201).json({
                        data: employeeAnswer
                    })
                }
                console.log(dbcid)




                const questions = Object.keys(correctQuestionsAnswers);
                console.log("questionssss")
                console.log(questions)

            }


        }

        //     // const total = questions.length;
        //let score = 0;
        // let employeeAnswer = {};
        // const checkAnswer = async () => {
        //     let employeeAnswer = {};
        //     if (!!cId && questions[questionId - 1] == questionId && correctQuestionsAnswers[questionId] == cId) {

        //         employeeAnswer["questionId"] = questionId;
        //         employeeAnswer["cId"] = cId;
        //         employeeAnswer["isCorrect"] = true;
        //         score = score + 10;
        //         employeeAnswer["score"] = score;
        //     } else if (!!cId && questions[questionId - 1] == questionId && correctQuestionsAnswers[questionId] !== cId) {
        //         employeeAnswer["questionId"] = questionId;
        //         employeeAnswer["cId"] = cId;
        //         employeeAnswer["isCorrect"] = false;
        //         employeeAnswer["score"] = score;

        //     } else if (!cId && questions[questionId - 1] == questionId && correctQuestionsAnswers[questionId] !== cId) {
        //         employeeAnswer["questionId"] = questionId;
        //         employeeAnswer["cId"] = "Question Not attempted";
        //         employeeAnswer["isCorrect"] = false;
        //         employeeAnswer["score"] = score;

        //     } else if (!!cId && questions[questionId - 1] !== questionId && correctQuestionsAnswers[questionId] !== cId) {
        //         res.status(404).json({
        //             message: "dddata not found"
        //         })
        //     }
        //     return employeeAnswer;
        // }

        // const employeeAnsExists = await EmployeeAnswer.find({ mspin: mspin, roundName: roundName, "empAnswers.questionId": questionId });
        // if (employeeAnsExists.length) {
        //     let checked = await checkAnswer();
        //     console.log(checked)

        //     const updateQuery = async () => {
        //         try {
        //             await EmployeeAnswer.updateOne({ mspin: mspin, roundName: roundName, "empAnswers.questionId": questionId }, { "$set": { empAnswers: checked } });
        //             res.status(201).json({
        //                 status: "success",
        //                 message: "answer is submitted",
        //                 Employee_result: {
        //                     employeeMspin: mspin,
        //                     employeeRegistrationNumber: registrationNumber,
        //                     roundName,
        //                     name,
        //                     employeeReport: checked,
        //                     correctQuestionsAnswers
        //                 }
        //             });

        //         } catch (error) {
        //             res.status(400).json({
        //                 message: error.message
        //             })
        //         }
        //     }
        //     updateQuery();
        // } else {
        //     console.log("not exits. save the answer")
        //     let checked = await checkAnswer();
        //     const roundReport = new EmployeeAnswer({ mspin, registrationNumber, name, roundName, empAnswers: checked });
        //     await roundReport.save();
        //     res.status(201).json({
        //         status: "success",
        //         message: "answer is submitted",
        //         Employee_result: {
        //             employeeMspin: mspin,
        //             employeeRegistrationNumber: registrationNumber,
        //             name,
        //             roundName,
        //             employeeReport: checked,
        //             correctQuestionsAnswers

        //         }
        //     });
        // }
    } catch (error) {
        res.status(404).json({
            message: "data not found",

        })
    }
}

//calculate and save score of each round
exports.calculateScoreOfOneRoundController = async (req, res) => {
    const mspin = req.body.mspin;
    const roundName = req.body.roundname;
    let response = await calculateScoreOfOneRoundHelper(mspin,roundName);
    if(response['status']===true){
        return res.status(201).json({
            status: response['status'],
            data: response['data']
        })
    }else{
        return res.status(404).json({
            status: response['status'],
            message: response['message']
        })
    }
}

const calculateScoreOfOneRoundHelper = async (mspin,roundName) => {
    let response = [];
    response['status'] = false;
    try{
        const roundAnswerDetail = await EmployeeAnswer.find({ mspin: mspin, roundName: roundName });
        if(!roundAnswerDetail.length){
            response['message'] = "data not found";
            return response;
        }
        let name = "";
        let regNumber = "";
        let total = 0;
        roundAnswerDetail.forEach((empObj) => {
            name = empObj.name;
            regNumber = empObj.registrationNumber;
            let checkAns = empObj.empAnswers.isCorrect;
            if (checkAns == true) {
                let score = empObj.empAnswers.score;
                console.log(score)
                total = total + score;
            }
        })
        console.log(total)
        console.log("regNumber", regNumber)

        const roundScore = new EmpRoundScore({ mspin: mspin, name: name, registrationNumber: regNumber, roundName: roundName, totalScore: total })

        const savedRoundScore = await roundScore.save();
        if (savedRoundScore) {
            let roundReport = {
                mspin,
                name,
                registrationNumber: regNumber,
                roundName,
                totalScoreOfThisRound: total

            }
            response['status']=true;
            response['data']=roundReport;
        } else {
            response['message'] = "Error in query";
        }
    }catch(error){
        response['message'] = error.message;
    }
    return response;
    
}

exports.calculateCurrentScoreOfEmpController = async (req, res) => {
    const mspin = req.body.mspin;
    console.log("calling calculateCurrentScoreOfEmpHelper")
    let response = await calculateCurrentScoreOfEmpHelper(mspin);
    console.log("response from calculateCurrentScoreOfEmpHelper",response)
    if(response['status']===true){
        return res.status(201).json({
            status: response['status'],
            data: response['data']
        })
    }else{
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
            const calculateFinalScore = async () => {
                let response = [];
                response['status'] = false;
                try {
                    let totalScore = 0;
                    let emp = {};
                    const employeeCorrectAns = await EmployeeAnswer.find({ mspin: mspin }).select("empAnswers");
                    console.log(employeeCorrectAns)
                    if (employeeCorrectAns.length) {
                        console.log("insideeeeeeeeeeeeeee")
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
                if(scoreCalcultedRespone['status']===true){
                    scoreCalculted = scoreCalcultedRespone['data'];
                }else{
                    response['message'] = scoreCalcultedRespone['message'];
                    return response;
                }
                console.log("++++++++++++++++++")
                let finalScore = scoreCalculted.finalScore;
                try {
                    await EmpFinalScore.updateOne({ mspin: mspin }, { "$set": { finalScore: finalScore } });
                    response['status'] = true;
                    response['data'] = {
                        mspin,
                        registrationNumber,
                        name,
                        finalScore
                    }
                    console.log("returned response first block",response)
                    return response;
                } catch (error) {
                    response['message'] = error.message;
                    return response;
                }
            } else {
                let scoreCalcultedRespone = await calculateFinalScore();
                let scoreCalculted;
                if(scoreCalcultedRespone['status']===true){
                    scoreCalculted = scoreCalcultedRespone['data'];
                }else{
                    response['message'] = scoreCalcultedRespone['message'];
                    return response;
                }
                console.log(scoreCalculted)
                let finalScore = scoreCalculted.finalScore;
                
                const finalResult = new EmpFinalScore({ mspin: mspin, registrationNumber: registrationNumber, name: name, finalScore: finalScore })
                console.log(finalResult)
                const savedFinalScore = await finalResult.save();
                console.log(savedFinalScore)
                if (savedFinalScore) {
                    console.log("final score saved")
                    response['status']=true;
                    response['data'] = {
                        mspin,
                        registrationNumber,
                        name,
                        finalScore
                    };
                    console.log("returned response",response)
                    return response;
                } else {
                    console.log("err during saving final score")
                    response['message'] = "Error in query";
                    return response;
                }
            }
        }
    } catch (error) {
        console.log(error);
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
        console.log(totalScore)
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
// leaderboard 
exports.getScoreOfEveryone = async (req, res) => {

    let status = false;
    try {
        console.log("111")
        const finalScoreOfEveryone = await EmpFinalScore.find({}).sort({ finalScore: -1 });
        console.log(finalScoreOfEveryone);
        if (finalScoreOfEveryone.length) {
            console.log("inside")
            status = true;
            let rank = 0;
            const finalResult = finalScoreOfEveryone.map((empScoreObj) => {
                rank = ++rank;
                let mspin = empScoreObj.mspin;
                let registrationNumber = empScoreObj.registrationNumber;
                let name = empScoreObj.name;
                let finalScore = empScoreObj.finalScore;

                return { mspin, registrationNumber, name, rank, finalScore };

            })
            // const registrationNumber = totalScore.registrationNumber;
            // const finalScore = totalScore.finalScore;
            return res.status(201).json({
                status: status,
                data: {
                    leaderboard: finalResult
                }
            })
        } else {
            console.log("outside")
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
