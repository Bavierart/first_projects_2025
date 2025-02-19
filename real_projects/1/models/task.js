const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true, "name is required"],
        trime:true,
        maxlength:[20, "cannot be more than 20 characters"]
    },
    completed:{
        type:Boolean,
        default:false
    }
})

module.exports = mongoose.model("Task", TaskSchema)