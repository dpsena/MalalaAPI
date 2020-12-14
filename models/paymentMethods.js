const mongoose = require('mongoose');
const paymentMethodSchema = new mongoose.Schema({
    paymentMethods: {type: String, required: true},
})
module.exports = mongoose.model('Payment', paymentMethodSchema);