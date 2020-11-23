const PathologyModel = require('../models/pathology')

exports.create = (req, res) => {
console.log(req.body)
    const pathology = new PathologyModel({
        
        name: req.body.name,
        characteristics: req.body.characteristics
    })
    pathology.save()
        .then((dataPathology) => {
            res.send(dataPathology)
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
            message: 'los datos  del usuario son obligatorios.'
        })
    }
    const pathology = {
        characteristics: req.body.characteristics
    }
    
    PathologyModel.findByIdandUpdate(req.params.id,pathology,{new:true})
    
    .then((dataPathology) => {
        res.send(dataPathology)
    }).cach((error) => {
        res.status(500).send({
            message: error.message
        })
    })
}
exports.getAll = (req, res) => {

    PathologyModel.find()
        .then((pathology) => {
            res.send(pathology)
        }).catch((error) => {
            return res.status(500).send({
                message: error.message
            })

        })

}
