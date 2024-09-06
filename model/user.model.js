const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    lname : {
        type : String,
        required : true
    },
    email : {
        type : String,
        unique : true,
        required : true
    },
    number : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    },
    isDelete:{
        type : Boolean,
        default : false
    }
},{
    versionKey : false,
    timestamps : true
});

module.exports = mongoose.model('users', userSchema);