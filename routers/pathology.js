module.exports =(app)=>{
   
    const pathology = require('../controllers/pathology')
    app.post('/pathology/create',pathology.create)
    app.put('/pathology/update/:id' ,pathology.update)
    app.get('/pathology/getAll',pathology.getAll)

}

