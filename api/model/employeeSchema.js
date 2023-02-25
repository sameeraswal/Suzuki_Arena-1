const mongoose = require("mongoose");
//const bcrypt = require("bcryptjs");
//const jwt = require("jsonwebtoken");

const employeeSchema = new mongoose.Schema({
    mspin : {
        type : String,
        required : true
    },
    name : {
        type : String,
        required : true
    },
    dealarship : {
        type : String,
        required : true
    },
    registrationNumber : {
        type : String,
        required : true,
    }
    // cpassword : {
    //     type : String,
    //     required : true
    // }
    // tokens:[
    //     {
    //         token:{
    //             type : String,
    //             required :true
    //         }
    //     }
    // ]
});

//employeeSchema.save()

//hashing the password entered by user
// employeeSchema.pre('save', async function (next){ //do not use arrow function here cuz this keyword can't work with arrow fucntion
//     if(this.isModified('password')) {
//         this.password = await bcrypt.hash(this.password, 12);  //use await keyword otherwise password wont be hashed
//         this.cpassword = await bcrypt.hash(this.cpassword, 12)
//     }
//     next();
// });

//generating token
// userSchema.methods.generateAuthToken = async function(){
//     try{
//         let createToken = jwt.sign({_id:this._id}, process.env.SECRET_KEY);
//         this.tokens = this.tokens.concat({token : createToken});
//         await this.save();
//         console.log(createToken);
//         return createToken;
        

//     }catch(error){
//         console.log(error);

//     }
// }

const Employee = mongoose.model("EMPLOYEE",employeeSchema);
//console.log("kkkkkkk"+Employee);

module.exports = Employee;