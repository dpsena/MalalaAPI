const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
    date: {type: Date, required: true },
    time: {type: String, required: true},
    status: {type: Boolean, required: true}
})

module.exports = mongoose.model('Payment', paymentSchema);