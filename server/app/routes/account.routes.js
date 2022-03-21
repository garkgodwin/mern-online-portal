module.exports = (app) => {
  const accountController = require("../controllers/account.controller");
  const router = require("express").Router();

  //?middlewares
  const { authJwt, emptiness, accountMiddlewares } = require("../middleware");

  router.post("/login", [emptiness.body], accountController.login);
  /*
    creating account
      - only admin access
  */
  router.post(
    "/create-account",
    [
      emptiness.body,
      accountMiddlewares.usernameExists,
      authJwt.verifyToken,
      authJwt.isAdmin,
    ],
    accountController.createAccount
  );
  router.get(
    "/verify-on-mount",
    authJwt.verifyToken,
    accountController.verifyOnMount
  );

  app.use("/api/accounts", router);
}