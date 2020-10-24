const mongoose = require('mongoose')

const recordSchema = new mongoose.Schema ({

    dateAndHour:{type:Date,required:true},
    pathology:{type:String, required:true},
    observations:{ type:String,required:true},
    recommendations:{type:String,required:true},
    printer:{ type:Boolean,required:true},
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
})

module.exports=mongoose.model('Record',recordSchema)