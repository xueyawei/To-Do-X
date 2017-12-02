var mongoose = require('mongoose');
var credentials = require('../credentials/credentials')
var user = require('./userSchema');

var opts = {
    server: {
        socketOptions: {
            keepAlive: 1
        }
    }
};

//TODO: 

exports.createAccount = function(username,pass){
    mongoose.connect(credentials.mongo.development.connectionString,opts);
    
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open',function(){
        user.findOne({name:username},(err,result)=>{
            if(result){
                console.log("Already exist")
            }else{
                console.log('====================');
                console.log(username+'||'+pass);
                user.create({
                    username: username,
                    hashPass: pass
                },function(err,userX){
                    console.log(userX)
                });
                db.close();
            }

        })
    });
}