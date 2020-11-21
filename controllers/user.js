const UserModel = require('../models/user')
const service = require('../services/index')
exports.create = (req, res) => {

    if (Object.entries(req.body).length==0) {
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
    user.save()
        .then((dataUser) => {
            res.send(dataUser)
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
    const user={
        name: req.body.name,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password,
        
    }
    UserModel.findByIdAndUpdate(req.params.id,user)
    .then((userUpdate) => {
        res.send(userUpdate)
    })
    .catch((error) => {
        res.status(500).send({
            message: error.message
        })
    })
}


exports.getAll = (req , res) => {
    UserModel.find()
    .then((user) => {res.send(user)})
    .catch(
        (error) => {
            res.status(500).send({
                message: error.message
            })
        }
    )
}


/**Metodo para obtener un user por el id
 * @param {*} req => Todo lo que se recibe
 * @param {*} res => La respuesta que se devolverá
*/

exports.getOne = (req , res) => {
   UserModel.findById(req.params.id)
    .then((user) => {res.send(user) } )
    .catch(
        (error) =>{
            res.status(500).send({
                message: error.message
            })
        }
    )
}

/**Metodo para eliminar un usuario por el id
 * @param {*} req => Todo lo que se recibe
 * @param {*} res => La respuesta que se devolverá
*/
exports.deleteOne = (req, res) => {
    UserModel.findByIdAndRemove(req.params.id)
    .then((user) => { res.send(user) } )
    .catch(
        (error) =>{
            res.status(500).send({
                message: error.message
            })
        }
    ) 
    }

    exports.login = (req,res) =>{
        UserModel.findOne({email:req.body.email}, (error,dataUser) =>{
            if(dataUser != null){
                if(dataUser.password == req.body.password){
                    res.send({ token: service.createToken (dataUser)})
                }else{
                    res.status(400).send({
                        message:'Los Datos No Coinciden'
                    })
                }
    
            }else{
                res.status(400).send({
                    message: 'Los datos No Coinciden'
                }
                )}
            }
            )}

    