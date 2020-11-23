const paymentMethods = require('../models/paymentMethods');
const  PaymentMethodModel = require('../models/payment');


exports.create = (req, res) =>{

    if (Object.entries(req.body).length==0) {
        return res.status(400).send({
            message: 'los datos del pago son obligatorios.'
        })
    }

    const paymentMethods = new PaymentMethodModel({
        paymentMethod: req.body.paymentMethod,
        
    })

    paymentMethods.save()
    .then((dataPayment) =>{
        res.send(dataPayment)
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
        paymentMethod: req.body. paymentMethod,
    })

    PaymentMethodModel.findByIdAndUpdate(req.params.id , paymentMethods, {new: true})
    .then((paymentUpdate) =>{
        res.send(paymentUpdate)
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