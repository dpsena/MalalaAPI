const PaymentModel = require('../models/payment');
exports.create = async(req, res) =>{
    try {
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
        const dataPayment = await payment.save()
        res.send(dataPayment)
    } catch (error) {
        res.status(500).send({
            message: error.message
        })
    }
}

exports.update = async(req, res) =>{
    try {
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
      const  paymentUpdate = await PaymentModel.findByIdAndUpdate(req.params.id , payment, {new: true})
      res.send(paymentUpdate)
    } catch (error) {
        res.status(500).send({
            message: error.message
        })
    }
}

exports.getAll = async(req, res) =>{
    try {
        const payments= PaymentModel.find()
        .populate('user')
        .exec()
        res.send(payments)
    } catch (error) {
        res.status(500).send({
            message: error.message
        })
    }
}

exports.getOne = async(req, res) =>{
    try {
       const payment=await   PaymentModel.findById(req.params.id)
       .populate('user')
    .exec()
       res.send(payment)
    } catch (error) {
        res.status(500).send({
            message: error.message
        })  
    }
}

exports.deleteOne = async(req, res) =>{
    try {
       const payment =await PaymentModel.findByIdAndRemove(req.params.id)
       res.send(payment)
    } catch (error) {
        res.status(500).send({
            message: error.message
        })
    }
}