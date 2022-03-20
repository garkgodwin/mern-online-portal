const jwt = require("jsonwebtoken");
const SECRET_KEY = process.env.SECRET_KEY;
const db = require("../models");
const Account = db.accounts;

verifyToken = (req, res, next) => {
  const authorization = req.headers.authorization;
  const token = authorization.substring(7);
  if (!token) {
    return res.status(403).json({
      message: "Server did not recieve any token."
    })
  }

  jwt.verify(token, SECRET_KEY, (err, decoded) => {
    if (err) {
      return res.status(401).json({
        message: "This token is not authorized."
      })
    }
    req.accountId = decoded.id;
    next();
  });
};
isAdmin = (req, res, next) => {
  let result = {
    success: false,
    invalid: false,
    failure: false,
    error: false,
    message: "",
  }
  Account.findByPk(req.accountId).then(account => {
    if(account.role === "ADMIN"){
      next();
    }

    let result = {
      ...result,
      invalid: true,
      message: "Requires admin role."
    }
    res.status(403).json(result)
  });
};
isRegistrar = (req, res, next) => {
  let result = {
    success: false,
    invalid: false,
    failure: false,
    error: false,
    message: "",
  }
  Account.findByPk(req.accountId).then(account => {
    if(account.role === "REGISTRAR"){
      next();
    }
    
    let result = {
      ...result,
      invalid: true,
      message: "Requires registrar role."
    }
    res.status(403).json(result)
  });
};
isAccountant = (req, res, next) => {
  let result = {
    success: false,
    invalid: false,
    failure: false,
    error: false,
    message: "",
  }
  Account.findByPk(req.accountId).then(account => {
    if(account.role === "ACCOUNTANT"){
      next();
    }
    
    let result = {
      ...result,
      invalid: true,
      message: "Requires accountant role."
    }
    res.status(403).json(result)
  });
};
isInstructor = (req, res, next) => {
  let result = {
    success: false,
    invalid: false,
    failure: false,
    error: false,
    message: "",
  }
  Account.findByPk(req.accountId).then(account => {
    if(account.role === "INSTRUCTOR"){
      next();
    }
    
    let result = {
      ...result,
      invalid: true,
      message: "Requires instructor role."
    }
    res.status(403).json(result)
  });
};
isStudent = (req, res, next) => {
  let result = {
    success: false,
    invalid: false,
    failure: false,
    error: false,
    message: "",
  }
  Account.findByPk(req.accountId).then(account => {
    if(account.role === "STUDENT"){
      next();
    }
    
    let result = {
      ...result,
      invalid: true,
      message: "Requires student role."
    }
    res.status(403).json(result)
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