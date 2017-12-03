const User = require('../modal/userSchema');


exports.login = function (req, res) {
    let username = req.body.username;
    let password = req.body.password;

    User.findOne({username:username},(err,users)=>{
        if(users){
            if(users.username===username&&users.password===password){
                res.send("Login Successed");
            }else{
                res.send('Password Error');
            }
        }else{
            res.send("User Error");
        }
    });

};

exports.signUp = function (req, res) {
    const username = req.body['sign-username'];
    const password = req.body['sign-password'];
    User.find({username:username},function(err,users){
        if(users.length==0){
            var newUser = new User({
                username:username,
                password:password
            }).save((err)=>{
                if(err){
                    res.send({
                        isSuccess: false,
                        isExist: false
                    });
                }else{
                    res.send({
                        isSuccess:true,
                        isExist: false
                    });
                }
            })
        }else{
            res.send({
                isSuccess: false,
                isExist: true
            });
        }
    });

};

exports.main = function (req, res) {
    res.render('login', {
        layout: false
    });
};