const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
    date: {type: Date, required: true },
    email: {type: String, required: true},
    status: {type: Boolean, required: true},
    paymentMethod: {type: String, required: true},
    totalPayment: {type: Number, required: true},
    numberCard: {type: Number, required: true},
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
})

module.exports = mongoose.model('Payment', paymentSchema);