const mongoose = require("mongoose");
const DATABASE_URL = process.env.DATABASE || "mongodb://localhost:27017";
//const db="mongodb://localhost:27017/suzukiQuiz";
//mongoose.connect('mongodb://localhost:27017/suzukiQuiz', {useNewUrlParser: true});
// mongoose.connect(db,{
//     useNewUrlParser: true,
//     useUnifiedTopology: true,

// },())

mongoose.set('strictQuery', false);
const connect_db = async(db_url) => {
    try{
        const DB_OPTIONS={
            dbName:"suzukiQuiz"
        }
        await mongoose.connect(db_url,DB_OPTIONS);
        console.log("connected succesfully")

    }catch(err){
        console.log(err)

    }

}
// mongoose.connect(db_url, {
//     // useUnifiedTopology: true,
//     // useNewUrlParser: true
//     // strictQuery: false
// }).then(() => {
//     console.log("db connection is successfull");
// }).catch((err) => {
//     console.log(err);
// });
// mongoose.connect(db,
//   {
//     useNewUrlParser: true,
//     useFindAndModify: false,
//     useUnifiedTopology: true
//   }
// );
connect_db(DATABASE_URL);
module.exports = connect_db;