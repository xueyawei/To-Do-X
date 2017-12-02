const express = require('express');
const app = new express();

// init
app.use('/public', express.static(__dirname + '/public'));
app.use(require('body-parser')());

// set template engine [handlebars]
var handlebars = require('express-handlebars')
    .create({
        defaultLayout: 'main'
    });
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

// mongoDB 
var mongoose = require('mongoose');
var credentials = require('./credentials/credentials');
var opts = {
    server: {
        socketOptions: {
            keepAlive: 1
        }
    }
};
mongoose.connect(credentials.mongo.development.connectionString,opts);

// connect routes
require('./route.js')(app);

// set port#
app.set('port', process.env.PORT || 8888);

// start listen
app.listen(app.get('port'), () => {
    console.log("Server Running at: " + app.get('port'));
})