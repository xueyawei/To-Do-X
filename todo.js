const express = require('express');
const app = new express();

// set port#
app.set('port', process.env.PORT || 8888);

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

// connect routes
require('./route.js')(app);

// start listen
app.listen(app.get('port'), () => {
    console.log("Server Running at: " + app.get('port'));
})