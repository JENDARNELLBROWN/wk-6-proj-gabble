const express = require('express');
const router = express.router();
const models = require('../models');


router.get('/', function(req, res){
  res.render('main');
});



module.exports = router;
