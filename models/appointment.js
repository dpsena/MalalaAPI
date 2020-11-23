
const mongoose= require ('mongoose')
const appointmentSchema= new mongoose.Schema({

    date:{type:String,required:true},
    description:{type:String, required:true},
    status:{ type: Boolean, require:true},
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
   
    })
module.exports=mongoose.model('Appointment',appointmentSchema)