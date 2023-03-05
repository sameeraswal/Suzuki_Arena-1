require("../db/connection");
const Round = require("../model/roundsSchema");

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
        const rounds = await Round.find({}).select({ roundName: 1, _id: 0 });
        //const rounds = await Round.find().select("roundName -_id");
        //console.log(rounds)
        if (rounds.length) {
            status = true;
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
        res.json({
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
        const rounds = await Round.find({ roundName: round }).select("roundName questions");
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
        res.json({
            status: status,
            error: error
        })
    }
}

