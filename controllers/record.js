const RecordModel = require('../models/record')

            /**MÉTODO PARA AGREGAR UN HISTORIAL */

exports.create = (req, res) => {

    if (Object.entries(req.body).length == 0) {
        return res.status(400).send({
            message: 'los datos del historial no deben estar vacios.'
        })
    }
    const record = new RecordModel({
        dateAndHour: req.body.dateAndHour,
        pathology: req.body.pathology,
        observations: req.body.observations,
        recommendations: req.body.recommendations,
        printer: req.body.printer,
        user: req.body.user

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

            /**MÉTODO PARA MODIFICAR UN HISTORIAL */

exports.update = (req, res) => {
    if (Object.entries(req.body).length == 0) {
        return res.status(400).send({
            message: 'los datos del historial a actualizar no pueden estar vacios.'
        })
    }
    const record = {
        dateAndHour: req.body.dateAndHour,
        pathology: req.body.pathology,
        observations: req.body.observations,
        recommendations: req.body.recommendations,
        printer: req.body.printer,
        user: req.body.user
    }
    RecordModel.findByIdAndUpdate(req.params.id, record, {new: true})
        .then((recordUpdate) => {
            res.send(recordUpdate)
        })
        .catch((error) => {
            res.status(500).send({
                message: error.message
            })
        })
}

            

exports.getAll = (req, res) => {
    RecordModel.find()
    .populate('user')
    .exec()
    .then((records) => {
        res.send(records)
    })
    .catch((error) => {
        res.status(500).send({
            message: error.message
        })
    })
}



exports.getOne = (req, res) => {
    RecordModel.findById(req.params.id)
    .populate('user')
    .exec()
    .then((record) => {
        res.send(record)
    })
    .catch((error) => {
        res.status(500).send({
            message: error.message
        })
    })
}

