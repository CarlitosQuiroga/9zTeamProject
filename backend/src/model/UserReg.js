const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const userReg = new Schema({
    identification:{
        type: Number,
        required: false 
    },
    username:{
        type: String,
        required: true
    },    
    email:{
        type: String,
        required: true
    },
    password: {
        type: Object,
        required: true
    }

},{collection:'users'});
module.exports = mongoose.model("userReq", userReg);