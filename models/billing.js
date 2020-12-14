const mongoose = require('mongoose')
const billingSchema = new mongoose.Schema({
    title: { type: String, required: true },
    expeditionDate: { type: Date, required: true },
    billingDate: { type: Date, required: true },
    numbBilling: { type: Date, required: true },
    barcode: { type: String, required: true, unique: true },
    retainer: { type: String, required: true },
    reteIca: { type: Number },
    reteIva: { type: Number },
    reteFuente: { type: Number },
    declared: { type: String, required: true },
    printerName: { type: String, required: true },
    nitPrinter: { type: String, required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    payment: { type: mongoose.Schema.Types.ObjectId, ref: 'Payment' },
    ataraxia: { type: mongoose.Schema.Types.ObjectId, ref: 'Ataraxia' }
})
module.exports = mongoose.model('Billing', billingSchema)