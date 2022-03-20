//?set environment
require('dotenv').config();

const app = require('./app');
const db = require('./app/models');
//const seed = require('./seed'); //-> only run this on development
const PORT = process.env.PORT;

const start = () => {
  //?start database 
  //?start server

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
    console.log('Server is trying to connect to the database');
    //TODO: Start database connection here
    db.mongoose.connect(db.uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
      .then(() => {
        console.log('Successfully connected to the database!')
        //seed.createAccounts(); //-> only run this on development
      })
      .catch((err) => {
        console.log('Encountered an error while connecting to the database!', err);
        process.exit()
      })
  })

}

start();