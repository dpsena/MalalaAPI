const mongoose= require ('mongoose')
const observationSchema= new mongoose.Schema({

    numberDay:{type:Number,required:true},
    observation:{type:String, required:true},
    nameprofessional:{type:String, required:true},
    idProfessionalNumber:{ type:Number,required:true},
    date:{ type:Date,required:true},
    })
module.exports=mongoose.model('Observation',observationSchema)