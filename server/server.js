// var express = require('express');
// var app = express();
// var mongoose = require('mongoose');
// mongoose.connect('mongodb://user:mlabdata@ds139801.mlab.com:39801/terry-database');

// app.get('/', function (req, res) {
//   res.send('Hello World!');
// });

// var router = require('./routes/restful.js');
// app.use('/api/v1',router);

// app.listen(3000,'10.211.55.3', function () {
//   console.log('Example app listening on port 3000!')
// });

let express = require('express');
let app = express();

// app.get('/', (request,response)=>{
// 	response.send(`>>>> Terry's NodeJS Server`);
// });


let router = require('./routes/restapi.js');
let home = require('./routes/home.js'); 
let path = require('path');

app.use(express.static(path.join(__dirname, '../public')))
app.use('/',home);
app.use('/api/v1',router);

//LOCATION?
app.use( (req,res,next)=>{
	res.sendFile('index.html',{root: path.join(__dirname,'../public')});
});

// app.listen(3000,()=>{
// 	console.log('Server listening on port 3000');
// });

//var app = require('express')();
let server = require('http').Server(app);
let io = require('socket.io')(server);

let editorSocketService = require('./services/editorSocketService')(io);

server.listen(3000);
server.on('error', (err)=>{throw err});
