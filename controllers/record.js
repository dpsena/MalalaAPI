const record = require('../models/record')
const RecordModel = require('../models/record')
exports.create = (req, res) => {

    if (Object.entries(req.body).length == 0) {
        return res.status(400).send({
            message: 'los datos del historial no deben estar vacios.'
        })
    }
    const record = new RecordModel({
        date: req.body.date,
        hour: req.body.hour,
        pathology: req.body.pathology,
        observations: req.body.observations,
        recommendations: req.body.recommendations,
        printer: req.body.printer,

    })
    record.save()
        .then((dataRecord) => {
            res.send(dataRecord)
        })
        .catch((error) => {
            res.status(500).send({
                message: error.message
            })
        })
}

exports.update = (req, res) => {
    if (Object.entries(req.body).length == 0) {
        return res.status(400).send({
            message: 'los datos del historial a actualizar no pueden estar vacios.'
        })
    }
    const record = {
        date: req.body.date,
        recommendations: req.body.recommendations,
        observations: req.body.observations,
        printer: req.body.printer,

    }
    RecordModel.findByIdAndUpdate(req.params.id, record)
        .then((recordUpdate) => {
            res.send(recordUpdate)
        })
        .catch((error) => {
            res.status(500).send({
                message: error.message
            })
        })
}