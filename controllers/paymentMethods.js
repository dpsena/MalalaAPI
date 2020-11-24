
const  PaymentMethodModel = require('../models/paymentMethods');


exports.create = (req, res) =>{

    if (Object.entries(req.body).length==0) {
        return res.status(400).send({
            message: 'los datos de la tarjeta son obligatorios.'
        })
    }

    const paymentMethods = new PaymentMethodModel({
        paymentMethods: req.body.paymentMethods,
        
    })

    paymentMethods.save()
    .then((dataPaymentMethod) =>{
        res.send(dataPaymentMethod)
    }).catch((error) =>{
        res.status(500).send({
            message: error.message
        })
    })
}

exports.update = (req, res) =>{
    if (Object.entries(req.body).length==0) {
        return res.status(400).send({
            message: 'los datos a actualizar deben estar llenos.'
        })
    }

    const paymentMethods =({
        paymentMethods: req.body.paymentMethods,
    })

    PaymentMethodModel.findByIdAndUpdate(req.params.id , paymentMethods, {new: true})
    .then((paymentMethodUpdate) =>{
        res.send(paymentMethodUpdate)
    })
    .catch((error) =>{
        res.status(500).send({
            message: error.message
        })
    })

}

exports.getAll = (req, res) =>{
    PaymentMethodModel.find()
        .populate('user')
        .exec()
        .then((paymentMethods) =>{
            res.send(paymentMethods)
        })
        .catch((error) =>{
            res.status(500).send({
                message: error.message
            })
        })
}

exports.getOne = (req, res) =>{
    PaymentMethodModel.findById(req.params.id)
    .populate('user')
    .exec()
    .then((paymentMethods) =>{
        res.send(paymentMethods)
    })
    .catch((error) =>{
        res.status(500).send({
            message: error.message
        })
    })
}

exports.deleteOne = (req, res) =>{
    PaymentMethodModel.findByIdAndRemove(req.params.id)
    .then((paymentMethods) =>{
        res.send(paymentMethods)
    })
    .catch((error) =>{
        res.status(500).send({
            message: error.message
        })
    })
}