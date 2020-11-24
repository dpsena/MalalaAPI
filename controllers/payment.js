const payment = require('../models/payment');
const PaymentModel = require('../models/payment');


exports.create = (req, res) =>{

    if (Object.entries(req.body).length==0) {
        return res.status(400).send({
            message: 'los datos del pago son obligatorios.'
        })
    }

    const payment = new PaymentModel({
        date: req.body.date,
        email:req.body.email,
        status: req.body.status,
        paymentMethod: req.body.paymentMethod,
        totalPayment: req.body.totalPayment,
        numberCard:req.body.numberCard,
        user: req.body.user
    })

    payment.save()
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

    const payment =({
        date: req.body.date,
        email:req.body.email,
        status: req.body.status,
        paymentMethod: req.body.paymentMethod,
        totalPayment: req.body.totalPayment,
        numberCard:req.body.numberCard,
        user: req.body.user
    })

    PaymentModel.findByIdAndUpdate(req.params.id , payment, {new: true})
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
    PaymentModel.find()
        .populate('user')
        .exec()
        .then((payments) =>{
            res.send(payments)
        })
        .catch((error) =>{
            res.status(500).send({
                message: error.message
            })
        })
}

exports.getOne = (req, res) =>{
    PaymentModel.findById(req.params.id)
    .populate('user')
    .exec()
    .then((payment) =>{
        res.send(payment)
    })
    .catch((error) =>{
        res.status(500).send({
            message: error.message
        })
    })
}

exports.deleteOne = (req, res) =>{
    PaymentModel.findByIdAndRemove(req.params.id)
    .then((payment) =>{
        res.send(payment)
    })
    .catch((error) =>{
        res.status(500).send({
            message: error.message
        })
    })
}