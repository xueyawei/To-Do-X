var User = require('../modal/userSchema');

exports.checkUsername = function(req,res){
    console.log('================');
    console.log('Test'+req.query.username);
    User.find({username:req.query.username},(err,user)=>{
        if(user.length!=0){
            console.log("Exist");
            console.log(user)
            res.send({
                username:req.query.username,
                isValid: false
            });
        }else{
            res.send({
                username:req.query.username,
                isValid: true
            });
        }

        
    });
    
};