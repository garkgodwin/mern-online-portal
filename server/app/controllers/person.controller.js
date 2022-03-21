const db = require("../models");
const Person = db.persons;
const Account = db.accounts;

exports.createPersonWithAccount = async (req, res) => {
  const { firstName, lastName, middleName, age, birthDay, address, account } =
    req.body;

  // ? create account info
  // ? create person info
};

exports.createPerson = async (req, res) => {
  // ? create person info only
};
