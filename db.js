const mongoose = require('mongoose')
    const conectBD = () => {
        mongoose.connect('mongodb+srv://Ataraxia:ataraxia@ataraxia.usy4w.mongodb.net/Ataraxia?retryWrites=true&w=majority', {
                useNewUrlParser: true,
                useUnifiedTopology: true
            },(error) => {

                if (error) {
                    console.log('Error :', error)
                } else {
                    console.log('se conecto a la Base de Datos')

                }

            }
        )
    }
    module.exports={conectBD}