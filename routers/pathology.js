module.exports =(app)=>{
   
    const pathology = require('../controllers/pathology')
    app.post('/pathology/create',pathology.create)
}