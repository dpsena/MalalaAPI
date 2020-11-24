const UserModel = require('../models/user')
const service = require('../services/index')
const nodemailer = require('nodemailer')
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
            // console.log('dataUser ->' , dataUser.email)
            const contentEmail = `<h1>Hola, cómo estás</h1>`
            sendEmailInfo(dataUser.email, 'Bienvenido', contentEmail, '', res)
            requirements(dataUser.email, dataUser.name, res)
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
    let searchBy = {}
    if (req.query.searchBy != undefined && req.query.searchBy != null) {
        const role = new RegExp(`.*${req.query.searchBy}.*`, 'i')
        searchBy = { role: role }
    }
    UserModel.find(searchBy)
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

    exports.sendEmail = (req, res) =>{
        const email = req.query.email
        const name = req.query.name
        requirements(email, name, res)

    }
    const requirements =  (email, name, res) =>{
        const contentEmail = `<h1>Mensaje desde el formulario de contacto</h1>
        Hola, hemos recibido un mensaje de ${name} con el correo ${email}, por favor comunicate.`
        sendEmailInfo('yeceniagmoreno@gmail.com', 'Formulario contacto', contentEmail, '', res)
    }
    const sendEmailInfo = (receiver, subject, contentEmail, contentTxt = '', res) =>{
const transport = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
        user: 'ataraxiasalud@gmail.com',
        pass: '15141381malala5'
    }
})
const configEmail = {
    from: 'AtaraxiaSalud',
    to: receiver,
    subject: subject,
    text: contentTxt,
    html: contentEmail
}
transport.sendMail(configEmail, (error, info) =>{
    if (error){
        res.status(500).send({
            message: 'Error al enviar el correo', error
        })
    }else{
        res.status(200).send({
            message: 'Correo enviado correctamente'
        })
    }
})
    }