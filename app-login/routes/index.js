var fs = require("fs");

/**
 * GET /
 * Home page.
 */
exports.index = function(req, res) {
  res.render('index', {
    title: 'Home'
  });
};


exports.postSignup = function(req, res, next) {
  var user = {
    email: req.body.email,
    phone: req.body.phone,
    nickname: req.body.nickname,
    password: req.body.password
  };

  fs.appendFile('data.txt', JSON.stringify(user), function(error) {
    if (error) {
      console.log(error);
  	}
    res.status(200).send('你成功啦');
});

};
