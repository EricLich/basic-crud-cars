const Car = require('../models/Car');

const carCtrl = {};

carCtrl.getCars = async (req, res) => {
    try{
        const cars = await Car.find();
        if(!cars) return res.status(204).json();
        return res.json(cars);
    }catch(err){
        console.log(err);
    }
}

carCtrl.getCar = async (req, res) => {
    try{
        const car = await Car.findById(req.params.id);
        if(!car) return res.status(204).json();
        return res.json(car);
    }catch(err){
        console.log(err);
    }
}

carCtrl.createCar = async (req, res) => {
    try{
        const carExists = await Car.findOne({plate: req.body.plate});
        if(!carExists){
            const car = await new Car(req.body);
            car.save()
            .then(car => res.json({message: "Car added to inventory"}))
            .catch(err => console.log(err));
        }else{
            res.status(301).json({message: "Car already exists in inventory"});
        }   
    }catch(err){
        console.log(err);
    }
}

carCtrl.editCar = async (req, res) => {
    try{
        const car = await Car.findByIdAndUpdate(req.params.id, req.body)
            .then(car => res.json({message: `Car with plate ${car.plate} has been updated`}))
            .catch(err => console.log(err));
    }catch(err){
        console.log(err);
    }
}

carCtrl.deleteCar = async (req, res) => {
    try{
        const car = await Car.findByIdAndDelete(req.params.id)  
                            .then(car => res.json({message: `Car with plate ${car.plate} deleted`}))
                            .catch(err => res.json({message: "There has been an error"}))
    }catch(err){
        console.log(err);
    }
}


module.exports = carCtrl;