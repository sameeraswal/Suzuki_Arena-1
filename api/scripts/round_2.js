require("../db/connection");
const Round = require("../model/wheelRoundsSchema");
var XLSX = require('xlsx')
var workbook = XLSX.readFile('files/round_2.xlsx');
var sheet_name_list = workbook.SheetNames;
var xlData = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);

insert(xlData);
async function insert(xlData) {
    
    let data = {};
    for (let i = 0; i < xlData.length; i++) {
        for (let j = 0; j < xlData[i].length; j++) {
            if (typeof xlData[i][j] == "string") {
                xlData[i][j] = xlData[i][j].trim();
            }
        }
        let roundOrder = xlData[i]["Round"];
        let roundName = xlData[i]["wheelQuestiontitle"];

        if (data[roundOrder] === undefined) {
            data[roundOrder] = {};
            data[roundOrder]["roundOrder"] = roundOrder;
            data[roundOrder]["roundName"] = roundName;
            data[roundOrder]["questions"] = [];
            data[roundOrder]["correctAnswers"] = [];
        }

        let question = {};
        let questionId = data[roundOrder]["questions"].length + 1;
        question.cardQuestionId = questionId;
        question.video = xlData[i]["video"];
        question.cardTitle = xlData[i]["cardtitle"];
        question.isCorrect = (xlData[i]["isValidChoice"] === "Y" ? true : false);
        question.cardQuestion = xlData[i]["cardQuestion"];

        data[roundOrder]["questions"].push(question);

        let answer = {};
        answer.cardQuestionId = questionId;
        answer.cId = xlData[i]["Ans"];
        data[roundOrder]["correctAnswers"].push(answer);
    }

    for(key in data){
        let itemObj = data[key];
        const roundObj = new Round(itemObj);
        console.log("Saving", roundObj);
        await roundObj.save().then(item => {
            console.log("Round saved to database. Result:", item);
        }).catch(err => {
            console.log("Error: ", err)
        });
    }
}
