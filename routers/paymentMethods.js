
module.exports = (app) =>{
    const paymentMethods = require('../controllers/paymentMethods');
    app.post('/paymentMethods/create', paymentMethods.create);
    app.put('/paymentMethods/update/:id', paymentMethods.update);
    app.get('/paymentMethods/getAll', paymentMethods.getAll);
    app.get('/paymentMethods/getOne/:id', paymentMethods.getOne);
    app.delete('/paymentMethods/delete/:id', paymentMethods.deleteOne);
}