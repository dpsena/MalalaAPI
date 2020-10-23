
const mongoose= require ('mongoose')
const appointmentSchema= new mongoose.Schema({

    date:{type:String,required:true},
    time:{type:String, required:true},
    description:{type:String, required:true},
    professional:{type:String, required:true},
    patient:{type:String, required:true}

    
    })
module.exports=mongoose.model('Appointment',appointmentSchema)