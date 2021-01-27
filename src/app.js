const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const router = require('./routes/concesionario.routes');

const app = express();

const PORT = process.env.PORT || 4000;

app.set('port', PORT);
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(router);

module.exports = app;