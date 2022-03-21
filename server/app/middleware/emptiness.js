const body = async (req, res, next) => {
  if (!req.body) {
    return res.status(400).json({
      message: "Server did not recieve any data.",
    });
  }
  console.log("Body is not empty.");
  next();
};

const emptiness = {
  body,
};

module.exports = emptiness;
