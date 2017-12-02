var main = require('./handlers/main.js');
var api = require('./handlers/api');

module.exports = function (app) {
    
    // pages route
    app.get('/', main.main);

    app.post('/login', main.login);

    app.post('/sign-up', main.signUp);

    // api route
    app.get('/api/check-username', api.checkUsername);
    
    // 404 route
    app.use((req, res) => {
        res.type('text/plain');
        res.status(404);
        res.send("404 - Not Found");
    });
}