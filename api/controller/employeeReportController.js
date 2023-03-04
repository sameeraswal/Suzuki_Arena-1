require("../db/connection");
const Round = require("../model/roundsSchema");
//const Report = require("../model/employeeReportSchema");
const Report = require("../model/employeeReportSchema");
const EmployeeAnswer = require("../model/employeeAnswers");

// submit all answers of each round
exports.submitAnswer = async (req, res) => {
    try {
        const roundName = req.body.roundName;
        const mspin = req.body.mspin;
        const registrationNumber = req.body.registrationNumber;

        let questionId = req.body.questionId;
        let cId = req.body.cId;
        console.log(roundName);


        // check in employyeAnswers collection if emp answer(choiceid) is already exits or not ,corresponing to the ques and mspin?
        //if ans is exits with corresponing ques and mspin then update the ans, otherwise insert { <field>: { $elemMatch: { <query1>, <query2>, ... } } }
        //the ans in employyeAnswers collection

        const round = await Round.find({ roundName: roundName }, { correctAnswers: 1, _id: 0 });
        console.log(round.correctAnswers)


        //     //const correctAnswers = round[0].correctAnswers[4].questionId;
        let correctAnswers = round[0].correctAnswers;
        
        const allQuestions = Object.keys(correctAnswers);
        // const generateAnswer = () = {}

       
        
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
        const checkAnswer = async() => {
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
        
       
        //cheeck if employee answers is already exits or not
        //const employeeAnsExists = await EmployeeAnswer.find({mspin:mspin,roundName:roundName, empAnswers : { $elemMatch : { questionId : questionId , cId: cId } } });
        const employeeAnsExists = await EmployeeAnswer.find({ mspin: mspin, roundName: roundName, empAnswers: { $elemMatch: { questionId: questionId } } });
        console.log(employeeAnsExists);
        if (employeeAnsExists.length) {
            console.log("exitsss")
            console.log("update the choice id")
            let checked = await checkAnswer();
            console.log(checked)
            //res.send("question id is already exists")
            //generateAnswer() "empAnswers" : { "$elemMatch" : { "questionId" : "2" , "cId" : "3" } }
            //employeeanswers.updateMany({mspin:mspin,roundName:roundName},{$set: {"empAnswers.$[qid].cId":"3" }},{arrayFilters: [{"qid.questionId":"2" }]})
            //employeeanswers.updateOne({mspin:mspin,roundName:roundName,empAnswer.questionId:4},{$set: {"empAnswers" :employeeAnswer}})
            const updateQuery = async()=>{
                try{
                    //console.log(EmployeeAnswer.updateOne({mspin:mspin,roundName:roundName,"$elemMatch" : { questionId : questionId} },{"$set": {empAnswers :checked}}))
                    await EmployeeAnswer.updateOne({mspin:mspin,roundName:roundName,"$elemMatch" : { questionId : questionId} },{"$set": {empAnswers :checked}});
                    res.status(201).json({
                        status: "success",
                        message: "answer is submitted",
                        Employee_result: {
                            employeeMspin: mspin,
                            employeeRegistrationNumber: registrationNumber,
                            roundName,
                            employeeReport: checked,
                            correctQuestionsAnswers
                        }
                    });

                }catch(error){
                    res.status(400).json({
                        message:error.message
                    })

                }
            }
            updateQuery();
        } else {
            console.log("not exits. save the answer")
            let checked = await checkAnswer();
            const roundReport = new EmployeeAnswer({ mspin, registrationNumber, roundName, empAnswers: checked });
            await roundReport.save();
            res.status(201).json({
                status: "success",
                message: "answer is submitted",
                Employee_result: {
                    employeeMspin: mspin,
                    employeeRegistrationNumber: registrationNumber,
                    roundName,
                    employeeReport: checked,
                    correctQuestionsAnswers
    
                }
            });

        }


        // res.status(201).json({
        //     status: "success",
        //     message: "answer is submitted",
        //     Employee_result: {
        //         employeeMspin: mspin,
        //         employeeRegistrationNumber: registrationNumber,
        //         roundName,
        //         //employeeReport: employeeAnswer,
        //         correctQuestionsAnswers

        //     }
        // });
        //     //const correctAnswers = Object.keys(round.correctAnswers);

    } catch (error) {
        res.status(404).json({
            message: "data not found",

        })
    }

}

//submit One answer
exports.submitOneAnswer = async (req, res) => {
    try {
        const roundName = req.body.roundName;
        //const ans = employeeAnswers.emplAnswers =roundName

        const mspin = req.body.mspin;
        const registrationNumber = req.body.registrationNumber;

        const questionId = req.body.attempted_question.questionId;
        const cId = req.body.req.body.attempted_question.cId;
        // const  empAnswer = {
        //     roundName : roundName,
        //     answers :attempted_question

        //     }
        console.log(roundName);
        const round = await Round.find({ roundName: roundName }, { correctAnswers: 1, _id: 0 });
        //console.log(attempted_question);

        const correctAnswers = round[0].correctAnswers;
        console.log(correctAnswers)
        // const correctAns = Object.assign({}, ...round)
        // console.log(correctAns)
        // console.log("correctAnswersssssss" +Array.isArray(correctAns))
        //console.log(correctAns._doc.correctAnswers)
        //res.send(correctAnswers)
        const allQuestions = Object.keys(correctAnswers);

        console.log("allQuestionsssss" + allQuestions)
        //const total = allQuestions.length;
        //console.log(total)
        //let score = 0;
        // for (let i = 0; i < total; i++) {
        //     let question_number = allQuestions[i];
        //     if (
        //         !!attempted_question[question_number] &&
        //         correctAnswers[question_number] == attempted_question[question_number]
        //     ) {
        //         score = score + 1;
        //     }
        // }
        let employeeAnswer = {};
        allQuestions.forEach((qId) => {
            if (
                !!attempted_question[questionId] &&
                correctAnswers[qId] == attempted_question[questionId]
            ) {
                //score = ++score;
                //employeeAnswer[question_number] = true;
                employeeAnswer[questionId] = qId;
                employeeAnswer[cId] = cId;
                employeeAnswer[isCorrect] = true;

            } else if (attempted_question[questionId] == "") {
                employeeAnswer[questionId] = "Not Attempted";

            } else {
                //employeeAnswer[question_number] = false;
                employeeAnswer[questionId] = questionId;
                employeeAnswer[cId] = cId;
                employeeAnswer[isCorrect] = false;


            }
        });
        console.log(employeeAnswer);
        const answer = new EmployeeAnswer({ mspin, registrationNumber, roundName, empAnswers: employeeAnswer });
        await answer.save()

        // const answers = new EmployeeAnswers({mspin, registrationNumber,empAnswers:empAnswer});
        // await answers.updateOne({roundName:empAnswer.roundName,mspin},{$push:{mspin, registrationNumber,empAnswers:empAnswer}})
        //const data = await answers.save();
        // const report = new Report({mspin, registrationNumber, roundName, score,total})
        // const data = await report.save();
        // const round = await Round.find({ roundName: roundName }, { correctAnswers: 1, _id: 0 });
        // const cr={...round}
        //console.log(data);
        //  const objj= round.reduce((acc,element)=>{
        //     //return {...acc,...element}
        //     let a = {...acc,...element}
        //     return a;

        //  },{});
        //  console.log(objj)
        //  const correctAnswers = objj._doc.correctAnswers;

        // const correctAnswers = round[0].correctAnswers;
        // console.log(correctAnswers)
        // const correctAns = Object.assign({}, ...round)
        // console.log(correctAns)
        // console.log("correctAnswersssssss" +Array.isArray(correctAns))
        //console.log(correctAns._doc.correctAnswers)
        //res.send(correctAnswers)
        // const allQuestions = Object.keys(correctAnswers);

        // console.log("allQuestionsssss" + allQuestions)
        // const total = allQuestions.length;
        // //console.log(total)
        // let score = 0;
        // for (let i = 0; i < total; i++) {
        //     let question_number = allQuestions[i];
        //     if (
        //         !!attempted_question[question_number] &&
        //         correctAnswers[question_number] == attempted_question[question_number]
        //     ) {
        //         score = score + 1;
        //     }
        // }
        // let employeeAnswer = {};
        // allQuestions.forEach((question_number) => {
        //     if (
        //         !!attempted_question[question_number] &&
        //         correctAnswers[question_number] == attempted_question[question_number]
        //     ) {
        //         score = ++score;
        //         employeeAnswer[question_number] = true;
        //     } else if(attempted_question[question_number] ==""){
        //         employeeAnswer[question_number] = "Not Attempted";

        //     }else {
        //         employeeAnswer[question_number] = false;


        //     }
        // });
        //console.log("oooooooooooooooooo"+employeeAnswer)

        // const employeeResult = allQuestions.map((question_number)=>{
        //     //let question_number = allQuestions[question];
        //     if (
        //         !!attempted_question[question_number] &&
        //         correctAnswers[question_number] == attempted_question[question_number]
        //     ) {
        //          score = score++;
        //          console.log(score)
        //          return score;
        //     }})
        //console.log(score)
        //Report.save();
        // const report = new Report({mspin, registrationNumber, roundName, score,total})
        // const data = await report.save();
        //console.log("ddddddddd"+data);


        res.status(201).json({
            status: "success",
            message: "answer one is submitted",
            Employee_result: {
                employeeAnswer

            }
        });
        //const correctAnswers = Object.keys(round.correctAnswers);

    } catch (error) {
        res.send(error)

    }

}