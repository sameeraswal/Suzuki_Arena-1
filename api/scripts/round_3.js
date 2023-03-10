require("../db/connection");
const Round = require("../model/roundsSchema");
var XLSX = require('xlsx')
var workbook = XLSX.readFile('files/spreadsheet01.xlsx');
var sheet_name_list = workbook.SheetNames;
var xlData = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);
console.log(xlData);

let data={};
for(let i=0;i<xlData.length;i++){
    let roundId = xlData[i]["Round"];
    if(data[roundId]===undefined){
        
    }
    let round={};
    round.roundName = "1-A";
    round.roudOrder = 1;
    round.route = "/firstmile";
    round.isRoundLocked = false;
    round.questions = [];
    round.correctAnswers = [];
    for(let i=0;i<xlData.length;i++){
        for(let j=0;j<xlData[i].length;j++){
            if(typeof xlData[i][j] == "string"){
                xlData[i][j] = xlData[i][j].trim();
            }
        }
        let question={};
        question.questionId = xlData[i]["sNo"];
        question.question = xlData[i]["question"];
        question.fileType = xlData[i]["type"];
        question.questionUrl = xlData[i]["filename"];
        question.type = "MCQs";
        question.choices=[];
        question.choices.push(
            {
                "cId":1,
                "name":xlData[i]["option1"]
            },
            {
                "cId":2,
                "name":xlData[i]["option2"]
            },{
                "cId":3,
                "name":xlData[i]["option3"]
            },{
                "cId":3,
                "name":xlData[i]["option4"]
            }
        );

        let answer = {};
        let cId;
        if(xlData[i]["correctOption"]===xlData[i]["option1"]){
            cId = 1;
        }else if(xlData[i]["correctOption"]===xlData[i]["option2"]){
            cId = 2;
        }else if(xlData[i]["correctOption"]===xlData[i]["option3"]){
            cId = 3;
        }else if(xlData[i]["correctOption"]===xlData[i]["option4"]){
            cId = 4;
        }else{
            console.log("Correct anser not found for row: ",xlData);
            continue;
        }
        answer.questionId = question.questionId;
        answer.cId = cId;

        round.questions.push(question);
        round.correctAnswers.push(answer);
    }
    console.log("Saving:",round)
    const roundObj = new Round(round);
    roundObj.save().then(item => {
        console.log("Round saved to database. Result:",item);
    }).catch(err => {
        console.log("Error: ",err)
    });
}
