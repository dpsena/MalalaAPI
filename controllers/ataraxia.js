const ataraxia = require('../models/ataraxia')
const AtaraxiaModel = require('../models/ataraxia')
exports.create = (req, res) => {

    if (Object.entries(req.body).length==0) {
        return res.status(400).send({
            message: 'los datos  de ataraxia son obligatorios.'
        })
    }
    const ataraxia = new AtaraxiaModel({
        nit: req.body.nit,
        tradeName: req.body.tradeName,
        address: req.body.address,
        telephone: req.body.telephone,
        email: req.body.email,
      
       
    })
    ataraxia.save()
        .then((dataAtaraxia) => {
            res.send(dataAtaraxia)
        })
        .catch((error) => {
            res.status(500).send({
                message: error.message
            })
        })
}

exports.update=(req,res)=>{
    if (Object.entries(req.body).length==0) {
        return res.status(400).send({
            message: 'los datos a actualizar deben estar llenos.'
        })
    }
    const ataraxia={
        nit: req.body.nit,
        tradeName: req.body.tradeName,
        address: req.body.address,
        telephone: req.body.telephone,
        email: req.body.email,
        
    }
    AtaraxiaModel.findByIdAndUpdate(req.params.id,ataraxia)
    .then((ataraxiaUpdate) => {
        res.send(ataraxiaUpdate)
    })
    .catch((error) => {
        res.status(500).send({
            message: error.message
        })
    })
}
