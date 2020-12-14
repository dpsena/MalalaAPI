const ObservationModel = require('../models/observations')
exports.create = async(req, res) => {
    try {
        console.log(req.body)
        if (Object.entries(req.body).length == 0) {

            return res.status(400).send({
                message: 'los datos  del usuario son obligatorios.'
            })
        }
        const observation = new ObservationModel({
            numberDay: req.body.numberDay,
            observation: req.body.observation,
            date: req.body.date,
            user: req.body.user
        })
        const observationPatient= await observation.save()
        res.send(observationPatient)
    } catch (error) {
        res.status(500).send({
            message: error.message
        })
    }
}