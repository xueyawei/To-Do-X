var main = require('./handlers/main.js');

module.exports = function (app) {

    app.get('/', main.main);

    app.post('/login', main.login);

    app.post('/sign-up', main.signUp);

    // 404 route
    app.use((req, res) => {
        res.type('text/plain');
        res.status(404);
        res.send("404 - Not Found");
    });
}