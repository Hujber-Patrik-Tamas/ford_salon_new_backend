module.exports = (app) =>{
    const router = require('express').Router(); // router tárolja a útvonalakat
    const ford = require('../controllers/ford.controller');
    // const blog = require('../controllers/LoggedIn.controller.js');


    router.get('/ford/getCars',ford.getCars)
    router.get('/ford/getModels',ford.getModels)
    router.get('/ford/getExtras',ford.getExtras)
    router.get('/ford/getPayment',ford.getPayment)
    router.get('/ford/getSalons',ford.getSalons)
    router.get('/ford/getUsers',ford.getUsers)
    router.get('/ford/getOrders',ford.getOrders)


    // router.post('/login',auth.login);
    
    app.use('/api',router); // default route név
}