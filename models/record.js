const mongoose = require('mongoose')
const recordSchema = new mongoose.Schema ({

    date:{type:String,required:true},
    hour:{type:String, required:true},
    pathology:{type:String, required:true},
    observations:{ type:String,required:true},
    recommendations:{type:String,required:true},
    printer:{ type:Boolean,required:true},
})

module.exports=mongoose.model('Record',recordSchema)