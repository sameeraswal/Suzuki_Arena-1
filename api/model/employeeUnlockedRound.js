const mongoose = require("mongoose");

const roundunlockedschema = new mongoose.Schema({
    mspin: {
        type: String,
        required: true
    },
    registrationNumber: {
        type: String
        
    },
    name: {
        type: String,
        required: true
    },
    disabled: {type:[String]},

    unlocked:{
        type:String
    }
});

const Roundunlocked = mongoose.model("Roundunlocked", roundunlockedschema);
module.exports = Roundunlocked;