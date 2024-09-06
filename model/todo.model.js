const mongoose = require('mongoose');

const todoSchema = mongoose.Schema({
    userId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "users"
    },
    title : {
        type :String,
        required : true
    }
},{
    versionKey: false
});

module.exports = mongoose.model('todos', todoSchema);
