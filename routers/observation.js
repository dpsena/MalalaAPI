module.exports =(app)=>{
    const observation = require('../controllers/observations')
    app.post('/observation/create',observation.create)
    
}