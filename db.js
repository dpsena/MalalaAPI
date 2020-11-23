const mongoose = require('mongoose')
const config = require ('./config')

    const conectBD = () => {

        mongoose.connect(config.mongoDB, {
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
/*    
'mongodb+srv://Ataraxia:ataraxia@ataraxia.usy4w.mongodb.net/Ataraxia?retryWrites=true&w=majority'
config.mongoDB
*/