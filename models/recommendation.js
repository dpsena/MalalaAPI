const mongoose= require ('mongoose')

const recommendationSchema= new mongoose.Schema({

    recommendation:{type:String, required:true},
    date:{ type:Date,required:true},
    user:{type:mongoose.Schema.Types.ObjectId,ref:'User'},
    })
    
module.exports=mongoose.model('Recommendation',recommendationSchema)