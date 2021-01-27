const express = require('express');
const carCtrl = require('../controllers/car.controller');

const router = express.Router();


router.get('/cars', carCtrl.getCars);

router.get('/cars/:id', carCtrl.getCar);

router.post('/cars', carCtrl.createCar);

router.put('/cars/:id', carCtrl.editCar);

router.delete('/cars/:id', carCtrl.deleteCar);


module.exports = router;