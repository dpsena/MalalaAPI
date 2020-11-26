const mongoose = require('mongoose');

const paymentMethodSchema = new mongoose.Schema({
    
    paymentMethods: {type: String},
   
})
module.exports = mongoose.model('PaymentMethods', paymentMethodSchema);
