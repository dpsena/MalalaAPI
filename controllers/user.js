const UserModel = require('../models/user')
const service = require('../services/index')
exports.create = async(req, res) => {
    try {
        if (Object.entries(req.body).length == 0) {
            return res.status(400).send({
                message: 'los datos  del usuario son obligatorios.'
            })
        }
        const user = new UserModel({
            name: req.body.name,
            lastName: req.body.lastName,
            email: req.body.email,
            password: req.body.password,
            role: req.body.role,
            identificationNumber: req.body.identificationNumber,
        })
        const dataUser = await user.save()
        res.send(dataUser)
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
                message: 'los datos a actualizar deben estar llenos.'
            })
        }
        const user = {
            name: req.body.name,
            lastName: req.body.lastName,
            email: req.body.email,
            password: req.body.password,
        }
        const userUpdate = await UserModel.findByIdAndUpdate(req.params.id, user)
        res.send(userUpdate)
    } catch (error) {
        res.status(500).send({
            message: error.message
        })
    }
}
exports.getAll = async(req, res) => {
    try {
        let searchBy = {}
        if (req.query.searchBy != undefined && req.query.searchBy != null) {
            const role = new RegExp(`.*${req.query.searchBy}.*`, 'i')
            searchBy = { role: role }
        }
        const user = await UserModel.find(searchBy)
        res.send(user)
    } catch (error) {
        res.status(500).send({
            message: error.message
        })
    }
}
exports.getOne = async(req, res) => {
    try {
        const user = await UserModel.findById(req.params.id)
        res.send(user)
    } catch (error) {
        res.status(500).send({
            message: error.message
        })
    }
}
exports.deleteOne = async(req, res) => {
    try {
        const user = await UserModel.findByIdAndRemove(req.params.id)
        res.send(user)
    } catch (error) {
        res.status(500).send({
            message: error.message
        })
    }
}

exports.login = async(req, res) => {
    UserModel.findOne({ email: req.body.email }, (error, dataUser) => {
        try {
            if (dataUser != null) {
                if (dataUser.password == req.body.password) {
                    res.send({ token: service.createToken(dataUser) })
                } else {
                    res.status(400).send({
                        message: 'Los Datos No Coinciden'
                    })
                }
            }
        } catch (error) {
            res.status(400).send({
                message: 'Los datos No Coinciden'
            }
            )
        }
    })
}