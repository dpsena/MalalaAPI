module.exports=(app)=>{
    const ataraxia=require('../controllers/ataraxia')
    app.post('/ataraxia/create', ataraxia.create)
    app.put('/ataraxia/update/:id', ataraxia.update)
}