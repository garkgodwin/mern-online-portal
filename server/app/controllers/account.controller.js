const jwt = require('jsonwebtoken');
const argon2 = require('argon2');
const db = require('../models');
const Account = db.accounts;
const SECRET_KEY = process.env.SECRET_KEY;

exports.login = async(req, res) => {
  //destructure username and password from body
  const {username, password} = req.body;
  if(!username || !password){
    return res.status(400).json({
      message: "Server recieved an incomplete data"
    })
  }
  //get account through username
  let account = await Account.findOne({username: username}).exec();
  //if username exists, check password
  if(account){
    try{
      // verify password through argon2
      // creates token once verifed
      // sends data back to client
      if(await argon2.verify(account.password, password)){
        var token = jwt.sign({ id: account.id }, SECRET_KEY, { expiresIn: 86400 });
        res.status(200).json({
          message: "Login successful",
          role: account.role,
          username: account.username,
          token: token
        })
      }
      else{
        res.status(401).json({
          message: "No account with this username or password"
        })
      }
    }
    catch(err){
      res.status(500).json({
        message: err
      })
    }
  }
  else{
    res.status(401).json({
      message: "No account with this username or password"
    });
  }
}

exports.createAccount = async(req, res) => {
  //create information of person first

  //use this status code
  res.status(201).json({
    message: "Passed the middlewares",
  });
}

exports.verifyOnMount = async(req, res) => {
  const id = req.accountId;
  const account = await Account.findOne({_id: id}).exec();
  if(account){
    const role = account.role;
    const username = account.username;
    res.status(200).json({
      role: role,
      username: username,
      message: "Token is verified"
    })
  }
  else{
    res.status(401).json({
      message: "Failed to fetch account data"
    })
  }
}