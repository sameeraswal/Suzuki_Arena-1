require("../db/connection");
const Round = require("../model/roundsSchema");
const WheelRounds = require("../model/wheelRoundsSchema");
const Roundunlocked = require("../model/employeeUnlockedRound");
const WheelRoundLocked = require("../model/employeeWheelUnlockedRound");
const Employee = require("../model/employeeSchema")

exports.getRoundLists = async (req, res) => {
    let status = false;
    try {
        const mspin = req.body.mspin;
        const checkemployeeExists = await Employee.findOne({ mspin: mspin });
        if (!checkemployeeExists) {
            return res.status(404).json({
                status: status,
                message: "employee does not exists with this given employee details",
            });
        } else {
            const rounds = await Round.find({}).select({ roundName: 1, route: 1, roundOrder: 1, _id: 0 }).sort({ roundOrder: 1 });
            if (rounds.length) {
                rounds.forEach((round, index, rounds) => {
                    rounds[index]["isDisabled"] = false;
                })
                status = true;
                let disabledRound = await Roundunlocked.findOne({ mspin: mspin }).select({ disabled: 1, unlocked: 1 });
                //console.log("disabledRound:", { mspin: mspin }, disabledRound)
                if (disabledRound) {
                    let disabledRounds = disabledRound.disabled;
                    rounds.forEach((round, index, rounds) => {
                        let checkRoundNameExists = disabledRounds.includes(round.roundName)
                        if (checkRoundNameExists) {
                            rounds[index]["isDisabled"] = true;
                        } else {
                            rounds[index]["isDisabled"] = false;
                        }
                        if (disabledRound.unlocked && disabledRound.unlocked === rounds[index]["roundName"]) {
                            rounds[index]["isRoundLocked"] = false;
                        } else {
                            rounds[index]["isRoundLocked"] = true;
                        }
                    })
                } else {//When we don't have any data in Roundunlocked for the given mspin
                    rounds.forEach((round, index, rounds) => {
                        if (rounds[index]["roundOrder"] == 1) {//Keep the first round unlocked
                            rounds[index]["isRoundLocked"] = false;
                        } else {//other round will be locked
                            rounds[index]["isRoundLocked"] = true;
                        }
                    })
                }
                res.status(201).json({
                    status: status,
                    data: rounds
                })
            } else {
                res.status(404).json({
                    status: status,
                    message: "Data not found"
                })
            }
        }
    } catch (error) {
        res.status(404).json({
            status: status,
            error: error
        })
    }
}

exports.wheelRoundQuestions = async (req, res) => {
    let status = false;
    try {
        const mspin = req.body.mspin;
        const roundOrder = req.body.roundOrder;
        const rounds = await WheelRounds.findOne({ roundOrder: roundOrder }).select({ roundName: 1, route: 1, roundOrder: 1, questions: 1, _id: 0 }).sort({ "questions.cardQuestionId": 1 });
        if (rounds) {
            rounds.questions.forEach((question, index, rounds) => {//set all cards as open by default
                rounds[index]["isCardQuestionDidabled"] = false;
            })
            status = true;
            let disabledQuestionInfo = await WheelRoundLocked.findOne({ mspin: mspin, roundOrder: roundOrder }).select({ disabledQuestions: 1 });
            if (disabledQuestionInfo) {
                let disabledQuestions = disabledQuestionInfo.disabledQuestions;
                rounds.questions.forEach((question, index, rounds) => {
                    let checkQuestionDisabled = disabledQuestions[question["cardQuestionId"]];
                    if (checkQuestionDisabled !== undefined) {
                        rounds[index]["isCardQuestionDidabled"] = true;
                    } else {
                        rounds[index]["isCardQuestionDidabled"] = false;
                    }
                })
            }
            res.status(201).json({
                status: status,
                data: rounds
            })
        } else {
            res.status(404).json({
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

const getRandomNFromArr = (arr, n) => {
    n = Math.min(n, arr.length);
    let shuffled = arr.sort(function () { return .5 - Math.random() });
    let selected = shuffled.slice(0, n);
    return selected;
}

exports.getRoundDetails = async (req, res) => {
    let status = false;
    const round = req.params.roundName;
    try {
        const rounds = await Round.find({ roundName: round }).select({ roundName: 1, route: 1, questions: 1, isRoundLocked: 1, _id: 0 });
        if (!rounds.length) {
            res.status(400).json({
                status: status,
                message: "data not found"
            })
        } else {
            //Return random 5 questions 
            rounds[0].questions = getRandomNFromArr(rounds[0].questions, 5);
            status = true;
            res.status(201).json({
                status: status,
                data: rounds
            })
        }
    } catch (error) {
        res.status(404).json({
            status: status,
            error: error
        })
    }
}

exports.getWheelTitles = async (req, res) => {
    let status = false;
    try {
        const roundName = req.params.roundName;
        const round = await Round.findOne({ roundName: roundName }, { "questions.wheelQuestiontitle": 1, _id: 0 });
        if (round) {
            const wheelTitle = round.questions;
            status = true;
            return res.status(201).json({
                message: status,
                data: wheelTitle
            });
        } else {
            return res.status(404).json({
                message: status,
                data: "data not found"
            });
        }

    } catch (error) {
        res.status(404).json({
            status: status,
            error: error
        })

    }
}

exports.getCardsTitles = async (req, res) => {
    let status = false;
    try {
        const roundName = req.params.roundName;
        const wheelQuestionId = req.params.wheelQuestionId;
        const round = await Round.find({ roundName: roundName, "questions.wheelQuestionId": wheelQuestionId }, { "questions.cardQuestions": 1 });
        let q = {};
        round.forEach((roundObj) => {
            q["xyz"] = roundObj.questions
        })
        if (round) {
            status = true;
            return res.status(201).json({
                message: status,
                data: round
            });
        } else {
            return res.status(404).json({
                message: status,
                data: "Data not found"
            });
        }
    } catch (error) {
        res.status(404).json({
            status: status,
            error: error
        })

    }
}


exports.finishRound = async (req, res) => {
    let status = false;
    const round = req.body.roundName;
    const mspin = req.body.mspin;
    if (!round || !mspin) {
        res.status(400).json({
            status: status,
            message: "Please pass mspin and round"
        })
        return;
    }
    try {
        const finishedRound = await Round.findOne({ roundName: round }).select("roundOrder");
        if (finishedRound) {
            const nextRound = await Round.findOne({ roundOrder: finishedRound.roundOrder + 1 }, { "roundName": 1 });
            if (nextRound) {
                const roundLockedEntry = await Roundunlocked.findOneAndUpdate({ mspin: mspin }, { mspin: mspin, unlocked: nextRound.roundName, disbled: [round.roundName, "B-1"] }, { upsert: true });
            }
            res.status(400).json({
                status: true,
                message: "next round is unlocked"
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



