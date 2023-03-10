require("../db/connection");
const Round = require("../model/roundsSchema");
//const employeeUnlockedRound = require("../model/employeeUnlockedRound"); Roundunlocked
const Roundunlocked = require("../model/employeeUnlockedRound");


exports.getRoundLists = async (req, res) => {
    let status = false;
    try {
        const mspin = req.body.mspin;
        //const name = req.body.name;
        const rounds = await Round.find({}).select({ roundName: 1,route:1, roundOrder: 1, _id: 0 }).sort({ roundOrder: 1 });
        console.log("1111111111 rounds before updataion=========", rounds)

        if (rounds.length) {
            rounds.forEach((round, index, rounds) => {
                rounds[index]["isDisabled"] = false;
            })
            status = true;
            let disabledRound = await Roundunlocked.findOne({ mspin: mspin }).select({ disabled: 1, unlocked: 1 });
            console.log("disabledRound:",{ mspin: mspin },disabledRound)
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
                console.log("rounds aftrer updataion=========", rounds)

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
const getRandomNFromArr = (arr,n)=>{
    n = Math.min(n,arr.length);
    let shuffled = arr.sort(function(){return .5 - Math.random()});
    let selected = shuffled.slice(0,n);
    return selected;
}

exports.getRoundDetails = async (req, res) => {
    let status = false;
    const round = req.params.roundName;
    try {
        //const rounds = await Round.find({ roundName: round }, { roundName: 1, questions: 1 });
        //const rounds = await Round.find({ roundName: round }, { roundName: 1, questions: 1, isRoundLocked: 1});
        const rounds = await Round.find({ roundName: round }).select({ roundName: 1, route: 1, questions: 1, isRoundLocked: 1, _id: 0 });
        console.log("==============")
        console.log(rounds);
        if (!rounds.length) {
            res.status(400).json({
                status: status,
                message: "data not found"
            })

        } else {
            //Return random 5 questions 
            rounds[0].questions = getRandomNFromArr(rounds[0].questions,5);
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
        console.log(round, roundName)
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
        //const round = await Round.findOne({ roundName: roundName, "questions.wheelQuestionId ": wheelQuestionId},{"questions.cardQuestions":1})
        //const round = await Round.find({$and: [{roundName: 2}, {questions:{"questions.wheelQuestionId": 2}}]},{"questions.cardQuestions":1})
        const round = await Round.find({ roundName: roundName, "questions.wheelQuestionId": wheelQuestionId }, { "questions.cardQuestions": 1 });
        //const round = await Round.findOne({ roundName: roundName});
        console.log(round)
        let q = {};
        round.forEach((obj) => {
            q["xyz"] = obj.questions


        })
        console.log(q)
        //console.log(round)
        //, { "questions.wheelQuestiontitle": 1, _id: 0 }
        if (round) {
            //const wheelTitle = round.questions;
            //let arrayOfCardDeatils = round.questions
            status = true;
            return res.status(201).json({
                message: status,
                data: round
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
        console.log("finishedRound: ", finishedRound)
        if (finishedRound) {
            const nextRound = await Round.findOne({ roundOrder: finishedRound.roundOrder + 1 }, { "roundName": 1 });
            console.log("nextRound:", nextRound, nextRound.length);
            if (nextRound) {
                const roundLockedEntry = await Roundunlocked.findOneAndUpdate({ mspin: mspin }, { mspin: mspin, unlocked: nextRound.roundName, disbled: [round.roundName, "B-1"] }, { upsert: true });
                //update({_id : ... },{$set : { "history.$[section1].status" : 1, "history.$[section2]. completedDate" : new Date()} , { arrayFilters: [ { "section1": sectionID1,  "section2": sectionID2} } ] })
                console.log("roundLockedEntry",roundLockedEntry)
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



