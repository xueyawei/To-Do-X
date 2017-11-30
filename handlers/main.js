const signUpModule = require('../modal/signUp');

exports.login = function (req, res) {
    console.log(req.body.username);
    console.log(req.body.password);
    res.end('Get!');
};

exports.signUp = function (req, res) {
    const username = req.body['sign-username'];
    const password = req.body['sign-password'];
    console.log('Sign-up\n'+'Username: ' + username + '\nPassword: ' + password);
    res.send("Got")
};

exports.main = function (req, res) {
    res.render('login', {
        layout: false
    });
};