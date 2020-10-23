module.exports=(app)=>{
    const record=require('../controllers/record')
    app.post('/record/create',record.create)
    app.put('/record/update/:id',record.update)
}