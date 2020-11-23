module.exports=(app)=>{
    const appointment =require('../controllers/appointment')
    app.post('/appointment/create',appointment.create)
    app.put('/appointment/update/:id',appointment.update)
    app.get('/appointment/getAll', appointment.getAll)
    app.get('/appointment/getOne/:id', appointment.getOne)
    app.delete ('/appointment/delete/:id', appointment.deleteOne)
}