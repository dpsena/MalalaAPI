const BillingModel = require('../models/billing')
exports.create = async (req, res) => {
    try {
        if (Object.entries(req.body).length == 0) {

            return res.status(400).send({
                message: 'los datos  del usuario son obligatorios.'
            })
        }
        const billing = BillingModel({
            title: req.body.titulo,
            expeditionDate: req.body.expeditionDate,
            billingDate: req.body.billingDate,
            numbBilling: req.body.numbBilling,
            barcode: req.body.barcode,
            retainer: req.body.retainer,
            reteIca: req.body.reteIca,
            reteIva: req.body.reteIva,
            reteFuente: req.body.reteFuente,
            declared: req.body.declared,
            printerName: req.body.printerName,
            nitPrinter: req.body.nitPrinter,
            user: req.body.user,
            payment: req.body.payment,
            ataraxia: req.body.ataraxia
        })
        const dataUser = await billing.save()
        res.send(dataUser)
    } catch (error) {
        res.status(500).send({
            message: error.message
        })
    }
}
exports.update = async (req, res) => {
    try {
        if (Object.entries(req.body).length == 0) {

            return res.status(400).send({
                message: 'los datos  del usuario son obligatorios.'
            })
        }
        const billing = {

            expeditionDate: req.body.expeditionDate,
            billingDate: req.body.billingDate,
            numbBilling: req.body.numbBilling,
            barcode: req.body.barcode,
            retainer: req.body.calidaRetenedor,
            reteIca: req.body.reteIca,
            reteIva: req.body.reteIva,
            reteFuente: req.body.reteFuente,
            printerName: req.body.nombreImpresor,
            nitPrinter: req.body.nitImpresor,
            user: req.body.user,
            payment: req.body.payment
        }
        const dataBilling = await BillingModel.findByIdandUpdate(req.params.id, billing, { new: true })
        res.send(dataBilling)
    } catch (error) {
        res.status(500).send({
            message: error.message
        })
    }
}
exports.getAll = async (req, res) => {
    try {
        const billing = await BillingModel.find()
        res.send(billing)
    } catch (error) {

        return res.status(500).send({
            message: error.message
        })
    }
}
exports.getOne = async (req, res) => {
    try {
        const billing = await BillingModel.findById(req.params.id)
            .populate('user')
            .populate('payment')
            .populate('ataraxia')
        res.send(billing)
    } catch (error) {
        res.status(500).send({
            message: error.message
        })
    }
}
exports.deleteOne = async (req, res) => {
    try {
        const billing = await BillingModel.findById(req.params.id)
        res.send(billing)
    } catch (error) {
        res.status(500).send({
            message: error.message
        })
    }
}