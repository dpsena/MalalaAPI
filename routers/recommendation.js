module.exports =(app)=>{
   
    const recommendation = require('../controllers/recommendation')
    app.post('/recommendation/create',recommendation.create)
    app.put('/recommendation/update/:id' ,isAuth.auth ,recommendation.update)
    app.get('/recommendation/getAll',recommendation.getAll)
}