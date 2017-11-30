var mongoose = require('mongoose');
var credentials = require('../credentials/credentials')

var opts = {
    server: {
        socketOptions: {
            keepAlive: 1
        }
    }
};

mongoose.connect(credentials.mongo.development.connectionString,opts);