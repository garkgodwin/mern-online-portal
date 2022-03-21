const jwt = require("jsonwebtoken");
const SECRET_KEY = process.env.SECRET_KEY;
const db = require("../models");
const Account = db.accounts;
//?Constant roles
const roles = require('../constants/roles');

verifyToken = (req, res, next) => {
  const authorization = req.headers.authorization;
  const token = authorization.substring(7);
  if (!token) {
    return res.status(403).json({
      message: "Server did not recieve any token.",
    });
  }

  jwt.verify(token, SECRET_KEY, (err, decoded) => {
    if (err) {
      return res.status(401).json({
        message: "This token is not authorized.",
      });
    }
    req.accountId = decoded.id;
    console.log("Token is verified.");
    next();
  });
};

isAdmin = (req, res, next) => {
  Account.findById(req.accountId).then((account) => {
    if (account.role === roles.ADMINISTRATOR) {
      console.log("User is admin.");
      next();
    } else {
      res.status(403).json({
        message: "Requires admin role.",
      });
    }
  });
};

isRegistrar = (req, res, next) => {
  Account.findById(req.accountId).then((account) => {
    if (account.role === roles.REGISTRAR) {
      console.log("User is registrar")
      next();
    }
    else{
      res.status(403).json({
        message: "Requires registrar role.",
      });
    }
  });
};
isAccountant = (req, res, next) => {
  Account.findById(req.accountId).then((account) => {
    if (account.role === roles.ACCOUNTANT) {
      console.log("User is accountant")
      next();
    }
    else{
      res.status(403).json({
        message: "Requires accountant role.",
      });
    }
  });
};
isInstructor = (req, res, next) => {
  Account.findById(req.accountId).then((account) => {
    if (account.role === roles.INSTRUCTOR) {
      console.log("User is instructor")
      next();
    }else{
      res.status(403).json({
        message: "Requires instructor role.",
      });
    }
  });
};
isStudent = (req, res, next) => {
  Account.findById(req.accountId).then((account) => {
    if (account.role === roles.STUDENT) {
      console.log("User is student")
      next();
    }else{
      res.status(403).json({
        message: "Requires student role.",
      });
    }    
  });
};

const authJwt = {
  verifyToken,
  isAdmin,
  isRegistrar,
  isAccountant,
  isInstructor,
  isStudent,
};
module.exports = authJwt;