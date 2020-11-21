const mongoose= require ('mongoose')
const observationSchema= new mongoose.Schema({

    numberDay:{type:Number,required:true},
    observation:{type:String, required:true},
    date:{ type:Date,required:true},
    user:{type:mongoose.Schema.Types.ObjectId,ref:'User'},
    })
module.exports=mongoose.model('Observation',observationSchema)