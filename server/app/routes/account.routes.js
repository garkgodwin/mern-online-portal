module.exports = (app) => {
  const accountController = require('../controllers/account.controller');
  const router = require('express').Router();

  //?middlewares
  const { authJwt, accountMiddlewares } = require("../middleware");

  router.post('/login', [accountMiddlewares.bodyIsEmpty], accountController.login);
  router.post(
    '/create-account', 
    [
      accountMiddlewares.bodyIsEmpty,
      accountMiddlewares.usernameExists,
      authJwt.verifyToken,
      authJwt.isAdmin], 
    accountController.createAccount
  );
  router.get(
    '/verify-on-mount',
    authJwt.verifyToken,
    accountController.verifyOnMount
  );

  app.use('/api/accounts', router);
}