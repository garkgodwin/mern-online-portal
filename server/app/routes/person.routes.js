module.exports = (app) => {
  const personController = require("../controllers/account.controller");
  const router = require("express").Router();

  const { authJwt, emptiness, personMiddlewares } = require("../middleware");

  router.post(
    "/create-person-with-account",
    [
      authJwt.verifyToken,
      authJwt.isAdmin,
      emptiness.body,
      personMiddlewares.possibleDuplication,
    ],
    personController.createPersonWithAccount
  );

  app.use("/api/persons", router);
};
