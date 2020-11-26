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

exports.update = (req, res) => {

    if (Object.entries(req.body).length == 0) {
        return res.status(400).send({
            message: 'los datos  del usuario son obligatorios.'
        })
    }
    const recommendation = {
        characteristics: req.body.characteristics
    }
    
    PathologyModel.findByIdandUpdate(req.params.id,recommendation,{new:true})
    
    .then((dataRecommendation) => {
        res.send(dataRecommendation)
    }).cach((error) => {
        res.status(500).send({
            message: error.message
        })
    })
}
exports.getAll = (req, res) => {

    PathologyModel.find()
        .then((recommendationPatient) => {
            res.send(recommendationPatient)
        }).catch((error) => {
            return res.status(500).send({

                message: error.message
            })

        })
<<<<<<< HEAD
    }
=======
 }
>>>>>>> 82a366eeb5a79536cdba39938e72b62cacb3d2b9
