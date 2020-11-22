const mongoose= require ('mongoose')
const pathologySchema= new mongoose.Schema({

    name:{type:String,required:true},
    characteristics:{type:String, required:true},

    })
module.exports=mongoose.model('Pathology',pathologySchema)