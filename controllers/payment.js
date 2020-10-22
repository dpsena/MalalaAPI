const payment = require('../models/payment');
const PaymentModel = require('../models/payment');
const user = require('../models/user');

exports.create = (req, res) =>{

    if (Object.entries(req.body).length==0) {
        return res.status(400).send({
            message: 'los datos del pago son obligatorios.'
        })
    }

    const payment = new PaymentModel({
        date: req.body.date,
        time: req.body.time,
        status: req.body.status
    })

    user.save()
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
        time: req.body.time,
        status: req.body.status
    })

    PaymentModel.findByIdAndUpdate(req.params.id , payment)
    .then((paymentUpdate) =>{
        res.send(paymentUpdate)
    })
    .catch((error) =>{
        res.status(500).send({
            message: error.message
        })
    })

}