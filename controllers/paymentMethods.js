const  PaymentMethodModel = require('../models/payment');
exports.create = async(req, res) =>{
try {
    if (Object.entries(req.body).length==0) {

        return res.status(400).send({
            message: 'los datos del pago son obligatorios.'
        })
    }
    const paymentMethods = new PaymentMethodModel({
        paymentMethod: req.body.paymentMethod,
        
    })
    const dataPayment= await paymentMethods.save()
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
        const paymentMethods =({
            paymentMethod: req.body. paymentMethod,
        }) 
       const paymentUpdate = PaymentMethodModel.findByIdAndUpdate(req.params.id , paymentMethods, {new: true})
       res.send(paymentUpdate)
    } catch (error) {
        res.status(500).send({
            message: error.message
        }) 
    }
}

exports.getAll = async(req, res) =>{
    try {
        const paymentMethods= await PaymentMethodModel.find()
        .populate('user')
        .exec()
        res.send(paymentMethods)
    } catch (error) {
        res.status(500).send({
            message: error.message
        })
    }
  }

exports.getOne = async(req, res) =>{
    try {
        const paymentMethods= await PaymentMethodModel.findById(req.params.id)
        .populate('user')
    .exec()
     res.send(paymentMethods)
    } catch (error) {
        res.status(500).send({
            message: error.message
        })
    }
}

exports.deleteOne = async(req, res) =>{
    try {
        const paymentMethods= await PaymentMethodModel.findByIdAndRemove(req.params.id)
        res.send(paymentMethods)
    } catch (error) {
        res.status(500).send({
            message: error.message
        })
    }
}