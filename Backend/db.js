/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
const mongoose = require('mongoose');
require('dotenv').config();
const MONGO_URI=process.env.MONGO_URI;

const connectToMongo = ()=>{
    mongoose.connect(MONGO_URI).then(() => {
        console.log("Connected to Database")
    }
    ).catch((err) => {console.log(err)})
}

module.exports = connectToMongo;