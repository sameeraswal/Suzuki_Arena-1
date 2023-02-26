const mongoose = require("mongoose");
const DATABASE_URL = process.env.DATABASE || "mongodb://localhost:27017";

const connect_db = async (db_url) => {
    try {
        const DB_OPTIONS = { dbName: "suzukiQuiz" }
        await mongoose.connect(db_url, DB_OPTIONS);
        console.log("mongodb connected successfully")
    } catch (err) {
        console.log(`failed to connect to mongodb ${err}`)
    }
}

connect_db(DATABASE_URL);
module.exports = connect_db;