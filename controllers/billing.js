const billing = require('../models/billing')
const BillingModel = require('../models/billing')
exports.create = (req, res) => {
    if (Object.entries(req.body).length == 0) {
        return res.status(400).send({
            message: 'los datos  del usuario son obligatorios.'
        })
    }
    const billing = BillingModel({
        titulo: req.body.titulo,
        fechaExpedicion: req.body.fechaExpedicion,
        fechaFacturacion: req.body.fechaFacturacion,
        numbBilling: req.body.numbBilling,
        codBarras: req.body.codBarras,
        calidaRetenedor: req.body.calidaRetenedor,
        reteIca: req.body.reteIca,
        reteIva: req.body.reteIva,
        reteFuente: req.body.reteFuente,
        declarado: req.body.declarado,
        nombreImpresor: req.body.nombreImpresor,
        nitImpresor: req.body.nitImpresor,
        user: req.body.user,
        payment: req.body.payment,
        ataraxia:req.body.ataraxia
    })
    billing.save()
        .then((dataUser) => {
            res.send(dataUser)
        })
        .catch((error) => {
            res.status(500).send({
                message: error.message
            })
        })
}
exports.update = (req, res) => {
    if (Object.entries(req.body).length == 0) {
        return res.status(400).send({
            message: 'los datos  del usuario son obligatorios.'
        })
    }
    const billing = {
        fechaExpedicion: req.body.fechaExpedicion,
        fechaFacturacion: req.body.fechaFacturacion,
        numbBilling: req.body.numbBilling,
        codBarras: req.body.codBarras,
        calidaRetenedor: req.body.calidaRetenedor,
        reteIca: req.body.reteIca,
        reteIva: req.body.reteIva,
        reteFuente: req.body.reteFuente,
        nombreImpresor: req.body.nombreImpresor,
        nitImpresor: req.body.nitImpresor,
        user: req.body.user,
        payment: req.body.payment
    }
    
    BillingModel.findByIdandUpdate(req.params.id,billing,{new:true})
    
    .then((dataBilling) => {
        res.send(dataBilling)
    }).cach((error) => {
        res.status(500).send({
            message: error.message
        })
    })
}