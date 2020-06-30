// var history = require('connect-history-api-fallback');
// var express = require('express');
// var path = require('path');
// var serveStatic = require('serve-static');
// app = express();
// app.use(history());    
// app.use(serveStatic(__dirname + "/dist"));
// var port = process.env.PORT || 5000;
// app.listen(port);
// console.log('server started '+ port);

// // var history = require('connect-history-api-fallback');
// // var connect = require('connect');

// // var app = connect()
// //   .use(history())
// //   .listen(3000);
// //   var express = require('express');

// // var app = express();
// // app.use(history());
// // var middleware = history({});
// // history({
// //     index: '/index.html'
// //   });
// var express = require('express');
// var path = require('path');
// var serveStatic = require('serve-static');
// app = express();
// app.get('/*', function(req, res) {
//     res.sendFile(path.join(__dirname, '/dist'), function(err) {
//       if (err) {
//         res.status(500).send(err)
//       }
//     })
//   })

// var https = require('https');
// var fs = require('fs');
// var https_options = {
// key: fs.readFileSync("./ssl/private.key"),
// cert: fs.readFileSync("./ssl/certificate.crt"),
// ca: [
// fs.readFileSync('./ssl/ca_bundle.crt')
// ]
// };
// https.createServer(https_options, function (req, res) {
//     res.writeHead(200);
//     res.end("Welcome to Node.js HTTPS Servern");
//     }).listen(5000)



var history = require('connect-history-api-fallback');
const express = require('express');
var serveStatic = require('serve-static');
const app = express();
app.use(express.static(__dirname + '/dist'));
app.use(history());    
const fs = require('fs');
const http = require('http');
const https = require('https');
http.globalAgent.maxSockets = Infinity;
https.globalAgent.maxSockets = Infinity;

app.get('/', function(req, res) {
  res.setHeader('Cache-Control', 'public, max-age=86400');
	res.render('index.html');
  res.end('<p>This server serves up static files.</p>');
  });

const options = {
    key: fs.readFileSync('/etc/letsencrypt/live/allotpark.buzz/privkey.pem'),
    cert: fs.readFileSync('/etc/letsencrypt/live/allotpark.buzz/cert.pem'),
    passphrase: process.env.HTTPS_PASSPHRASE || ''
};

var httpServer = http.createServer(app);
const server = https.createServer(options, app);

httpServer.listen(80);
server.listen(443);
console.log('server started '+ 443);


// var serveStatic = require('serve-static');
// app = express();
// app.use(history());    
// app.use(serveStatic(__dirname + "/dist"));
// var port = process.env.PORT || 5000;
// app.listen(port);
// console.log('server started '+ port);