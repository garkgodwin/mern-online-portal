const authJwt = require("./authJwt");
const emptiness = require("./emptiness");
const accountMiddlewares = require("./accountMiddlewares");
const personMiddlewares = require("./personMiddlewares");

module.exports = {
  //?middlewares common
  authJwt,
  emptiness,
  //?middlewares for controllers data
  accountMiddlewares,
  personMiddlewares,
};