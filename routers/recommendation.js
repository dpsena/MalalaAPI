module.exports =(app)=>{
   
    const recommendation = require('../controllers/recommendation')
    app.post('/recommendation/create',recommendation.create)
}