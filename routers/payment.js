module.exports = (app) =>{
    const payment = require('../controllers/payment');
    app.post('/payment/create', payment.create);
    app.put('/payment/update/:id', payment.update);
    app.get('/payment/getAll', payment.getAll);
    app.get('/payment/getOne/:id', payment.getOne);
    app.delete('/payment/delete/:id', payment.deleteOne);
}