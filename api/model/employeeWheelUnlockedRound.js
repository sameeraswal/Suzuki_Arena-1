const mongoose = require("mongoose");
/**
 * 
 * 
 {
    "mspin":"123",
    "roundOrder":"1"
    "WheelRoundLocked":{"1":1,"3":1,"7":1}
}
 * 
 */

const wheelRoundunLockedSchema = new mongoose.Schema({
    mspin: {
        type: String,
        required: true
    },
    roundName:{
        type: String
    },
    name: {
        type: String,
        required: true
    },
    disabledQuestions: {}
});

//const emplyeeWheelUnlockedRound = mongoose.model("wheelroundlocks", wheelRoundunLockedSchema);
const wheelroundlocks = mongoose.model("wheelroundlocks", wheelRoundunLockedSchema);

//console.log("wheelroundlocks",emplyeeWheelUnlockedRound)

//module.exports = emplyeeWheelUnlockedRound;
module.exports = wheelroundlocks;