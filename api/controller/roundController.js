require("../db/connection");
const Round = require("../model/roundsSchema");
//const employeeUnlockedRound = require("../model/employeeUnlockedRound"); Roundunlocked
const Roundunlocked = require("../model/employeeUnlockedRound");

// exports.addRound = async(req,res) =>{
//     const quizName = new Round({
//         roundName: "7",
//         questions: [{
//             id : "1",
//             video: "wwww.google.com",
//             question: "what is the capital of india ?",
//             choices: [
//                 {
//                     cId: "1",
//                     name: "haryana",
//                     image: "xyz"
//                 }, {
//                     cId: "2",
//                     name: "kota",
//                     image: "xyz"
//                 },
//                 {
//                     cId: "3",
//                     name: "delhi",
//                     image: "xyz"
//                 },
//                 {
//                     cId: "4",
//                     name: "mumbai",
//                     image: "xyz"
//                 }
//             ],
//             type : "MCQS",
//             correctAnswer : "2"
//         },
//         {
//             id : "2",
//             video: "wwww.google.com",
//             question: "what is json ?",
//             choices: [
//                 {
//                     cId: "1",
//                     name: "data type",
//                     image: "xyz"
//                 }, {
//                     cId: "2",
//                     name: "datat type 2",
//                     image: "xyz"
//                 },
//                 {
//                     cId: "3",
//                     name: "data type 3",
//                     image: "xyz"
//                 },
//                 {
//                     cId: "4",
//                     name: "datat type 4",
//                     image: "xyz"
//                 }
//             ],
//             type : "MCQS",
//             correctAnswer : "3"
//         },
//         {
//             id : "3",
//             video: "wwww.google.com",
//             question: "what is json ?",
//             choices: [
//                 {
//                     cId: "1",
//                     name: "data type",
//                     image: "xyz"
//                 }, {
//                     cId: "2",
//                     name: "datat type 2",
//                     image: "xyz"
//                 },
//                 {
//                     cId: "3",
//                     name: "data type 3",
//                     image: "xyz"
//                 },
//                 {
//                     cId: "4",
//                     name: "datat type 4",
//                     image: "xyz"
//                 }
//             ],
//             type : "MCQS",
//             correctAnswer : "4"
//         }],
//         correctAnswers :{
//             1:2,
//             2:3,
//             3:4

//         }
//     });

//     const addround = await quizName.save();
//     try {
//         if(!addround){
//             console.log("error during saving data")
//             res.status(401).json({
//                 error : "error"
//             })

//         }else{
//             console.log("employee added succesfully")
//             res.status(201).json({
//                 status : "success",
//                 message :"employee addes succesfully"
//             })

//         }

//     } catch (error) {
//         res.status(401).json({
//             error : error
//         })

//     }

// }

exports.getRoundLists = async (req, res) => {
    let status = false;
    try {
        console.log("inside")
        // const mspin = req.body.mspin;
        // const name = req.body.name;
        //const roundName= req.body.roundName;
        //const rounds = await Round.find({}).select({ roundName: 1, isRoundLocked: 1, _id: 0 });
        const rounds = await Round.find({}).select({ roundName: 1, _id: 0 }).sort({ roundOrder: 1 });
        //const rounds = await Round.find().select("roundName -_id");
        console.log("rounds before updataion=========", rounds)
        if (rounds.length) {
            status = true;

            // let disabledRound = await Roundunlocked.findOne({ mspin: mspin, name: name }).select({ disabled: 1 });
            // console.log("disabledRounddddddddddddd==========",disabledRound)
            // if (disabledRound) {
            //     let disabledRounds = disabledRound.disabled;
            //     //console.log(disabledRounds)
            //     console.log("disabledRoundssssss from collection==========", disabledRounds)


            //     rounds.forEach((round, index, rounds) => {
            //         //console.log("inside foreach loop rounddddddd=======", round)
            //         let checkRoundNameExists = disabledRounds.includes(round.roundName)

            //         if (checkRoundNameExists) {
            //             rounds[index]["isRoundLocked"] = true;
            //             //round["isRoundLocked"] = false;
            //         } else {
            //             rounds[index]["isRoundLocked"] = false;
            //             //round["isRoundLocked"] = true;
            //         }
            //     })
            //     console.log("rounds aftrer updataion=========", rounds)
            //     // disabledRounds.push(roundName);

            //     // disabledRound.shift();
            //     // console.log(disabledRounds);

            //     res.status(201).json({
            //         status: status,
            //         data: rounds
            //     })

            // } else {
            //     status = false
            //     res.status(401).json({
            //         status: status,
            //         message: "dataaa not found"
            //     })

            // }
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

