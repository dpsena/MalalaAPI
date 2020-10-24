module.exports=(app)=>{
    const billing=require('../controllers/billing')
    app.post('/billing/create',billing.create)
    app.put('/billing/update/:id',billing.update)
}