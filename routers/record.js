module.exports=(app)=>{
    const record=require('../controllers/record')
    app.post('/record/create',record.create)
    app.put('/record/update/:id',record.update)
    app.get('/record/getAll/', record.getAll)
    app.get('/record/getOne/:id', record.getOne)
}