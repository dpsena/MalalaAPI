module.exports = (app) =>{
    const payment = require('../controllers/payment');
    app.post('/payment/create', payment.create);
    app.put('/payment/update/:id', payment.update);
}