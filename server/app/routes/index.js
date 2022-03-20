module.exports = (app) => {
  //? SAMPLE ROUTE
  app.get('/api', (req, res) => {
    res.json({
      message: "Welcome to jef's server app."
    })
  });
  //TODO: ADD MORE ROUTES HHERE :)

  require('./account.routes')(app);
}