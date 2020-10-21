const mongoose = require('mongoose')
    const conectBD = () => {
        mongoose.connect('mongodb+srv://Ataraxia:ataraxia@ataraxia.usy4w.mongodb.net/Ataraxia?retryWrites=true&w=majority', {
                useNewUrlParser: true,
                useUnifiedTopology: true
            },
            (error) => {

                if (error) {
                    console.log('Error :', error)
                } else {
                    console.log('se esta conecto a la base de datos ')

                }

            }
        )
    }
    module.exports={conectBD}