'use strict';

var User = require('./api/user/user.model');

module.exports = function (app) {

  // API routes
app.use('/', require('./api/user'));



if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}



// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

app.post('/email', function(req, res) {
  console.log(req.body.email);
    if (req.body.email) {
      User.create({ "email": req.body.email }, function (err, user) {
      res.redirect('/?submitted=true');
    });
    }else{
      res.redirect('/');
    }
});




app.get('/', function( req, res ){
    res.render('home', { submitted: req.query.submitted } );
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  res.status(404);
  // respond with json
  if (req.accepts('json')) {
    res.send({ error: 'Not found' });
    return;
  }
});






};
