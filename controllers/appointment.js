const appointmentModel = require('../models/appointment')

exports.create = async(req, res) => {
    try {
        if (Object.entries(req.body).length==0) {

            return res.status(400).send({
                message: 'los datos  del usuario son obligatorios.'
            })
        }
        const appointment = new appointmentModel({
            date: req.body.date,
            description: req.body.description,
            user: req.body.user
        })
        const dataAppointment= await appointment.save()
        res.send(dataAppointment)
    } catch (error) {
        res.status(500).send({
            message: error.message
        }) 
    }
}

exports.update = async(req,res) =>{
    try {
        if(Object.entries(req.body).length == 0 ){

            return res.status(400).send({
                message: 'Los datos son obligatorios'
            })
        }
       const appointment = {
            date: req.body.date,
            description: req.body.description,
            user: req.body.user
        }
        const appointmentUpdate= await appointmentModel.findByIdAndUpdate(req.params.id, appointment)
        res.send(appointmentUpdate)
    } catch (error) {
        res.status(500).send({
            message: error.message
        })
    }
}

exports.getAll = async(req, res) =>{
    try {
        const appointments = await appointmentModel.find()
        .populate('Appointment')
        .exec () 
         res.send (appointments)
    } catch (error) {
        res.status(500).send ({
            message: error.message
        })
    }
}

exports.getOne = async(req, res) =>{
    try {
        const appointments = await appointmentModel.findById(req.params.id)
        .populate ('Appointment')
        .exec ()
        res.send (appointments )
    } catch (error) {
        res.status(500).send ({
            message: error.message
        })
    }
}
exports.deleteOne = async(req, res) =>{
    try {
        const appointments = await appointmentModel.findByIdAndRemove(req.params.id)
        res.send (appointments )
    } catch (error) {
        res.status(500).send ({
            message: error.message
        })
    }
}