module.exports=(app)=>{
    const billing=require('../controllers/billing')
    app.post('/billing/create',billing.create)
    app.put('/billing/update/:id',billing.update)
    app.get('/billing/getAll',billing.getAll)
    app.get('/billing/getOne/:id',billing.getOne)
    app.delete('/billing/delete/:id',billing.deleteOne)
}