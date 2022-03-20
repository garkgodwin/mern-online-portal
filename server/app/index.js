const express = require('express');
const cors = require('cors');
const app = express();
const corsOptions = {
  origin: "http://localhost:3000"
};
//?Middlewares
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//?Routes
require('./routes')(app);


//?export
module.exports = app;