const jwt = require('jwt-simple')
const moment = require('moment')
const config = require('../config')
const SECRET = config.KeyToken
exports.createToken = (dataUser) => {
    const payload = {
        sub: dataUser._id,
        iat: moment().unix(),
        exp: moment().add('1', 'hour').unix(),
        name: dataUser.name,
        lastName: dataUser.lastName,
        email: dataUser.email,
        password: dataUser.password,
        role: dataUser.role,
        identificationNumber: dataUser.identificationNumber,
    }

return jwt.encode(payload, SECRET)
}

exports.decodeToken = (token) => {
    const decode = new Promise((resolve, reject) =>{
        try{
            const payload = jwt.decode(token, SECRET)
            if(payload.exp <= moment().unix()){
                reject({
                    status: 401,
                    message: 'El token ha expirado'
                })
            }
            resolve(payload.sub)
        }catch{
            reject({
                status: 500,
                message: 'El token es invalido'
            })
        }        
    })
    
    return decode
}