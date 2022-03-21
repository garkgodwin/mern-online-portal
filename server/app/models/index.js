const mongoose = require('mongoose');
//?set database for development and production
let URI = "";
if(process.env.ENV === 'DEVELOPMENT'){
  URI = process.env.MONGO_URI_DEV
}
else{
  URI = process.env.MONGO_URI_PROD
}
//?db key:values
const db = {};
db.mongoose = mongoose;
db.uri = URI;
//?Collections
db.accounts = require('./account.model')(mongoose);
db.persons = require("./person.model")(mongoose);

module.exports = db;