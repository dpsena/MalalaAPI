const RecommendationModel = require('../models/recommendation')
exports.create = async(req, res) => {
    try {
        console.log(req.body)
        const recommendation = new RecommendationModel({
            recommendation: req.body.recommendation,
            date: req.body.date,
            user: req.body.user
        })
        const recommendationPatient = await recommendation.save()
        res.send(recommendationPatient)
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
                message: 'los datos  del usuario son obligatorios.'
            })
        }
        const recommendation = {
            characteristics: req.body.characteristics
        }
        const dataRecommendation = await PathologyModel.findByIdandUpdate(req.params.id, recommendation, { new: true })
        res.send(dataRecommendation)
    } catch (error) {
        res.status(500).send({
            message: error.message
        })
    }
}
exports.getAll = async(req, res) => {
    try {
        const recommendationPatient = await PathologyModel.find()
        res.send(recommendationPatient)
    } catch (error) {

        return res.status(500).send({
            message: error.message
        })
    }
}
