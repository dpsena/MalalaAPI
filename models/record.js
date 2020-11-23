const mongoose = require('mongoose')

const recordSchema = new mongoose.Schema ({

    dateAndHour:{type:Date,required:true},
    pathology:{type: mongoose.Schema.Types.ObjectId, ref: 'Pathology'},
    observations:{type: mongoose.Schema.Types.ObjectId, ref: 'Observation'},
    recommendations:{type: mongoose.Schema.Types.ObjectId, ref: 'Recommendation'},
    printer:{ type:Boolean},
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
})

module.exports=mongoose.model('Record',recordSchema)