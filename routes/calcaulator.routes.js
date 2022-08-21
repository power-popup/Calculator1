module.exports = app => {
    const calcaulator = require("../controllers/calcaulator.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Candidate
    router.get("/result", calcaulator.calculate);
    app.use('/api/calcaulator', router);
  };