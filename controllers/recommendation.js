const RecommendationModel = require('../models/recommendation')



exports.create = (req, res) => {
    console.log(req.body)
    const recommendation = new RecommendationModel({
        
        recommendation: req.body.recommendation,
        date: req.body.date,
        user: req.body.user
    })

    recommendation.save()
        .then((recommendationPatient) => { res.send(recommendationPatient) })
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