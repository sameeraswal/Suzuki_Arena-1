require("../db/connection");
const employeeSchemaObj = require("../model/employeeSchema");
var XLSX = require('xlsx')
var workbook = XLSX.readFile('files/employees.xlsx');
var sheet_name_list = workbook.SheetNames;
var xlData = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);

insert(xlData)

async function insert(xlData) {
    for (let i = 0; i < xlData.length; i++) {

        let item = {};
        item.registrationNumber = xlData[i]["S No"];
        item.region = xlData[i]["REGION"];
        item.mspin = xlData[i]["MSPIN"];
        item.dealership = xlData[i]["DEALER NAME"];
        item.name = xlData[i]["NAME"];
        item.category = xlData[i]["Category"];
        console.log("Saving:", item)
        const itemObj = new employeeSchemaObj(item);
        await itemObj.save().then(x => {
            console.log("Record saved to database. Result:", x);
        }).catch(err => {
            console.log("Error: ", err)
        });
    }
    
}



