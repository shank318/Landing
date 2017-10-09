'use strict';

var express = require('express');
var router = express.Router();
var controller = require('./user.controller');

router.post('/add', controller.signup);
module.exports = router;
