const db = require("../models");
const Person = db.persons;

const possibleDuplication = async (req, res, next) => {
  const { firstName, lastName, middleName, age, birthDay } = req.body;

  const personExists = await Person.findOne({
    firstName: firstName,
    lastName: lastName,
    middleName: middleName,
    age: age,
    birthDay: birthDay,
  }).exec();

  if (personExists) {
    res.status(409).json({
      message: "Possible duplication of person's information",
    });
  } else {
    next();
  }
};

const personMiddlewares = {
  possibleDuplication,
};

module.exports = personMiddlewares;
