var User = require('../modal/userSchema');

exports.checkUsername = function(req,res){
    console.log('================');
    console.log(req.query.username);
    User.find({username:req.query.username},(err,user)=>{
        if(user.length!=0){
            console.log("Exist");
            console.log(user)
            res.send(req.query.username+'&exist');
        }else{
            res.send(req.query.username+'&available');
        }

        
    });
    
};