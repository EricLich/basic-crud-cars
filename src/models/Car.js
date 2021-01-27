const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const model = mongoose.model;

const carSchema = new Schema({
    model:{
        type: String,
        required: true,
    },
    brand: {
        type: String,
        required: true,
    },
    color: {
        type: String,
        required: true
    },
    plate: {
        type:String,
        required:true,
        unique: true
    }
}, {timestamps:true, versionKey:false});

module.exports = model('Car', carSchema);