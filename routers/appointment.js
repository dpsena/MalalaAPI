module.exports=(app)=>{
    const appointment =require('../controllers/appointment')
    app.post('/appointment/create',appointment.create)
    app.put('/appointment/update/:id',appointment.update)
}