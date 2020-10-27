const mongoose=require('mongoose')

const billingSchema = new mongoose.Schema({
    
titulo:{type:String,required:true},
fechaExpedicion:{type:Date,required:true},
fechaFacturacion:{type:Date,required:true},
numbBilling:{type:Date,required:true},
codBarras:{type:String,required:true,unique:true},
calidaRetenedor:{type:String,required:true},
reteIca:{type:Number},
reteIva:{type:Number},
reteFuente:{type:Number},
declarado:{type:String,required:true},
nombreImpresor:{type:String,required:true},
nitImpresor:{type:String,required:true},
user:{type:mongoose.Schema.Types.ObjectId,ref:'User'},
payment:{type:mongoose.Schema.Types.ObjectId,ref:'Payment'},
ataraxia:{type:mongoose.Schema.Types.ObjectId,ref:'Ataraxia'}
})
module.exports=mongoose.model('Billing',billingSchema)