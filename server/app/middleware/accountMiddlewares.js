const db = require('../models');
const Account = db.accounts;

usernameExists = async (req, res, next) => {
  const { username } = req.body;
  await Account.findOne({ username: username })
    .then((data) => {
      if (data) {
        return res.status(409).json({
          message: "Username already taken.",
        });
      } else {
        next();
      }
    })
    .catch((error) => {
      return res.status(500).json({
        message: error.message,
      });
    });

  next();
};

const accountMiddlewares = {
  usernameExists,
};

module.exports = accountMiddlewares;