const mongoose = require('mongoose');

const AtaraxiaSchema = new mongoose.Schema({
    nit: {type: Number, required: true, unique:true },
    tradeName: {type: String, required: true},
    address: {type: String, required: true},
    telephone: {type: Number, required: true },
    email:{type:String, required:true,unique:true },
})

module.exports=mongoose.model('Ataraxia',AtaraxiaSchema);