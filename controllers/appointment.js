const appointment = require('../models/appointment');
const appointmentModel = require('../models/appointment')
/**
 * Metodo para Crear una Cita
 * @param {*} req => Todo lo que enviamos desde el body
 * @param {*} res => La respuesta que se devolvera 
 */
exports.create = (req, res) => {
    
    if (Object.entries(req.body).length==0) {
        return res.status(400).send({
            message: 'los datos  del usuario son obligatorios.'
        })
    }
    const appointment = new appointmentModel({
        date: req.body.date,
        time: req.body.time,
        description: req.body.description,
        professional: req.body.professional,
        patient: req.body.patient,
        
       
    })
    appointment.save()
        .then((dataAppointment) => {
            res.send(dataAppointment)
        })
        .catch((error) => {
            res.status(500).send({
                message: error.message
            })
        })
}
/**
 * Metodo para Actualizar una Cita
 * @param {*} req => Todo lo que enviamos desde el body
 * @param {*} res => La respuesta que se devolvera 
 */

exports.update = (req,res) =>{
    if(Object.entries(req.body).length == 0 ){
        return res.status(400).send({
            message: 'Los datos son obligatorios'
        })
    }
 
    const appointment = {
        date: req.body.date,
        time: req.body.time,
        description: req.body.description,
        professional: req.body.professional,
        patient: req.body.patient,
    }

    appointmentModel.findByIdAndUpdate(req.params.id, appointment)
    .then(
        (appointmentUpdate) =>{
            res.send(appointmentUpdate)
        }
    ).catch(
        (error) =>{
            res.status(500).send({
                message: error.message
            })
        }
    )

}