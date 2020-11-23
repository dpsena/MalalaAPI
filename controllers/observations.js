const ObservationModel = require('../models/observations')
exports.create = (req, res) => {
    console.log(req.body)
    const observation = new ObservationModel({
        
        numberDay: req.body.numberDay,
        observation: req.body.observation,
        date: req.body.date,
        user: req.body.user
    })

    observation.save()
        .then((observationPatient) => { res.send(observationPatient) })
        .catch((error) => {
            res.status(500).send({
                message: error.message
            })

        })
}
