const express = require('express');
const app = new express();

// set port#
app.set('port', process.env.PORT || 8888);

// set static directory
app.use('/public',express.static(__dirname + '/public'));

// route
app.get('/',function(req,res){
    res.type('text/html');
    res.sendFile(__dirname + '/html/index.html');
});

app.post('/login',(req,res)=>{
    console.log(req);
    res.end('Get!');
});

// 404 route
app.use((req,res)=>{
    res.type('text/plain');
    res.status(404);
    res.send("404 - Not Found");
});



app.listen(app.get('port'),()=>{
    console.log("Server Running at: "+app.get('port'));
})