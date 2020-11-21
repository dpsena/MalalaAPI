const ObservationModel = require('../models/observations')
exports.create = (req, res) => {

    const observation = new ObservationModel({
        numberDay: req.body.numberDay,
        observation: req.body.observation,
        nameprofessional: req.body.nameprofessional,
        idProfessionalNumber: req.body.idProfessionalNumber,
        date: req.body.date
    })

    observation.save()
        .then((observationPatient) => { res.send(observationPatient) })
        .catch((error) => {
            res.status(500).send({
                message: error.message
            })

        })
}
/* exports.update = (req, res) => {

    const observation = new ObservationModel({
        observation: req.body.observation,
    })

    observation.save()
        .then((observationPatient) => { res.send(observationPatient) })
        .catch((error) => {
            res.status(500).send({
                message: error.message
            })

        })
} */