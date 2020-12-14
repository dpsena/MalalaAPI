const PathologyModel = require('../models/pathology')
exports.create = async(req, res) => {
    try {
        console.log(req.body)
    const pathology = new PathologyModel({
  
        name: req.body.name,
        characteristics: req.body.characteristics
    })
const dataPathology= await pathology.save()
res.send(dataPathology)
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
    const pathology = {
        characteristics: req.body.characteristics
    }
    
    const dataPathology=await PathologyModel.findByIdandUpdate(req.params.id,pathology,{new:true})
    res.send(dataPathology)
} catch (error) {
    res.status(500).send({
        message: error.message
    })
}
}

exports.getAll = async(req, res) => {

    try {
        const pathology= await PathologyModel.find()
        res.send(pathology)
    } catch (error) {

        return res.status(500).send({
            message: error.message
        })
    }
}

