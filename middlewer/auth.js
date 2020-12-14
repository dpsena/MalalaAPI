const service = require ('../services/index')

exports.auth = async(req, res, next) => {
    try {
        if(!req.headers.authorization){

            return res.status(400).send({
                message: 'No tienes permiso para realizar esta operación'
            })
        }
        const token = req.headers.authorization.split(' ')[1]
        const respon= await service.decodeToken(token)
        req.user = respon
        next()

    } catch (error) {
        res.status(error.status).send({
            message: error.message
        })
    }
}