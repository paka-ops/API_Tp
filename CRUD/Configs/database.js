const mongoose = require('mongoose')
require('dotenv').config();
const dbURI = process.env.DB_URI;
const connectDb = async ()=>{
    try{
        await mongoose.connect(dbURI);
        console.log("DataBase is connected");

    }catch(error){
        console.log ("error",error);
        process.exit(1)
    }
}
module.exports = connectDb
