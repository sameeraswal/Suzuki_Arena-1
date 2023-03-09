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
exports.calculateScoreOfOneRound = async (req, res) => {
    let status = false;
    try {
        const mspin = req.body.mspin;
        const roundName = req.body.roundname;
        console.log(mspin, roundName)
        //const registrationNumber = req.body.registrationNumber;

        //const roundAnswerDetail = await EmployeeAnswer.find({$and:[{mspin:mspin},{roundName:roundName}]});
        //const checkScoreExists = await EmpRoundScore.find({ $and: [{ mspin: mspin }, { roundName: roundName }, { totalScore: total }] });
        //const checkScoreExists = await EmpRoundScore.find({ mspin: mspin, roundName: roundName }).select("totalScore");
        // console.log(checkScoreExists)
        // if (checkScoreExists.length) {
        //     return res.json({
        //         message: "score for this round has already calculated"
        //     })


        const roundAnswerDetail = await EmployeeAnswer.find({ mspin: mspin, roundName: roundName });
        //const rounds = await Round.find().select({ roundName: 1, _id: 0 });
        console.log("roundAnswerDetailsssssssssss", roundAnswerDetail)
        if (!roundAnswerDetail.length) {
            return res.status(404).json({
                status: status,
                message: "data not foundddd"
            })
        } else {
            status = true;

            //const regNumber = roundAnswerDetail[0].registrationNumber;
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
            console.log("regNumberrrrrrrrrrrrr", regNumber)


            //const checkScoreExists = await EmpRoundScore.find({ $and: [{ mspin: mspin }, { registrationNumber: regNumber }, { roundName: roundName }, { totalScore: total }] });
            // if (checkScoreExists.length) {
            //     return res.json({
            //         message: "score for this round has already saved"
            //     })

            // } else {
            const roundScore = new EmpRoundScore({ mspin: mspin, name: name, registrationNumber: regNumber, roundName: roundName, totalScore: total })
            //console.log(roundScore)
            //EmpRoundReport
            const savedRoundScore = await roundScore.save();
            //console.log(savedRoundScore)
            //let score=roundAnswerDetail.empAnswers.score

            if (savedRoundScore) {
                let roundReport = {
                    mspin,
                    name,
                    registrationNumber: regNumber,
                    roundName,
                    totalScoreOfThisRound: total

                }
                res.status(201).json({
                    status: status,
                    data: roundReport
                })

            } else {
                status = false;
                console.log("err in query")
                return res.json({
                    message: "error in query"
                })
            }
        }

    } catch (error) {
        res.status(404).json({
            status: status,
            message: "data not found",
            error: error.message
        })
    }
}



//calculate and save score of all quiz or rounds
// exports.calculateScoreOfAllRounds = async (req, res) => {
//     try {

//         const mspin = req.body.mspin;
//         const regNumber = req.body.registrationNumber;
//         console.log(mspin)

//         const checkFinalScoreExists = await EmpFinalScore.find({ mspin: mspin, registrationNumber: regNumber }).select("finalScore registrationNumber");
//         console.log(checkFinalScoreExists)
//         if (checkFinalScoreExists.length) {
//             // return res.json({
//             //     message: "final score for this employee has already calculated"
//             // })
//             const getAllScore = await EmpRoundScore.find({ mspin: mspin });
//             console.log("mmmmmmmmmmmm")
//             console.log(getAllScore)
//             if (!getAllScore.length) {
//                 return res.status(401).json({
//                     message: "error:invalid input data"
//                 })

//             } else {
//                 console.log("bbbbbbbbbbbbbbbbb")
//                 console.log(getAllScore)
//                 let finalScore = 0;
//                 getAllScore.forEach((roundScoreObj) => {
//                     let total = roundScoreObj.totalScore;
//                     finalScore = finalScore + total;
//                 })
//                 console.log(finalScore)

//             }

//         } else {
//             const getAllScore = await EmpRoundScore.find({ mspin: mspin });
//             console.log("============")
//             console.log(getAllScore)
//             if (!getAllScore.length) {
//                 return res.status(401).json({
//                     message: "error:invalid input data"
//                 })

//             } else {
//                 console.log("qqqqqqqqqqqqqqq")
//                 console.log(getAllScore)
//                 let finalScore = 0;
//                 getAllScore.forEach((roundScoreObj) => {
//                     let total = roundScoreObj.totalScore;
//                     finalScore = finalScore + total;
//                 })
//                 console.log(finalScore)
//                 const finalResult = new EmpFinalScore({ mspin: mspin, registrationNumber: regNumber, finalScore: finalScore })
//                 //console.log(roundScore)
//                 //EmpRoundReport
//                 const savedFinalScore = await finalResult.save();
//                 //console.log(savedFinalScore)
//                 //let score=roundAnswerDetail.empAnswers.score
//                 let roundReport = {
//                     mspin,
//                     registrationNumber: regNumber,
//                     finalScoreOfThisRound: finalScore

//                 }
//                 if (savedFinalScore) {
//                     console.log("something coming")
//                     res.status(201).json({
//                         data: roundReport
//                     })

//                 } else {
//                     console.log("err in query")
//                     return res.json({
//                         message: "error in query"
//                     })
//                 }
//             }
//         }
//     } catch (error) {
//         res.status(404).json({
//             message: "data not found",
//             error: error.message
//         })

//     }
// }


//calculate current socore of employee
exports.calculateCurrentScoreOfEmp = async (req, res) => {
    let status = false;
    try {
        const mspin = req.body.mspin;
        console.log(mspin)
        const checkemployeeExists = await Employee.findOne({ mspin: mspin });
        let name = checkemployeeExists.name;
        let registrationNumber = checkemployeeExists.registrationNumber;
        const employeeAttemptedQuestion = await EmployeeAnswer.find({ mspin: mspin }).select("empAnswers");
        if (!checkemployeeExists) {
            return res.status(404).json({
                status: status,
                message: "employee does not exists with this given employee details"
            });
        } else if (!employeeAttemptedQuestion.length) {
            return res.status(404).json({
                status: status,
                message: "This emp didn't attempted any questions"
            })
        } else {
            const calculateFinalScore = async () => {
                try {
                    let totalScore = 0;
                    let emp = {};
                    //const employeeCorrectAns = await EmployeeAnswer.find({ mspin: mspin, registrationNumber: registrationNumber, "empAnswers.isCorrect": true });
                    const employeeCorrectAns = await EmployeeAnswer.find({ mspin: mspin }).select("empAnswers");
                    console.log(employeeCorrectAns)
                    if (employeeCorrectAns.length) {
                        console.log("insideeeeeeeeeeeeeee")
                        employeeCorrectAns.forEach((empDetails) => {
                            let empScore = empDetails.empAnswers.score;
                            totalScore = totalScore + empScore;
                            emp["finalScore"] = totalScore;
                            //emp["name"] = empDetails.name;

                        });
                    } else {
                        console.log("elseeeeeeeeeeeeee")
                        return res.status(404).json({
                            message: "dataa not found"

                        })
                    }
                    console.log(emp)
                    return emp;

                } catch (error) {
                    return res.status(404).json({
                        error: error.message
                    })

                }
            }

            //const employeeAttemptedQuestion = await EmployeeAnswer.find({ mspin: mspin}).select("empAnswers");
            // console.log(employeeAttemptedQuestion);
            // if (!employeeAttemptedQuestion.length) {
            //     return res.status(404).json({
            //         status: status,
            //         message: "invalid credntials or this emp didn't attempted any questions"
            //     })

            //} 
            //else {
            const checkFinalScoreExists = await EmpFinalScore.find({ mspin: mspin }).select("finalScore registrationNumber");
            if (checkFinalScoreExists.length) {
                console.log("updateeeeeeeeeeeeeq")
                console.log(checkFinalScoreExists);
                //update finalscore in finl score collection

                let scoreCalculted = await calculateFinalScore();
                console.log("++++++++++++++++++")
                let finalScore = scoreCalculted.finalScore;
                // let name = scoreCalculted.name;
                const updateQuery = async () => {
                    try {
                        await EmpFinalScore.updateOne({ mspin: mspin }, { "$set": { finalScore: finalScore } });
                        res.status(201).json({
                            status: true,
                            message: "final score is updated",
                            empQuizScore: {
                                mspin,
                                registrationNumber,
                                name,
                                finalScore
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
                let scoreCalculted = await calculateFinalScore();
                console.log(scoreCalculted)
                let finalScore = scoreCalculted.finalScore;
                //let name = scoreCalculted.name;
                console.log("scoreCalcultedsssssssssssss")
                //console.log(scoreCalculted)
                //console.log("emp",emp)

                const finalResult = new EmpFinalScore({ mspin: mspin, registrationNumber: registrationNumber, name: name, finalScore: finalScore })
                console.log("finalresulttttttttttttttttttt")
                console.log(finalResult)
                const savedFinalScore = await finalResult.save();
                console.log(savedFinalScore)
                if (savedFinalScore) {
                    status = true;
                    console.log("final score saved")
                    return res.status(201).json({
                        status: status,
                        empQuizScore: {
                            mspin,
                            registrationNumber,
                            name,
                            finalScore
                        }
                    })

                } else {
                    console.log("err during saving final score")
                    return res.json({
                        status: status,
                        message: "error in query"
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
            // let quizReport = {};
            // finalScoreOfEveryone.forEach((empScoreObj) => {
            //     quizReport["mspin"] = empScoreObj.mspin;
            //     quizReport["registrationNumber"] = empScoreObj.registrationNumber;
            //     quizReport["finalScore"] = empScoreObj.finalScore;

            // })
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

//submit One answer
// exports.submitOneAnswer = async (req, res) => {
//     try {
//         const roundName = req.body.roundName;
//         //const ans = employeeAnswers.emplAnswers =roundName

//         const mspin = req.body.mspin;
//         const registrationNumber = req.body.registrationNumber;

//         const questionId = req.body.attempted_question.questionId;
//         const cId = req.body.req.body.attempted_question.cId;
//         // const  empAnswer = {
//         //     roundName : roundName,
//         //     answers :attempted_question

//         //     }
//         console.log(roundName);
//         const round = await Round.find({ roundName: roundName }, { correctAnswers: 1, _id: 0 });
//         //console.log(attempted_question);

//         const correctAnswers = round[0].correctAnswers;
//         console.log(correctAnswers)
//         const allQuestions = Object.keys(correctAnswers);

//         console.log("allQuestionsssss" + allQuestions)
//         let employeeAnswer = {};
//         allQuestions.forEach((qId) => {
//             if (
//                 !!attempted_question[questionId] &&
//                 correctAnswers[qId] == attempted_question[questionId]
//             ) {
//                 //score = ++score;
//                 //employeeAnswer[question_number] = true;
//                 employeeAnswer[questionId] = qId;
//                 employeeAnswer[cId] = cId;
//                 employeeAnswer[isCorrect] = true;

//             } else if (attempted_question[questionId] == "") {
//                 employeeAnswer[questionId] = "Not Attempted";

//             } else {
//                 //employeeAnswer[question_number] = false;
//                 employeeAnswer[questionId] = questionId;
//                 employeeAnswer[cId] = cId;
//                 employeeAnswer[isCorrect] = false;


//             }
//         });
//         console.log(employeeAnswer);
//         const answer = new EmployeeAnswer({ mspin, registrationNumber, roundName, empAnswers: employeeAnswer });
//         await answer.save()

//         // const answers = new EmployeeAnswers({mspin, registrationNumber,empAnswers:empAnswer});
//         // await answers.updateOne({roundName:empAnswer.roundName,mspin},{$push:{mspin, registrationNumber,empAnswers:empAnswer}})
//         //const data = await answers.save();
//         // const report = new Report({mspin, registrationNumber, roundName, score,total})
//         // const data = await report.save();
//         // const round = await Round.find({ roundName: roundName }, { correctAnswers: 1, _id: 0 });
//         // const cr={...round}
//         //console.log(data);
//         //  const objj= round.reduce((acc,element)=>{
//         //     //return {...acc,...element}
//         //     let a = {...acc,...element}
//         //     return a;

//         //  },{});
//         //  console.log(objj)
//         //  const correctAnswers = objj._doc.correctAnswers;

//         // const correctAnswers = round[0].correctAnswers;
//         // console.log(correctAnswers)
//         // const correctAns = Object.assign({}, ...round)
//         // console.log(correctAns)
//         // console.log("correctAnswersssssss" +Array.isArray(correctAns))
//         //console.log(correctAns._doc.correctAnswers)
//         //res.send(correctAnswers)
//         // const allQuestions = Object.keys(correctAnswers);

//         // console.log("allQuestionsssss" + allQuestions)
//         // const total = allQuestions.length;
//         // //console.log(total)
//         // let score = 0;
//         // for (let i = 0; i < total; i++) {
//         //     let question_number = allQuestions[i];
//         //     if (
//         //         !!attempted_question[question_number] &&
//         //         correctAnswers[question_number] == attempted_question[question_number]
//         //     ) {
//         //         score = score + 1;
//         //     }
//         // }
//         // let employeeAnswer = {};
//         // allQuestions.forEach((question_number) => {
//         //     if (
//         //         !!attempted_question[question_number] &&
//         //         correctAnswers[question_number] == attempted_question[question_number]
//         //     ) {
//         //         score = ++score;
//         //         employeeAnswer[question_number] = true;
//         //     } else if(attempted_question[question_number] ==""){
//         //         employeeAnswer[question_number] = "Not Attempted";

//         //     }else {
//         //         employeeAnswer[question_number] = false;


//         //     }
//         // });
//         //console.log("oooooooooooooooooo"+employeeAnswer)

//         // const employeeResult = allQuestions.map((question_number)=>{
//         //     //let question_number = allQuestions[question];
//         //     if (
//         //         !!attempted_question[question_number] &&
//         //         correctAnswers[question_number] == attempted_question[question_number]
//         //     ) {
//         //          score = score++;
//         //          console.log(score)
//         //          return score;
//         //     }})
//         //console.log(score)
//         //Report.save();
//         // const report = new Report({mspin, registrationNumber, roundName, score,total})
//         // const data = await report.save();
//         //console.log("ddddddddd"+data);


//         res.status(201).json({
//             status: "success",
//             message: "answer one is submitted",
//             Employee_result: {
//                 employeeAnswer

//             }
//         });
//         //const correctAnswers = Object.keys(round.correctAnswers);

//     } catch (error) {
//         res.send(error)

//     }

// }