const RecordModel = require('../models/record')
exports.create = async(req, res) => {
    try {
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
        const dataRecord = await record.save()
        res.send(dataRecord)
    } catch (error) {
        res.status(500).send({
            message: error.message
        })
    }
}
exports.update = async(req, res) => {
    try {
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
        const recordUpdate = await RecordModel.findByIdAndUpdate(req.params.id, record, { new: true })
    } catch (error) {
        res.status(500).send({
            message: error.message
        })
    }
}



exports.getAll =async(req, res) => {
    try {
        const records = await RecordModel.find()
            .populate('user')
            .exec()
        res.send(records)
    } catch (error) {
        res.status(500).send({
            message: error.message
        })
    }
}



exports.getOne =async(req, res) => {
    try {
        const record = await RecordModel.findById(req.params.id)
            .populate('user')
            .exec()
        res.send(record)
            
    } catch (error) {
        res.status(500).send({
            message: error.message
        })
    }
}

