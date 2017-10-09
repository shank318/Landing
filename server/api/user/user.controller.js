'use strict';

var config = require('../../config/environment');
var User = require('./user.model');
var Errors = require('../../error');
var Success = require('../../responses');



function handleError (res, err) {
  return res.status(500).send(err);
}


exports.signup = function (req, res) {
  var email = req.body.email;
  if (!email) return Errors.errorMissingParam(res, 'email');
  User.create({ "email": email }, function (err, user) {
    Success.successResponse(res, {}, 200);
  });
};


